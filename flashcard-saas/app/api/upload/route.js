import { NextRequest, NextResponse } from 'next/server'; // To handle the request and response
import { promises as fs } from 'fs'; // To save the file temporarily
import { v4 as uuidv4 } from 'uuid'; // To generate a unique filename
import PDFParser from 'pdf2json'; // To parse the pdf
import os from 'os';
import path from 'path';
import OpenAI from 'openai';




const systemPrompt = `
You are a flashcard creator.  Your task is to generate concise and effective
flashcards based on the given topic or content.  Follow these guidelines:


1. Create clear and concise questions for the front of the flashcard.
2. Provide accurate and informative answers for the back of the flashcard.
3. Ensure that each flashcard focuses on a single concept or piece of information.
4. Use simple language to make the flashcards accessible to a wide range of learners.
5. Include a variety of question types, such as definitions, examples, comparisons, and applications.
6. Avoid overly complex or ambiguous phrasing in both questions and answers.
7. When appropriate, use mnemonics or memory aids to help reinforce the information.
8. Tailor the difficulty level of the flashcards to the user's specific preferences.
9. If given a body of text, extract the most important and relevant information for the flashcards.
10. Aim to create a balanced set of flashcards that covers the topic comprehensively.
11. Only generate 10 flashcards.


Remember, the goal is to facilitate effective learning and retention of information through these flashcards.


Return in the following JSOn format
{
    "flashcards": {
        "front": str,
        "back": str
    }
}


`


const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY,
})


export async function POST(req) {
  // Check if the request is multipart form data
  const contentType = req.headers.get("content-type");
  if (!contentType || !contentType.includes("multipart/form-data")) {
    return NextResponse.json({ error: 'Content type must be multipart/form-data' }, { status: 400 });
  }


  const formData = await req.formData();
  const uploadedFiles = formData.getAll('filepond');
  let fileName = '';
  let parsedText = '';


  if (uploadedFiles && uploadedFiles.length > 0) {
    const uploadedFile = uploadedFiles[1];
    console.log('Uploaded file:', uploadedFile);


    // Check if uploadedFile is of type File
    if (uploadedFile instanceof File) {
      // Generate a unique filename
      fileName = uuidv4();


      // Convert the uploaded file into a temporary file
      //const tempFilePath = `/tmp/${fileName}.pdf`;
      const tempFilePath = path.join(os.tmpdir(), `${fileName}.pdf`);


      // Ensure the temp directory exists
      const tempDir = path.dirname(tempFilePath);
      await fs.mkdir(tempDir, { recursive: true });


      // Convert ArrayBuffer to Buffer
      const fileBuffer = Buffer.from(await uploadedFile.arrayBuffer());


      // Save the buffer as a file
      await fs.writeFile(tempFilePath, fileBuffer);


      // Parse the pdf using pdf2json. See pdf2json docs for more info.


      // The reason I am bypassing type checks is because
      // the default type definitions for pdf2json in the npm install
      // do not allow for any constructor arguments.
      // You can either modify the type definitions or bypass the type checks.
      // I chose to bypass the type checks.
      const pdfParser = new PDFParser (null, 1);
      // See pdf2json docs for more info on how the below works.
      try {
        const pdfData = await new Promise((resolve, reject) => {
          pdfParser.on('pdfParser_dataError', errData => reject(errData.parserError));
          pdfParser.on('pdfParser_dataReady', pdfData => resolve(pdfData));
          pdfParser.loadPDF(tempFilePath);
        });
       
        parsedText = pdfParser.getRawTextContent();


      } catch (error) {
        console.error('Error parsing PDF:', error);
        return NextResponse.json({ error: 'Error parsing PDF' }, { status: 500 });
      }


      await fs.unlink(tempFilePath);


      // ** Generate flashcards using OpenAI. If you used a different LLM, make sure this portion matches the code you used to make the API call in api/generate/route.js.  **
      try {
        
        const completion = await openai.chat.completions.create({
            messages: [
                {role: 'system', content: systemPrompt},
                {role: 'user', content: parsedText}
            ],
            model: "openai/gpt-3.5-turbo",
            response_format: {type: 'json_object'},
        });
   
        const flashcards = JSON.parse(completion.choices[0].message.content);
  // ** End of flashcard generation section. **
        // Return the flashcards.
        return new Response(JSON.stringify(flashcards.flashcards), {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            },
          });
        } catch (error) {
          console.error('Error generating flashcards:', error);
          return new Response(JSON.stringify({ error: 'Error generating flashcards' }), {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
            },
          });
        }
      }
    }
  }
  




