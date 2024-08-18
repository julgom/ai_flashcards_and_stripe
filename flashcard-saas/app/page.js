/*"use client"
import Image from "next/image";
import getStripe from '@/utils/get-stripe'
import Head from 'next/head'
import {Container, AppBar, Toolbar, Button, Typography, Box, Grid} from '@mui/material'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Home() {

  const handleSubmit = async () => {
    const checkoutSession = await fetch('/api/checkout_session', {
      method: 'POST',
      headers: {
        origin: 'https://localhost:3000',
      },
    })

    const checkoutSessionJson = await checkoutSession.json()

    if (checkoutSession.statusCode === 500) {
      console.error(checkoutSession.message)
      return
    }

    const stripe = await getStripe()
    const {error} = await stripe.redirectToCheckout({
      sessionId: checkoutSessionJson.id,
    })

    if (error) {
      console.warn(error.message)
    }
  }


  return (
    <Container maxWidth = "100vw">
      <Head>
        <title>Flashcard SaaS</title>
        <meta name = "description" content = "Create flashcard from your text" />
      </Head>

      <AppBar position = "static">
        <Toolbar>
          <Typography variant = "h6" style = {{flexGrow: 1}}>
            Flashcard Saas
          </Typography>
          <SignedOut>
            <Button color = "inherit" href = "/sign-in">Login</Button>
            <Button color = "inherit" href = "/sign-up">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box sx={{
        textAlign: "center",
        my: 4,
      }}> 
        <Typography variant = "h2" gutterBottom>Welcome to Flashcard Saas</Typography>
        <Typography variant = "h5" gutterBottom>
          {' '}
          The easiest way to make flashcards from your text
        </Typography>
        <Button variant = "contained" color = "primary" sx={{mt: 2}}>
          Get Started
        </Button>
      </Box>

      <Box sx = {{my: 6}}>
        <Typography variant = "h4" component = "h2" gutterBottom>
          Features
        </Typography>
        <Grid container spacing = {4}>
          <Grid item xs = {12} md = {4}>
            <Typography variant = "h6" gutterBottom>Easy Text Input</Typography>
            <Typography>
              {' '}
              Simply input your text and let our software do the rest. Creating flashcards has never been easier.
            </Typography>
          </Grid>
          <Grid item xs = {12} md = {4}>
            <Typography variant = "h6" gutterBottom>Smart Flashcards</Typography>
            <Typography>
              {' '}
              Our AI intelligently breaks down your text into concise flashcards, perfect for studying.
            </Typography>
          </Grid>
          <Grid item xs = {12} md = {4}>
            <Typography variant = "h6" gutterBottom>Accessible Anywhere</Typography>
            <Typography>
              {' '}
              Access your flashcards from any device, at any time. Study on the go with ease.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx = {{my: 6, textAlign: "center"}}>
        <Typography variant = "h4" gutterBottom>Pricing</Typography>
        <Grid container spacing = {4}>
          <Grid item xs = {12} md = {6}>
            <Box 
              sx = {{
                p: 3,
                border: "1 px solid",
                borderColor: "grey.300",
               borderRadius: 2,
              }}
            >
              <Typography variant = "h5" gutterBottom>Basic</Typography>
              <Typography variant = "h6" gutterBottom>$5 / month</Typography>
              <Typography>
                {' '}
                Access to basic flashcard features and limited storage.
              </Typography>
              <Button variant = "contained" color = "primary" sx = {{mt: 2}}>
                Choose basic
              </Button>
            </Box>
          </Grid>
          <Grid item xs = {12} md = {6}>
          <Box 
              sx = {{
                p: 3,
                border: "1 px solid",
                borderColor: "grey.300",
               borderRadius: 2,
              }}
            >
              <Typography variant = "h5" gutterBottom>Pro</Typography>
              <Typography variant = "h6" gutterBottom>$10 / month</Typography>
              <Typography>
                {' '}
                Unlimited flashcards and storage with priority support.
              </Typography>
              <Button variant = "contained" color = "primary" sx = {{mt: 2}} onClick = {handleSubmit}>
                Choose pro
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}*/

//
/*

"use client";
import Head from 'next/head';
import { Container, Box, Grid, Typography, Button } from '@mui/material';
import CustomAppBar from './AppBar';
import getStripe from '@/utils/get-stripe';
import { SignedIn, SignedOut } from '@clerk/nextjs';

export default function Home() {
  const handleSubmit = async () => {
    const checkoutSession = await fetch('/api/checkout_session', {
      method: 'POST',
      headers: {
        origin: 'https://localhost:3000',
      },
    });

    const checkoutSessionJson = await checkoutSession.json();

    if (checkoutSession.statusCode === 500) {
      console.error(checkoutSession.message);
      return;
    }

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      sessionId: checkoutSessionJson.id,
    });

    if (error) {
      console.warn(error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Flashcard SaaS</title>
        <meta name="description" content="Create flashcard from your text" />
      </Head>

      <CustomAppBar 
        backgroundColor="#d1c4e9" // Pastel Purple
        textColor="#333333"
        hoverColor="#141414"
      />


      <Container maxWidth="100vw" sx={{pt: '90px',}}>
        <Box sx={{ textAlign: "center", my: 4 }}>
          <Typography variant="h2" gutterBottom>
            Welcome to Flashcard SaaS
          </Typography>
          <Typography variant="h5" gutterBottom>
            The easiest way to make flashcards from your text
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Get Started
          </Button>
        </Box>

        <Box sx={{ my: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>Easy Text Input</Typography>
              <Typography>
                Simply input your text and let our software do the rest. Creating flashcards has never been easier.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>Smart Flashcards</Typography>
              <Typography>
                Our AI intelligently breaks down your text into concise flashcards, perfect for studying.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>Accessible Anywhere</Typography>
              <Typography>
                Access your flashcards from any device, at any time. Study on the go with ease.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ my: 6, textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>Pricing</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 3,
                  border: "1px solid",
                  borderColor: "grey.300",
                  borderRadius: 2,
                }}
              >
                <Typography variant="h5" gutterBottom>Basic</Typography>
                <Typography variant="h6" gutterBottom>$5 / month</Typography>
                <Typography>
                  Access to basic flashcard features and limited storage.
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Choose Basic
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 3,
                  border: "1px solid",
                  borderColor: "grey.300",
                  borderRadius: 2,
                }}
              >
                <Typography variant="h5" gutterBottom>Pro</Typography>
                <Typography variant="h6" gutterBottom>$10 / month</Typography>
                <Typography>
                  Unlimited flashcards and storage with priority support.
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleSubmit}>
                  Choose Pro
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
*/
"use client";
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { Container, Box, Grid, Typography, Button, Card, CardContent, IconButton, Menu, MenuItem } from '@mui/material';
import CustomAppBar from './AppBar';
//import { ThemeProvider } from './ThemeContext'; 
import getStripe from '@/utils/get-stripe';
import { useRouter } from 'next/navigation';
import { SignedIn, SignedOut, useUser } from '@clerk/nextjs';

import { useTheme } from './ThemeContext';

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();
  const { isDarkMode } = useTheme();

  

  const handleSubmit = async () => {
    const checkoutSession = await fetch('/api/checkout_session', {
      method: 'POST',
      headers: {
        origin: 'https://localhost:3000',
      },
    })

    const checkoutSessionJson = await checkoutSession.json()

    if (checkoutSession.statusCode === 500) {
      console.error(checkoutSession.message)
      return
    }

    const stripe = await getStripe()
    const {error} = await stripe.redirectToCheckout({
      sessionId: checkoutSessionJson.id,
    })

    if (error) {
      console.warn(error.message)
    }
  }
  
  const handleStarted = async () => {
    if (isSignedIn) {
      // Redirect to the generate page if the user is signed in
      router.push('/generate');
    } else {
      // Redirect to the sign-in/sign-up page if the user is not signed in
      router.push('/sign-in'); // or '/sign-up' based on your preference
    }
    //router.push('/generate');
  };

  return (
    <>
     
     
      <CustomAppBar 
        backgroundColor="#ffb6c1" // Pastel Pink
        textColor="white"
        hoverColor="#f5f5f5"
      />

      <Container
        maxWidth="100vw"
        sx={{
          
          backgroundColor: isDarkMode ? '#333333' : '#EAE5F2',
          //backgroundColor: '#EAE5F2', // Pastel background
          minHeight: '100vh',
        
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          overflow: 'hidden', // Prevent extra scrolling
          
        }}
      >
        
       
       <Box sx={{textAlign: 'center'}}> 
       <Typography  
          sx={{ 
            pt:"90px",
            color: isDarkMode ? '#EAE5F2' : '#333333', 
            mb: 7, 
            textAlign: 'center', 
            textShadow: '2px 2px 4px rgba(128, 128, 128, 0.7)',  
            fontSize: '4.25rem', 
            fontWeight: '300', 
            lineHeight: 1.167, 
            letterSpacing: '0'
            }}
          >
       {isSignedIn ? `Hi ${user.firstName}! Welcome to FlashAIde.` : 'FlashAIde'}
        </Typography>
          
          <Typography 
             variant="h5" 
             sx={{ 
              color: isDarkMode ? '#EAE5F2' : '#666666', mb: 4 }}>
          Transform your notes into flashcards in no time with FlashAIde! This advanced AI flashcard generator is your ultimate tool for turning study sessions into efficient, stress-free experiences. With FlashAIde, you will memorize information faster, grasp concepts more thoroughly, and approach your exams with confidence.
          </Typography>
          <Button
          onClick={handleStarted}
             variant="contained" 
             color="primary" 
             sx={{
               mt: 2,
               backgroundColor: '#ffb6c1', // Pastel pink background
               color: isDarkMode ? '#333333' : 'white', // White text color
               textTransform: 'capitalize', // Capitalize only the first letter of 'Get Started'
               '&:hover': {
                 backgroundColor: '#e99ca9', // Slightly darker pastel pink on hover
               },
               borderRadius: '8px',
               padding: '16px 32px', // Increase padding for a bigger button
               fontSize: '1.25rem', // Larger text size
               fontWeight: 'bold', // Bold text for emphasis
               textShadow: isDarkMode ? '1px 1px 2px rgba(255, 255, 255, 0.5)' : '0.5px 0.5px 1px rgba(0, 0, 0, 0.3)',
             }} 
          >

            Get Started
          </Button>

       </Box>

        
        <Box sx={{ my: 6 }}>
  <Grid container spacing={4} justifyContent="center">
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          border: "2px solid",
          borderColor: '#ffb6c1', // Same color as the "Get Started" button
          borderRadius: 2,
          padding: 3,
          flexDirection: 'column',
          justifyContent: 'space-between',
          textAlign: 'center',
          boxShadow: isDarkMode ? '0 16px 32px rgba(0, 0, 0, 0.4)':'0 12px 24px rgba(0, 0, 0, 0.3)',
          //height: '230px',
          height: '100%',

          
        }}
      >
        <Box>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: isDarkMode ? '#EAE5F2' : '#333', fontSize: '1.5rem' }}>
        Effortless Flashcard Creation
        </Typography>
       
        <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="body1" gutterBottom sx={{ color: isDarkMode ? '#EAE5F2' : '#444', mb: 2, fontSize: '1.2rem' }}>
        Quickly transform any text or PDF into study-ready flashcards. Upload your study materials, and our AI instantly generates cards for you.
        </Typography>
        
      </Box>
      </Box>
      </Box>
    </Grid>
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          border: "2px solid",
          borderColor: '#ffb6c1', // Same color as the "Get Started" button
          borderRadius: 2,
          padding: 3,
          flexDirection: 'column',
          justifyContent: 'space-between',
          textAlign: 'center',
          boxShadow: isDarkMode ? '0 16px 32px rgba(0, 0, 0, 0.4)':'0 12px 24px rgba(0, 0, 0, 0.3)',
          //height: '230px',
          height: '100%',

          
        }}
      >
        <Box>
        
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: isDarkMode ? '#EAE5F2' : '#333', fontSize: '1.5rem' }}>
        Smart Flashcards
        </Typography>
       
        <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="body1" gutterBottom sx={{ color: isDarkMode ? '#EAE5F2' : '#444', mb: 2, fontSize: '1.2rem' }}>
        Transform your study materials into effective learning tools with our AI-powered system, which automatically condenses your content into precise, easy-to-digest flashcards for optimal studying.
        </Typography>
         
        </Box>
      </Box>
       
      </Box>
    </Grid>
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          border: "2px solid",
          borderColor: '#ffb6c1', // Same color as the "Get Started" button
          borderRadius: 2,
          padding: 3,
          flexDirection: 'column',
          justifyContent: 'space-between',
          textAlign: 'center',
          boxShadow: isDarkMode ? '0 16px 32px rgba(0, 0, 0, 0.4)':'0 12px 24px rgba(0, 0, 0, 0.3)',
          //height: '230px',
          height: '100%',

          
        }}
      >
        <Box>
        
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color:  isDarkMode ? '#EAE5F2' : '#333', fontSize: '1.5rem' }}>
        Study in Any Language
        </Typography>
       
        <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="body1" gutterBottom sx={{ color: isDarkMode ? '#EAE5F2' : '#444', mb: 2, fontSize: '1.2rem' }}>
        Enhance your learning experience by creating flashcards in any language. Our AI automatically detects and adapts to the content you provide, making study material more accessible.
        </Typography>
         
        </Box>
      </Box>
       
      </Box>
    </Grid>
  </Grid>
</Box>
      
      <Box sx={{ textAlign: 'center' }}>
      <Typography  sx={{ color: isDarkMode ? '#EAE5F2' : '#333333', textAlign: 'center', textShadow: '2px 2px 4px rgba(128, 128, 128, 0.7)', fontSize: '3.45rem', fontWeight: '300', lineHeight: 1.2, letterSpacing: '0'}}>
           Subscription
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 7 }}> 
       
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              p: 3,
              border: "1px solid",
              borderColor: isDarkMode ? '#444444': "grey.300",
              borderRadius: 2,
              backgroundColor: isDarkMode ? '#333333' : '#EAE5F2', // Same as page background
              boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)', // More prominent shadow
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              //height: '500px', // Fixed height for uniformity
              //width: '400px',
              height: '100%',
            }}
          >
            <Box>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: isDarkMode ? '#EAE5F2' : '#222', fontSize: '1.75rem', }}>
          Basic
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: isDarkMode ? '#EAE5F2' : '#333', fontSize: '1.5rem' }}>
          $5 / month
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ color:  isDarkMode ? '#EAE5F2' : '#444', mb: 2, fontSize: '1.2rem' }}>
          Access to basic flashcard features and limited storage.
        </Typography>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography variant="body1" sx={{ color: isDarkMode ? '#EAE5F2' : '#222', mb: 2, fontSize: '1rem', fontWeight: 'bold' }}>
            <strong>Features:</strong>
          </Typography>
          <Typography variant="body1" sx={{ color: isDarkMode ? '#EAE5F2' : '#444', mb: 1.5, fontSize: '1rem' }}>
            - Unlimited non-AI Flashcards
          </Typography>
          <Typography variant="body1" sx={{ color: isDarkMode ? '#EAE5F2' : '#444', mb: 1.5, fontSize: '1rem' }}>
            - 5 pages per document
          </Typography>
          <Typography variant="body1" sx={{ color: isDarkMode ? '#EAE5F2' : '#444', mb: 1.5, fontSize: '1rem' }}>
            - 20 exam mode answers
          </Typography>
          <Typography variant="body1" sx={{ color: isDarkMode ? '#EAE5F2' : '#444', mb: 1.5, fontSize: '1rem' }}>
            - 20,000 characters per text upload
          </Typography>
          <Typography variant="body1" sx={{ color: isDarkMode ? '#EAE5F2' : '#444', mb: 1.5, fontSize: '1rem' }}>
            - No exporting
          </Typography>
          <Typography variant="body1" sx={{ color: isDarkMode ? '#EAE5F2' : '#444', fontSize: '1rem' }}>
            - Limited new features
          </Typography>
        </Box>
      </Box>
            <Button
                        //onClick={handleSubmit}
                        variant="contained"
                        color="primary"
                        sx={{
                            mt: -1,
                            //mb: 1,
                            backgroundColor: '#ffb6c1', // Pastel pink background
                            color: isDarkMode ? '#333333' : 'white', // Black text color
                            textTransform: 'capitalize', // Capitalize only the first letter of 'Save'
                            '&:hover': {
                                backgroundColor: '#e99ca9', // Slightly darker pastel pink on hover
                            },
                            borderRadius: '8px', // Rounded corners for the button
                            textShadow: isDarkMode ? '1px 1px 2px rgba(255, 255, 255, 0.5)' : '0.5px 0.5px 1px rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        Choose Basic
                    </Button>
            </Box>
        </Grid>

        
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              p: 3,
              border: "1px solid",
              borderColor: isDarkMode ? '#444444': "grey.300",
              borderRadius: 2,
              backgroundColor: isDarkMode ? '#333333' : '#EAE5F2', // Same as page background
              boxShadow: isDarkMode ? '0 16px 32px rgba(0, 0, 0, 0.4)':'0 12px 24px rgba(0, 0, 0, 0.3)',
              //boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)', // More prominent shadow
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              //height: '500px', // Fixed height for uniformity
              //width: '400px',
              height: '100%',
            }}
          >
            <Box>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: isDarkMode ? '#EAE5F2' : '#222', fontSize: '1.75rem', }}>
          Pro
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: isDarkMode ? '#EAE5F2' : '#333', fontSize: '1.5rem' }}>
          $10 / month
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ color: isDarkMode ? '#EAE5F2' : '#444', mb: 2, fontSize: '1.2rem' }}>
          Unlimited flashcards and storage with priority support.
        </Typography>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography variant="body1" sx={{ color: isDarkMode ? '#EAE5F2' : '#222', mb: 2, fontSize: '1rem', fontWeight: 'bold' }}>
            <strong>Features:</strong>
          </Typography>
          <Typography variant="body1" sx={{ color: isDarkMode ? '#EAE5F2' : '#444', mb: 1.5, fontSize: '1rem' }}>
            - Unlimited AI Flashcards
          </Typography>
          <Typography variant="body1" sx={{ color: isDarkMode ? '#EAE5F2' : '#444', mb: 1.5, fontSize: '1rem' }}>
            - 100 pages per document
          </Typography>
          <Typography variant="body1" sx={{ color: isDarkMode ? '#EAE5F2' : '#444', mb: 1.5, fontSize: '1rem' }}>
            - Unlimited exam mode answers
          </Typography>
          <Typography variant="body1" sx={{ color: isDarkMode ? '#EAE5F2' : '#444', mb: 1.5, fontSize: '1rem' }}>
            - 60,000 characters per text upload
          </Typography>
          <Typography variant="body1" sx={{ color: isDarkMode ? '#EAE5F2' : '#444', mb: 1.5, fontSize: '1rem' }}>
            - Export to Anki, PDF, and more
          </Typography>
          <Typography variant="body1" sx={{ color: isDarkMode ? '#EAE5F2' : '#444', fontSize: '1rem' }}>
            - New features soon
          </Typography>
        </Box>
      </Box>
            <Button
                        onClick={handleSubmit}
                        variant="contained"
                        color="primary"
                        sx={{
                            mt: -1,
                            //mb: 1,
                            backgroundColor: '#ffb6c1', // Pastel pink background
                            color: isDarkMode ? '#333333' : 'white', // Black text color
                            textTransform: 'capitalize', // Capitalize only the first letter of 'Save'
                            '&:hover': {
                                backgroundColor: '#e99ca9', // Slightly darker pastel pink on hover
                            },
                            borderRadius: '8px', // Rounded corners for the button
                            textShadow: isDarkMode ? '1px 1px 2px rgba(255, 255, 255, 0.5)' : '0.5px 0.5px 1px rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        Choose Pro
                    </Button>
          </Box>
        </Grid>
      </Grid>
      </Box>
    </Container>
   
    </>
    
  );
}
