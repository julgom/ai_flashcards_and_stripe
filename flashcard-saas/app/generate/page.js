//BILL'S TUTORIAL

/*'use client'

import {useUser} from '@clerk/nextjs'
import {db} from '@/firebase'
import {useRouter} from 'next/navigation'
import { useState } from 'react';
import {Container, Box, Typography, Paper, TextField, Button, Grid, Card, CardActionArea, CardContent, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@mui/material'
import {doc, collection, setDoc, getDoc, writeBatch} from 'firebase/firestore'

export default function Generate() {
    const {isLoaded, isSignedIn, user} = useUser()
    const [flashcards, setFlashcards] = useState([])
    const [flipped, setFlipped] = useState([])
    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const [open, setOpen] = useState(false)
    const router = useRouter()

    const handleSubmit = async () => {
        fetch('api/generate', {
            method: 'POST',
            body: text,
        })
          .then((res) => res.json())
          .then((data) => setFlashcards(data))
    }

    const handleCardClick = (id) => {
        setFlipped((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
 
    const saveFlashcards = async () => {
        if (!name){
            alert('Please enter a name')
            return
        }

        const batch = writeBatch(db)
        const userDocRef = doc(collection(db, 'users'), user.id)
        const docSnap = await getDoc(userDocRef)

        if (docSnap.exists()) {
           const collections = docSnap.data().flashcards || []
           if (collections.find((f) => f.name === name)) {
            alert('Flashcard collection with the same name already exists.')
            return
           } else {
            collections.push({name})
            batch.set(userDocRef, {flashcards: collections}, {merge: true}) //merge because don't want to override previous data
           }
        } else {
            batch.set(userDocRef, {flashcards: [{name}]})
        }

        const colRef = collection(userDocRef, name)
        flashcards.forEach((flashcard) => {
            const cardDocRef = doc(colRef)
            batch.set(cardDocRef, flashcard) //batch because we don't want to write everything one by one, we are going to write them all at once
        })

        await batch.commit()
        handleClose()
        router.push('/flashcards')

    }

    return (
        <Container maxWidth = "md">
            <Box 
                sx = {{
                  mt: 4, 
                  mb: 6, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center'
                }}
            >
                <Typography variant = "h4">
                    Generate Flashcards
                </Typography>
                <Paper sx = {{p: 4, width: "100%"}}>
                    <TextField 
                      value = {text} 
                      onChange = {(e) => setText(e.target.value)} 
                      label = "Enter text" 
                      fullWidth 
                      multiline
                      rows = {4} 
                      variant = "outlined"
                      sx = {{
                        mb: 2,
                      }}
                    />
                    <Button 
                      variant = "contained"
                      color = "primary"
                      onClick = {handleSubmit}
                      fullWidth
                    >
                        {''}
                        Submit
                    </Button>  
                </Paper>
            </Box>
            {flashcards.length > 0 && (
                <Box sx = {{mt: 4}}>
                    <Typography variant = "h5">Flashcards Preview</Typography>
                    <Grid container spacing = {3}>
                        {flashcards.map((flashcard, index) => (
                            <Grid item xs = {12} sm = {6} md = {4} key = {index}>
                                <Card>
                                    <CardActionArea 
                                      onClick = {() => (
                                        handleCardClick(index)
                                      )}
                                    >
                                        <CardContent> 
                                            <Box 
                                                sx = {{
                                                    perspective: "1000px",
                                                    '& > div': {
                                                        transition: "transform 0.6s",
                                                        transformStyle: "preserve-3d",
                                                        position: "relative",
                                                        width: "100%",
                                                        height: "200px",
                                                        boxShadow: "0 4px 8px 0 rgba(0,0,0, 0.2)",
                                                        transform: flipped[index] ? "rotateY(180deg)" : "rotateY(0deg)",
                                                    },
                                                   '& > div > div': {
                                                        position: "absolute",
                                                        width: "100%",
                                                        height: "100%",
                                                        backfaceVisibility: "hidden",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        padding: 2,
                                                        boxSizing: "border-box",
                                                    },  
                                                    '& > div > div:nth-of-type(2)': {
                                                        transform: "rotateY(180deg)",
                                                    },
                                                }}
                                            >
                                                <div>
                                                    <div>
                                                        <Typography variant = "h5" component = "div">
                                                            {flashcard.front}
                                                        </Typography>
                                                    </div>
                                                    <div>
                                                        <Typography variant = "h5" component = "div">
                                                            {flashcard.back}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </Box>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>    
                        ))}
                    </Grid>
                    <Box sx = {{mt: 4, display: "flex", justifyContent: "center"}}>
                        <Button variant = "contained" color = "secondary" onClick = {handleOpen}>
                            Save
                        </Button>
                    </Box>
                </Box>
            )}
            <Dialog open = {open} onClose = {handleClose}>
                <DialogTitle>Save Flashcards</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter a name for your flashcards collection
                    </DialogContentText>
                    <TextField 
                      autoFocus
                      margin = "dense"
                      label = "Collection Name"
                      type = " text"
                      fullWidth
                      value = {name}
                      onChange = {(e) => setName(e.target.value)}
                      variant = "outlined"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick = {handleClose}>Cancel</Button>
                    <Button onClick = {saveFlashcards}>Save</Button>
                </DialogActions>
            </Dialog>
        </Container>
    )
    
}

*/

// DARK PURPLE - BAD STRUCTURE
/*'use client'

import { useUser } from '@clerk/nextjs'
import { db } from '@/firebase'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { 
    Container, Box, Typography, Paper, TextField, Button, Grid, Card, CardActionArea, CardContent, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, ToggleButtonGroup, ToggleButton 
} from '@mui/material'
import { doc, collection, setDoc, getDoc, writeBatch } from 'firebase/firestore'

export default function Generate() {
    const { isLoaded, isSignedIn, user } = useUser()
    const [flashcards, setFlashcards] = useState([])
    const [flipped, setFlipped] = useState([])
    const [text, setText] = useState('')
    const [file, setFile] = useState(null)
    const [name, setName] = useState('')
    const [open, setOpen] = useState(false)
    const [inputType, setInputType] = useState('text')
    const router = useRouter()

    const handleInputChange = (event, newInputType) => {
        if (newInputType) {
            setInputType(newInputType)
        }
    }

    const handleFileChange = (event) => {
        setFile(event.target.files[0])
    }

    const handleSubmit = async () => {
        if (inputType === 'text') {
            fetch('api/generate', {
                method: 'POST',
                body: text,
            })
              .then((res) => res.json())
              .then((data) => setFlashcards(data))
        } else if (inputType === 'document' && file) {
            const formData = new FormData()
            formData.append('file', file)

            fetch('api/generate-from-file', {
                method: 'POST',
                body: formData,
            })
              .then((res) => res.json())
              .then((data) => setFlashcards(data))
        }
    }

    const handleCardClick = (id) => {
        setFlipped((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
 
    const saveFlashcards = async () => {
        if (!name){
            alert('Please enter a name')
            return
        }

        const batch = writeBatch(db)
        const userDocRef = doc(collection(db, 'users'), user.id)
        const docSnap = await getDoc(userDocRef)

        if (docSnap.exists()) {
            const collections = docSnap.data().flashcards || []
            if (collections.find((f) => f.name === name)) {
                alert('Flashcard collection with the same name already exists.')
                return
            } else {
                collections.push({ name })
                batch.set(userDocRef, { flashcards: collections }, { merge: true }) 
            }
        } else {
            batch.set(userDocRef, { flashcards: [{ name }] })
        }

        const colRef = collection(userDocRef, name)
        flashcards.forEach((flashcard) => {
            const cardDocRef = doc(colRef)
            batch.set(cardDocRef, flashcard)
        })

        await batch.commit()
        handleClose()
        router.push('/flashcards')
    }

    return (
        <Container maxWidth="md">
            <Box 
                sx={{
                    mt: 4, 
                    mb: 6, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    backgroundColor: '#f7f4ef', // Light background
                    padding: 3,
                    borderRadius: 2,
                }}
            >
                <Typography variant="h4" color="#4a4a4a"> 
                    AI Flashcard Generator
                </Typography>
                <ToggleButtonGroup
                    value={inputType}
                    exclusive
                    onChange={handleInputChange}
                    sx={{ 
                        mt: 3, 
                        mb: 4, 
                        display: 'flex',
                        borderRadius: '50px',
                        backgroundColor: '#c7e6d7',
                        padding: '4px',
                        '& .MuiToggleButtonGroup-grouped': {
                            minWidth: '120px',
                            padding: '10px 20px',
                            border: 'none',
                            color: '#4a4a4a',
                            fontWeight: 'bold',
                            '&.Mui-selected': {
                                backgroundColor: '#a27cbf', // Oval color
                                color: '#fff',
                                borderRadius: '50px',
                                transition: 'transform 0.3s ease-in-out',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
                            },
                        },
                    }}
                >
                    <ToggleButton value="text">
                        Enter Text
                    </ToggleButton>
                    <ToggleButton value="document">
                        Upload Document
                    </ToggleButton>
                </ToggleButtonGroup>
                <Paper sx={{ p: 4, width: "100%", backgroundColor: '#ffffff', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}>
                    {inputType === 'text' ? (
                        <TextField 
                          value={text} 
                          onChange={(e) => setText(e.target.value)} 
                          label="Enter text" 
                          fullWidth 
                          multiline
                          rows={4} 
                          variant="outlined"
                          sx={{
                            mb: 2,
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#7a5195', 
                                },
                                '&:hover fieldset': {
                                    borderColor: '#4a4a4a', 
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#4a4a4a', 
                                },
                            },
                          }}
                        />
                    ) : (
                        <Button
                          variant="outlined"
                          component="label"
                          fullWidth
                          sx={{
                            mb: 2,
                            borderColor: '#7a5195',
                            color: '#4a4a4a',
                            '&:hover': {
                                borderColor: '#4a4a4a',
                            },
                          }}
                        >
                            Upload Document
                            <input type="file" hidden onChange={handleFileChange} />
                        </Button>
                    )}
                    <Button 
                      variant="contained"
                      color="primary"
                      onClick={handleSubmit}
                      fullWidth
                      sx={{
                        backgroundColor: '#7a5195',
                        '&:hover': {
                            backgroundColor: '#4a4a4a',
                        },
                      }}
                    >
                        Submit
                    </Button>  
                </Paper>
            </Box>
        </Container>
    )
}


*/

// PRIMARY COLOR - GOOD STRUCTURE
/*
'use client'

import { useUser } from '@clerk/nextjs';
import { db } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
    Container, Box, Typography, Paper, TextField, Button, Grid, Card, CardActionArea, 
    CardContent, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, 
    Input, IconButton
} from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { doc, collection, setDoc, getDoc, writeBatch } from 'firebase/firestore';

export default function Generate() {
    const { isLoaded, isSignedIn, user } = useUser();
    const [flashcards, setFlashcards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [text, setText] = useState('');
    const [name, setName] = useState('');
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState('text');
    const [file, setFile] = useState(null);
    const router = useRouter();

    const handleSubmit = async () => {
        if (mode === 'text') {
            fetch('api/generate', {
                method: 'POST',
                body: text,
            })
                .then((res) => res.json())
                .then((data) => setFlashcards(data));
        } else if (mode === 'document' && file) {
            const formData = new FormData();
            formData.append('file', file);

            fetch('api/generate', {
                method: 'POST',
                body: formData,
            })
                .then((res) => res.json())
                .then((data) => setFlashcards(data));
        }
    };

    const handleCardClick = (id) => {
        setFlipped((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const saveFlashcards = async () => {
        if (!name) {
            alert('Please enter a name');
            return;
        }

        const batch = writeBatch(db);
        const userDocRef = doc(collection(db, 'users'), user.id);
        const docSnap = await getDoc(userDocRef);

        if (docSnap.exists()) {
            const collections = docSnap.data().flashcards || [];
            if (collections.find((f) => f.name === name)) {
                alert('Flashcard collection with the same name already exists.');
                return;
            } else {
                collections.push({ name });
                batch.set(userDocRef, { flashcards: collections }, { merge: true });
            }
        } else {
            batch.set(userDocRef, { flashcards: [{ name }] });
        }

        const colRef = collection(userDocRef, name);
        flashcards.forEach((flashcard) => {
            const cardDocRef = doc(colRef);
            batch.set(cardDocRef, flashcard);
        });

        await batch.commit();
        handleClose();
        router.push('/flashcards');
    };

    const handleModeChange = (newMode) => {
        setMode(newMode);
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    mt: 4,
                    mb: 6,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h4" sx={{ color: '#3c3c3c' }}>
                    Generate Flashcards
                </Typography>

                
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        mt: 3,
                        mb: 4,
                        backgroundColor: '#e0e0e0',
                        borderRadius: '20px',
                        position: 'relative',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                        p: '4px',
                    }}
                >
                    <Box
                        sx={{
                            width: '50%',
                            height: '100%',
                            borderRadius: '20px',
                            backgroundColor: '#4a90e2',
                            position: 'absolute',
                            left: mode === 'text' ? 0 : '50%',
                            transition: 'left 0.3s ease',
                            zIndex: 1,
                        }}
                    />
                    <Button
                        onClick={() => handleModeChange('text')}
                        sx={{
                            width: '50%',
                            zIndex: 2,
                            color: mode === 'text' ? '#fff' : '#000',
                            textTransform: 'none',
                            fontSize: '16px',
                        }}
                    >
                        Text
                    </Button>
                    <Button
                        onClick={() => handleModeChange('document')}
                        sx={{
                            width: '50%',
                            zIndex: 2,
                            color: mode === 'document' ? '#fff' : '#000',
                            textTransform: 'none',
                            fontSize: '16px',
                        }}
                    >
                        Document
                    </Button>
                </Box>

              
                <Paper
                    sx={{
                        p: 4,
                        width: '100%',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.37)',
                    }}
                >
                    {mode === 'text' ? (
                        <TextField
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            label="Enter text"
                            fullWidth
                            multiline
                            rows={4}
                            variant="outlined"
                            sx={{
                                mb: 2,
                            }}
                        />
                    ) : (
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '2px dashed #4a90e2',
                                borderRadius: '10px',
                                p: 2,
                                height: '150px',
                            }}
                        >
                            <Input
                                type="file"
                                inputProps={{ accept: 'application/pdf' }}
                                onChange={handleFileChange}
                                sx={{ display: 'none' }}
                                id="file-upload"
                            />
                            <label htmlFor="file-upload">
                                <IconButton component="span" color="primary">
                                    <InsertDriveFileIcon fontSize="large" />
                                </IconButton>
                            </label>
                            {file && (
                                <Typography variant="body2" sx={{ ml: 2 }}>
                                    {file.name}
                                </Typography>
                            )}
                        </Box>
                    )}
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Submit
                    </Button>
                </Paper>
            </Box>

            {flashcards.length > 0 && (
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h5" sx={{ color: '#3c3c3c' }}>
                        Flashcards Preview
                    </Typography>
                    <Grid container spacing={3}>
                        {flashcards.map((flashcard, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card>
                                    <CardActionArea onClick={() => handleCardClick(index)}>
                                        <CardContent>
                                            <Box
                                                sx={{
                                                    perspective: '1000px',
                                                    '& > div': {
                                                        transition: 'transform 0.6s',
                                                        transformStyle: 'preserve-3d',
                                                        position: 'relative',
                                                        width: '100%',
                                                        height: '200px',
                                                        boxShadow: '0 4px 8px 0 rgba(0,0,0, 0.2)',
                                                        transform: flipped[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                                                    },
                                                    '& > div > div': {
                                                        position: "absolute",
                                                        width: "100%",
                                                        height: "100%",
                                                        backfaceVisibility: "hidden",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        padding: 2,
                                                        boxSizing: "border-box",
                                                    },  
                                                    '& > div > div:nth-of-type(2)': {
                                                        transform: "rotateY(180deg)",
                                                    },
                                                }}
                                            >
                                                <div>
                                                    <div>
                                                        <Typography variant = "h5" component = "div">
                                                            {flashcard.front}
                                                        </Typography>
                                                    </div>
                                                    <div>
                                                        <Typography variant = "h5" component = "div">
                                                            {flashcard.back}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </Box>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>    
                        ))}
                    </Grid>
                    <Box sx = {{mt: 4, display: "flex", justifyContent: "center"}}>
                        <Button variant = "contained" color = "secondary" onClick = {handleOpen}>
                            Save
                        </Button>
                    </Box>
                </Box>
            )}
            <Dialog open = {open} onClose = {handleClose}>
                <DialogTitle>Save Flashcards</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter a name for your flashcards collection
                    </DialogContentText>
                    <TextField 
                      autoFocus
                      margin = "dense"
                      label = "Collection Name"
                      type = " text"
                      fullWidth
                      value = {name}
                      onChange = {(e) => setName(e.target.value)}
                      variant = "outlined"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick = {handleClose}>Cancel</Button>
                    <Button onClick = {saveFlashcards}>Save</Button>
                </DialogActions>
            </Dialog>
        </Container>
    )
    
}


*/

// FINAL
'use client'
import { useUser } from '@clerk/nextjs';
import { db } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
    Container, Box, Typography, Paper, TextField, Button, Grid, Card, CardActionArea, 
    CardContent, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, 
    Input, IconButton, CircularProgress
} from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { doc, collection, setDoc, getDoc, writeBatch } from 'firebase/firestore';
import AppBarComponent from '../AppBar';
import CustomAppBar from '../AppBar';
import { useTheme } from '../ThemeContext'; // Import the useTheme hook
//import { ThemeProvider } from '../ThemeContext';


export default function Generate() {
    const { isLoaded, isSignedIn, user } = useUser();
    const [flashcards, setFlashcards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [text, setText] = useState('');
    const [name, setName] = useState('');
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState('text');
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false); // State for loading
    const router = useRouter();
    const { isDarkMode } = useTheme();
   

    const handleSubmit = async () => {
        setLoading(true); // Set loading to true when submit is clicked
        setFlashcards([]);

        if (mode === 'text') {
            fetch('api/generate', {
                method: 'POST',
                body: text,
            })
                .then((res) => res.json())
                .then((data) => { 
                    setFlashcards(data); 
                    setText(''); 
                    setLoading(false); // Set loading to false after data is fetched
                });
        }else if (mode === 'document' && file) {
            
            const text = await pdfToText(file);
            //console.log(file)
            fetch('api/generate', {
                method: 'POST',
                body: text,
            })
                .then((res) => res.json())
                .then((data) => { 
                    setFlashcards(data); 
                    setFile(null); 
                    setLoading(false); // Set loading to false after data is fetched
                });   
            
        }
    
    }

    const handleCardClick = (id) => {
        setFlipped((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const saveFlashcards = async () => {
        if (!name) {
            alert('Please enter a name');
            return;
        }

        const batch = writeBatch(db);
        const userDocRef = doc(collection(db, 'users'), user.id);
        const docSnap = await getDoc(userDocRef);

        if (docSnap.exists()) {
            const collections = docSnap.data().flashcards || [];
            if (collections.find((f) => f.name.toLowerCase() === name.toLowerCase())) {
                alert('Flashcard collection with the same name already exists.');
                return;
            } else {
                collections.push({ name });
                batch.set(userDocRef, { flashcards: collections }, { merge: true });
            }
        } else {
            batch.set(userDocRef, { flashcards: [{ name }] });
        }

        const colRef = collection(userDocRef, name);
        flashcards.forEach((flashcard) => {
            const cardDocRef = doc(colRef);
            batch.set(cardDocRef, flashcard);
        });

        await batch.commit();
        handleClose();
        router.push('/flashcards');
    };

    const handleModeChange = (newMode) => {
        setMode(newMode);
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    return (
        <>
       
      <CustomAppBar 
        backgroundColor="#d1c4e9" // Pastel Purple
        textColor="#333333"
        hoverColor="#141414"
      />

        <Container 
        maxWidth="100vw" 
        sx={{ 
            
            backgroundColor: isDarkMode ? '#333333' : '#fce4ec',
            minHeight: '100vh', 
            p: 3, 
        }}>
            <Typography variant="h4" sx={{ pt: '90px', color: isDarkMode ? '#fce4ec' : '#333333', textAlign:"center", textShadow: '2px 2px 4px rgba(128, 128, 128, 0.5)' }}>
                    Generate Flashcards
            </Typography>
            <Box
                sx={{
                    mt: 4,
                    mb: 6,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        mt: 3,
                        mb: 4,
                        maxWidth: 'md',
                        backgroundColor: '#d1c4e9', // Pastel Purple
                        borderRadius: '20px',
                        position: 'relative',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
                        p: '4px',
                    }}
                >
                    <Box
                        sx={{
                            width: '48%', // Adjust the width as needed
                            height: '80%', // Adjust the height as needed
                            borderRadius: '20px',
                            backgroundColor: '#ffb6c1', // Pastel Pink for the pop effect
                            position: 'absolute',
                            left: mode === 'text' ? '2%' : '46%', // Adjusted left position for different modes
                            transform: mode === 'text' ? 'translateX(-2%)' : 'translateX(10.5%)', // Center horizontally
                            transition: 'left 0.3s ease, transform 0.3s ease', // Include transform transition
                            zIndex: 1,
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow for better visibility
                        }}
                    />
                    <Button
                        onClick={() => handleModeChange('text')}
                        sx={{
                            width: '50%',
                            zIndex: 2,
                            color: isDarkMode ?  (mode === 'text' ? '#333' : '#fff') : (mode === 'text' ? '#fff' : '#333'),
                            textTransform: 'none',
                            fontSize: '16px',
                            height: '50px',
                        }}
                    >
                        Text
                    </Button>
                    <Button
                        onClick={() => handleModeChange('document')}
                        sx={{
                            width: '50%',
                            zIndex: 2,
                            color: isDarkMode ?  (mode === 'document' ? '#333' : '#fff') : (mode === 'document' ? '#fff' : '#333'),
                            textTransform: 'none',
                            fontSize: '16px',
                            height: '50px',
                        }}
                    >
                        Document
                    </Button>
                </Box>
                <Paper
                    sx={{
                        p: 4,
                        width: '100%',
                        maxWidth: '1100px',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 182, 193, 0.5)',
                        boxShadow: '0 4px 8px rgba(255, 182, 193, 0.5)',
                        borderRadius: '12px',
                        backgroundColor: isDarkMode ? '#1F1F1F' : '#fff',
                    }}
                >
                    {mode === 'text' ? (
                        <TextField
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            label="Enter text"
                            fullWidth
                            multiline
                            rows={8}
                            variant="outlined"
                            sx={{
                                mb: 2,
                                '& .MuiInputBase-root': {
                                    color: '#000', // Black text color
                                    backgroundColor: isDarkMode ? '#1F1F1F' : '#fff', // White background
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#ffb6c1', // Pastel Pink border color
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#ffb6c1 !important', // Pastel Pink border color on hover
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#ffb6c1', // Pastel Pink label color by default
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#ffb6c1', // Pastel Pink label color when focused
                                },
                                
                                '& .MuiInputBase-input': {
                                    color: isDarkMode ? '#ffb6c1' : '#000', // Black text color
                                },
                                '& .MuiOutlinedInput-root': {
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#ffb6c1', // Pastel Pink border color when focused
                                    },
                                },

                            }}
                        />
                    ) : (
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '2px dashed #ffb6c1', // Pastel Pink border
                                borderRadius: '10px',
                                p: 2,
                                height: '217px', // Increased height
                                mb: 2,
        
                            }}
                        >
                            <Input
                                type="file"
                                
                                accept = '.pdf' 
                                //inputProps={{ accept: 'application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/rtf' }}
                                onChange={handleFileChange}
                                sx={{ display: 'none' }}
                                id="file-upload"
                            />
                            <label htmlFor="file-upload">
                                <IconButton component="span" color="primary">
                                    <InsertDriveFileIcon fontSize="large" sx={{ color: '#ffb6c1' }} />
                                </IconButton>
                            </label>
                            {file && (
                                <Typography variant="body2" sx={{ ml: 2, color: '#333' }}>
                                    {file.name}
                                </Typography>
                            )}
                        </Box>
                    )}
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        fullWidth
                        sx={{
                            mt: 2,
                            backgroundColor: '#d1c4e9',
                            color: isDarkMode ?  '#fff' : '#333',
                            textTransform: 'capitalize', // Capitalize only the first letter of 'Submit'
                            '&:hover': {
                                backgroundColor: '#b9a7d9',
                            },
                            textShadow: isDarkMode ? '0.5px 0.5px 1px rgba(0, 0, 0, 0.3)' : '1px 1px 2px rgba(255, 255, 255, 0.5)',
                        }}
                    >
                        {loading ? (
                            <CircularProgress size={24} sx={{ color: isDarkMode ?  '#fff' : '#333', }} />
                        ) : (
                            'Submit'
                        )}
                    </Button>
                </Paper>
            </Box>

            {flashcards.length > 0 && (
                <Box 
                    sx={{ 
                        mt: 4,
                        mb: 6,
                        display: 'flex',
                        flexDirection: 'column',
                        //justifyContent: 'center',
                        alignItems: 'center', 
                    }}
                >
                    <Typography variant="h4" sx={{ color: isDarkMode ? '#fce4ec' : '#333333' , mb: 3  }}>
                        Flashcards Preview
                    </Typography>
                    <Grid container spacing={3}>
                        
                        {flashcards.map((flashcard, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card
                                        sx={{
                                            borderRadius: '12px', // Smooth corners
                                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
                                            border: `2px solid ${isEven ? 'rgba(209, 196, 233, 0.5)' : 'rgba(255, 182, 193, 0.5)'}`, // Alternating pastel purple/pink blurred border
                                            backgroundColor: isDarkMode ? '#1F1F1F' : '#fff', // White background for the outer box
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => handleCardClick(index)} // Attach the click handler directly to the Card
                                    >
                                       
                                            <CardContent>
                                                <Box
                                                    sx={{
                                                        perspective: '1000px',
                                                        '& > div': {
                                                            transition: 'transform 0.6s',
                                                            transformStyle: 'preserve-3d',
                                                            position: 'relative',
                                                            width: '100%',
                                                            height: '200px',
                                                            transform: flipped[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                                                        },
                                                        '& > div > div': {
                                                            position: 'absolute',
                                                            width: '100%',
                                                            height: '100%',
                                                            backfaceVisibility: 'hidden',
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            padding: 2,
                                                            boxSizing: 'border-box',
                                                            borderRadius: '12px', // Smooth corners
                                                        },
                                                        '& > div > div:nth-of-type(1)': {
                                                            backgroundColor: isEven ? '#d1c4e9' : '#ffb6c1', // Pastel purple/pink for the front
                                                            border: `2px solid ${isEven ? 'rgba(209, 196, 233, 0.5)' : 'rgba(255, 182, 193, 0.5)'}`, // Alternating border colors
                                                            color: isDarkMode ? (isEven ? '#ffffff' : '#000000') : (isEven ? '#000000' : '#ffffff'), // Black text on purple, white text on pink
                                                        },
                                                        '& > div > div:nth-of-type(2)': {
                                                            backgroundColor: isEven ? '#ffb6c1' : '#d1c4e9', // Alternating pastel pink/purple for the back
                                                            border: `2px solid ${isEven ? 'rgba(255, 182, 193, 0.5)' : 'rgba(209, 196, 233, 0.5)'}`, // Alternating border colors
                                                            color: isDarkMode ? (isEven ? '#000000' : '#ffffff') : (isEven ? '#ffffff' : '#000000') , // White text on pink, black text on purple
                                                            transform: 'rotateY(180deg)',
                                                        },
                                                    }}
                                                > 
                                                     <div>
                                                        <div>
                                                            <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
                                                                {flashcard.front}
                                                            </Typography>
                                                        </div>
                                                        <div>
                                                            <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
                                                                {flashcard.back}
                                                            </Typography>
                                                        </div>
                                                    </div>
                                                </Box>
                                            </CardContent>
                                        
                                    </Card>
                                </Grid>   

                            )
                        })}
                    </Grid>
                   <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                       <Button
                            variant="contained"
                            color= "primary"
                            onClick={handleOpen}
                            sx={{
                                mt: 2,
                                backgroundColor: '#d1c4e9', // Pastel purple background
                                color: isDarkMode ?  '#fff' : '#333',
                                textTransform: 'capitalize', // Capitalize only the first letter of 'Save'
                                '&:hover': {
                                    backgroundColor: '#b9a7d9', // Slightly darker pastel purple on hover
                                },
                                borderRadius: '8px', // Rounded corners for the button
                                textShadow: isDarkMode ? '0.5px 0.5px 1px rgba(0, 0, 0, 0.3)' : '1px 1px 2px rgba(255, 255, 255, 0.5)',
                            }}
                        >
                            Save
                        </Button>
                    </Box>
                </Box>
            )}

                   
            <Dialog
                open={open}
                onClose={handleClose}
                sx={{
                    '& .MuiDialog-paper': {
                    backgroundColor: '#EAE5F2',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(209, 196, 233, 0.5)',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
                    borderRadius: '12px',
                    //mb: 2,
                    },
                }}
            >
                <DialogTitle
                    sx={{
                        textAlign: 'center', // Center the title
                        fontSize: '1.2em', // Adjust font size for better visibility
                        color: '#333333', 
                    }}
        
                >
                    Save Flashcards
                </DialogTitle>
                <DialogContent>
                    <DialogContentText
                        sx={{
                            color: '#333333', 
                            //marginBottom: '1rem',
                            textAlign: 'center', // Center the text
                        }}
                    >
                        Please enter a name for your flashcards collection
                    </DialogContentText>
                    <TextField
                         autoFocus
                         margin="dense"
                         label="Collection Name"
                         type="text"
                         fullWidth
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                         variant="outlined"
                         sx={{
                            '& .MuiInputBase-root': {
                                color: '#000', // Black text color for the input
                                backgroundColor:  '#fff', // White background
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#ffb6c1', // Pastel pink border color
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#ffb6c1', // Pastel pink border color on hover
                            },
                            '& .MuiInputLabel-root': {
                                color: '#ffb6c1', // Pastel pink label color by default
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: '#ffb6c1', // Pastel pink label color when focused
                            },
                            '& .MuiInputBase-input': {
                                color: '#000', // Black text color for the input
                            },
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#ffb6c1', // Pastel pink border color when focused
                                },
                            },
                        }}
                    />
                </DialogContent>
                <DialogActions
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '16px',
                    }}    
        
                >
                    <Button
                        onClick={saveFlashcards}
                        variant="contained"
                        color="primary"
                        sx={{
                            mt: -1,
                            mb: 1,
                            backgroundColor: '#ffb6c1', // Pastel pink background
                            color: '#fff', // Black text color
                            textTransform: 'capitalize', // Capitalize only the first letter of 'Save'
                            '&:hover': {
                                backgroundColor: '#e99ca9', // Slightly darker pastel pink on hover
                            },
                            borderRadius: '8px', // Rounded corners for the button
                            textShadow:  '0.5px 0.5px 1px rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        Save
                    </Button>
                    <Button
                        onClick={handleClose}
                        variant="contained"
                        color="primary"
                        sx={{
                            mt: -1,
                            mb: 1,
                            backgroundColor: '#ffb6c1', // Pastel pink background
                            color: '#fff', // Black text color
                            textTransform: 'capitalize', // Capitalize only the first letter of 'Save'
                            '&:hover': {
                                backgroundColor: '#e99ca9', // Slightly darker pastel pink on hover
                            },
                            borderRadius: '8px', // Rounded corners for the button
                            textShadow:  '0.5px 0.5px 1px rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
        
        </>
    );
}
