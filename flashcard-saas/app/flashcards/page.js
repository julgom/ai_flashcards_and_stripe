//BILL'S TUTORIAL
/*"use client"

import {useUser} from '@clerk/nextjs'
import { useState, useEffect } from 'react'

import {doc, setDoc, getDoc, collection} from 'firebase/firestore'
import {db} from '@/firebase'
import {useRouter} from 'next/navigation'

import {Container, Box, Typography, Paper, TextField, Button, Grid, Card, CardActionArea, CardContent, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@mui/material'

export default function Flashcards() {
    const {isLoaded, isSignedIn, user} = useUser()
    const [flashcards, setFlashcards] = useState([])
    const router = useRouter()

    useEffect(() => {
        async function getFlashcards(){
            if (!user) return
            
            const docRef = doc(collection(db, 'users'), user.id)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                const collections = docSnap.data().flashcards || []
                console.log(collections)
                setFlashcards(collections)
            } else {
                await setDoc(docRef, {flashcards: []});
            }
             
        }

        getFlashcards()
    }, [user])

    if (!isLoaded || !isSignedIn) {
        return <></>
    }

    const handleCardClick = (id) => {
        router.push(`/flashcard?id=${id}`)
    }

    return (
        <Container maxWidth = "100vw">
            <Grid container spacing = {3} sx = {{mt: 4}}>
                {flashcards.map((flashcard, index) => (
                    <Grid item xs = {12} sm = {6} md = {4} key = {index}>
                        <CardActionArea 
                            onClick = {() => {
                                handleCardClick(flashcard.name)
                            }}
                        >
                            <CardContent>
                                <Typography variant = "h6">
                                    {flashcard.name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>    
                ))}
            </Grid>
        </Container>
    )

}
*/
//INITIAL VERSION
/*
'use client'

import { useUser } from '@clerk/nextjs';
import { useState, useEffect } from 'react';
import { doc, getDoc, collection } from 'firebase/firestore';
import { db } from '@/firebase';
import { useRouter } from 'next/navigation';
import { Container, Grid, Card, CardActionArea, CardContent, Typography } from '@mui/material';

export default function Flashcards() {
    const { isLoaded, isSignedIn, user } = useUser();
    const [flashcards, setFlashcards] = useState([]);
    const router = useRouter();

    useEffect(() => {
        async function getFlashcards() {
            if (!user) return;

            const docRef = doc(collection(db, 'users'), user.id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const collections = docSnap.data().flashcards || [];
                console.log(collections);
                setFlashcards(collections);
            } else {
                await setDoc(docRef, { flashcards: [] });
            }
        }

        getFlashcards();
    }, [user]);

    if (!isLoaded || !isSignedIn) {
        return <></>;
    }

    const handleCardClick = (id) => {
        router.push(`/flashcard?id=${id}`);
    };

    return (
        <Container 
            maxWidth="100vw"
            sx={{ 
                backgroundColor: '#fce4ec', // Pastel Pink background
                minHeight: '100vh', 
                p: 3 
            }}
        >
            <Typography variant="h4" sx={{ color: '#333333' }}>
                Your Library
            </Typography>
            <Grid container spacing={3} sx={{ mt: 4 }}>
                {flashcards.map((flashcard, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{
                                borderRadius: '12px', // Smooth corners
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                border: `2px solid ${index % 2 === 0 ? 'rgba(209, 196, 233, 0.5)' : 'rgba(255, 182, 193, 0.5)'}`, // Alternating pastel purple/pink border
                                backgroundColor: '#ffffff', // White background for the outer box
                            }}
                        >
                            <CardActionArea onClick={() => handleCardClick(flashcard.name)}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ color: '#333333' }}>
                                        {flashcard.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
*/

//SLIGHTLY UPDATED VERSION
/*
'use client'

import { useUser } from '@clerk/nextjs';
import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, collection } from 'firebase/firestore';
import { db } from '@/firebase';
import { useRouter } from 'next/navigation';
import { Container, Grid, Card, CardActionArea, CardContent, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function Flashcards() {
    const { isLoaded, isSignedIn, user } = useUser();
    const [flashcards, setFlashcards] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentCardId, setCurrentCardId] = useState(null);
    const router = useRouter();

    useEffect(() => {
        async function getFlashcards() {
            if (!user) return;

            const docRef = doc(collection(db, 'users'), user.id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const collections = docSnap.data().flashcards || [];
                setFlashcards(collections);
            } else {
                await setDoc(docRef, { flashcards: [] });
            }
        }

        getFlashcards();
    }, [user]);

    if (!isLoaded || !isSignedIn) {
        return <></>;
    }

    const handleCardClick = (id) => {
        router.push(`/flashcard?id=${id}`);
    };

    const handleMenuClick = (event, cardId) => {
        setAnchorEl(event.currentTarget);
        setCurrentCardId(cardId);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setCurrentCardId(null);
    };

    const handleRename = () => {
        // Implement rename functionality here
        handleMenuClose();
    };

    const handleDelete = () => {
        // Implement delete functionality here
        handleMenuClose();
    };

    const handlePlayClick = (id) => {
        router.push(`/flashcard?id=${id}`);
    };

    return (
        <Container 
            maxWidth="100vw"
            sx={{ 
                backgroundColor: '#fce4ec', // Pastel Pink background
                minHeight: '100vh', 
                p: 3 
            }}
        >
            <Typography variant="h4" sx={{ color: '#333333', textAlign: 'center' }}>
                Your Library
            </Typography>
            <Grid container spacing={3} sx={{ mt: 4 }}>
                {flashcards.map((flashcard, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{
                                borderRadius: '12px', // Smooth corners
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                border: `2px solid ${index % 2 === 0 ? 'rgba(209, 196, 233, 0.5)' : 'rgba(255, 182, 193, 0.5)'}`, // Alternating pastel purple/pink border
                                backgroundColor: '#ffffff', // White background for the outer box
                                height: 170, // Set a height for each card
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                
                            }}
                        >
                            <CardActionArea 
                                onClick={() => handlePlayClick(flashcard.name)} 
                                sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', position: 'relative' }}>
                                    <Typography 
                                        variant="h6" 
                                        sx={{ 
                                            color: '#333333', 
                                            textAlign: 'center',
                                            flex: 1,
                                            marginRight: 2
                                        }}
                                    >
                                        {flashcard.name}
                                    </Typography>
                                    <IconButton 
                                        sx={{ 
                                            color: '#ffffff', 
                                            width: 60, 
                                            height: 60,
                                            borderRadius: '50%',
                                            backgroundColor: index % 2 === 0 ? 'rgba(209, 196, 233, 0.8)' : 'rgba(255, 182, 193, 0.8)', // Alternating color
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }} 
                                        onClick={() => handlePlayClick(flashcard.name)}
                                    >
                                        <PlayArrowIcon sx={{ fontSize: 40 }} />
                                    </IconButton>
                                    <IconButton 
                                        sx={{ 
                                            position: 'absolute', 
                                            top: 8, 
                                            right: 8, 
                                            color: '#333333' 
                                        }} 
                                        onClick={(event) => handleMenuClick(event, flashcard.name)}
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleRename}>Rename</MenuItem>
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>
        </Container>
    );
}
*/

//FINAL

'use client'

import { useUser } from '@clerk/nextjs';
import { useState, useEffect, useRef } from 'react';
import { doc, getDoc, setDoc, collection, getDocs, writeBatch } from 'firebase/firestore';
import { db } from '@/firebase';
import { useRouter } from 'next/navigation';
import { Container, Grid, Card, CardContent, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CustomAppBar from '../AppBar';

export default function Flashcards() {
    const { isLoaded, isSignedIn, user } = useUser();
    const [flashcards, setFlashcards] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentName, setCurrentName] = useState(null);
    const [currentCardColor, setCurrentCardColor] = useState('#ffffff');
    const [currentHoverColor, setCurrentHoverColor] = useState('#ffffff');
    const router = useRouter();
    const [openRenameModal, setOpenRenameModal] = useState(false);
    const [newName, setNewName] = useState('');
 

    useEffect(() => {
        async function getFlashcards() {
            if (!user) return;

            const docRef = doc(collection(db, 'users'), user.id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const collections = docSnap.data().flashcards || [];
                setFlashcards(collections);
            } else {
                await setDoc(docRef, { flashcards: [] });
            }
        }

        getFlashcards();
    }, [user]);

    if (!isLoaded || !isSignedIn) {
        return <></>;
    }

    const handlePlayClick = (name, color, hoverColor) => {
        router.push(`/flashcard?id=${name}`);
        setCurrentCardColor(color);
        setCurrentHoverColor(hoverColor);
    };

    const handleMenuClick = (event, name, color, hoverColor) => {
        setAnchorEl(event.currentTarget);
        setCurrentName(name);
        console.log("CURRENT NAME", name, "NEW NAME", newName)
        setCurrentCardColor(color);
        setCurrentHoverColor(hoverColor);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        //setCurrentName(null);
        setCurrentCardColor('#ffffff');
        setCurrentHoverColor('#ffffff');
    };

    const handleRename = () => {
        setOpenRenameModal(true);
        handleMenuClose();
    };

    const handleRenameConfirm = async () => {
        if (!newName) {
            alert('Please enter a name');
            return;
        }
        if (currentName && newName && currentName != newName) {
            // Implement your renaming logic here, such as updating the flashcard name in the database

            const batch = writeBatch(db);
            const userDocRef = doc(collection(db, 'users'), user.id);
            const docSnap = await getDoc(userDocRef);
            if (docSnap.exists()) {
                const flashcards = docSnap.data().flashcards || [];
                if (flashcards.find((f) => f.name === newName)) {
                    alert('Flashcard collection with the same name already exists.');
                    return;
                } 
                const flashcardSet = flashcards.find((f) => f.name === currentName);

                if (flashcardSet) {
                    // Copy flashcards to the new collection
                    const oldColRef = collection(userDocRef, currentName);
                    const newColRef = collection(userDocRef, newName);
                    const oldardDocSnap = await getDocs(oldColRef);

                    oldardDocSnap.forEach((oldCardDoc) => {
                        const newCardDocRef = doc(newColRef); // Create a new document reference in the new collection
                        batch.set(newCardDocRef, oldCardDoc.data()); // Set the document data using oldCardDoc.data()
                    });

                    // Update the flashcard collection name in the user's document
                    const updatedFlashcards = flashcards.map((f) => {
                        if (f.name === currentName) {
                            return { name: newName };
                        }
                        return f;
                    });

                    batch.set(userDocRef, { flashcards: updatedFlashcards }, { merge: true });

                    // Delete the old collection's documents
                    oldardDocSnap.forEach((oldCardDoc) => {
                       batch.delete(oldCardDoc.ref); // Delete each document in the old collection
                    });
                    
    
                    // Commit the batch operation
                    await batch.commit();

                    // Update the flashcards state with the new collection name immediately
                    setFlashcards(updatedFlashcards);
                }

            }

        }
        setNewName('');
        setOpenRenameModal(false);
    };
    

    const handleDelete = async () => {
        // Implement delete functionality here
        const batch = writeBatch(db);
        const userDocRef = doc(collection(db, 'users'), user.id);
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
            const flashcards = docSnap.data().flashcards || [];
            const updatedFlashcards = flashcards.filter((f) => f.name !== currentName);
        
            // Update the user's document to remove the flashcard collection reference
            batch.set(userDocRef, { flashcards: updatedFlashcards }, { merge: true });

            // Reference the flashcard collection under the user's document
            const colRef = collection(userDocRef, currentName);
        
            // Get all documents in the collection
            const cardDocSnap = await getDocs(colRef);
        
            // Iterate over each document and delete it
            cardDocSnap.forEach((cardDoc) => {
                    batch.delete(cardDoc.ref); // Use the document reference for deletion
            });
        
            // Commit the batch operation to delete all documents
            await batch.commit();

            // Update the flashcards state to remove the deleted collection
            setFlashcards(updatedFlashcards);
        
                
        }

        handleMenuClose();
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
                backgroundColor: '#EAE5F2',//'#EADFF2',//#E6E6FA',//#fce4ec', // Pastel Pink background
                minHeight: '100vh', 
                p: 3 
            }}
        >
            <Typography variant="h4" sx={{ pt: '90px', color: '#333333', textAlign: 'center', textShadow: '1px 1px 2px rgba(255, 255, 255, 0.5)',}}>
                Your Library
            </Typography>
            <Grid container spacing={3} sx={{ mt: 0.5 }}>
                {flashcards.map((flashcard, index) => {
                    const cardColor = index % 2 === 0 ? 'rgba(209, 196, 233, 0.6)' : 'rgba(255, 182, 193, 0.6)';
                    const hoverColor = index % 2 === 0 ? 'rgba(255, 182, 193, 0.6)' : 'rgba(209, 196, 233, 0.6)';

                    return (
                        <Grid sx={{mt:4, mb: 6}} item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    borderRadius: '12px', // Smooth corners
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
                                    border: `2px solid ${index % 2 === 0 ? 'rgba(209, 196, 233, 0.5)' : 'rgba(255, 182, 193, 0.5)'}`, // Alternating pastel purple/pink border
                                    backgroundColor: '#ffffff', // White background for the outer box
                                    height: 200, // Increased height for each card
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', position: 'relative', flexDirection: 'row', gap: 8, p: 2, }}>
                                    <Typography 
                                        variant="h4" 
                                        sx={{ 
                                            color: '#333333', 
                                            textAlign: 'center',
                                            //marginRight: 20,
                                            //flexGrow: 1
                                        }}
                                    >
                                        {flashcard.name.charAt(0).toUpperCase() + flashcard.name.slice(1)}
                                    </Typography>
                                    <IconButton
                                        sx={{ 
                                            color: '#ffffff', 
                                            width: 60, 
                                            height: 60,
                                            borderRadius: '50%',
                                            backgroundColor: index % 2 === 0 ? '#d1c4e9' : '#ffb6c1', // Alternating color
                                            '&:hover': {
                                                backgroundColor: index % 2 === 0 ? '#b9a7d9' : '#e99ca9',//'#'#eba2ad', // Darker color on hover
                                            },
                                        }} 
                                        onClick={() => handlePlayClick(flashcard.name, cardColor, hoverColor)}
                                    >
                                        <PlayArrowIcon sx={{ fontSize: 40 }} />
                                    </IconButton>
                                </CardContent>
                                <IconButton 
                                    sx={{ 
                                        position: 'absolute', 
                                        top: 8, 
                                        right: 8, 
                                        color: '#333333' 
                                    }} 
                                    onClick={(event) => handleMenuClick(event, flashcard.name, cardColor, hoverColor)}
                                >
                                    <MoreVertIcon />
                                </IconButton>
                            </Card>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                                sx={{
                                    '& .MuiPaper-root': {
                                        backgroundColor: currentCardColor, // Menu background matches the flashcard color
                                    },
                                }}
                            >
                                <MenuItem
                                    sx={{
                                        color: '#333333',
                                        '&:hover': {
                                            backgroundColor: currentHoverColor, // Opposite color on hover
                                            color: '#ffffff', // Optional: change text color on hover
                                        },
                                    }}
                                    onClick={handleRename}
                                >
                                    Rename
                                </MenuItem>
                                <MenuItem
                                    sx={{
                                        color: '#333333',
                                        '&:hover': {
                                            backgroundColor: currentHoverColor, // Opposite color on hover
                                            color: '#ffffff', // Optional: change text color on hover
                                        },
                                    }}
                                    onClick={handleDelete}
                                >
                                    Delete
                                </MenuItem>
                            </Menu>
                        </Grid>
                    );
                })}
            </Grid>
            <Dialog
                open={openRenameModal}
                onClose={() => setOpenRenameModal(false)}
                sx={{
                    '& .MuiDialog-paper': {
                    backgroundColor: '#fce4ec',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255, 182, 193, 0.5)',
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
                    Rename Flashcards
                </DialogTitle>
                <DialogContent>
                    <DialogContentText
                        sx={{
                            color: '#333333', 
                            //marginBottom: '1rem',
                            textAlign: 'center', // Center the text
                        }}
                    >
                        Please enter a new name for your flashcards collection
                    </DialogContentText>
                    <TextField
                         autoFocus
                         margin="dense"
                         label="Collection Name"
                         type="text"
                         fullWidth
                         value={currentName}
                         onChange={(e) => setNewName(e.target.value)}
                         variant="outlined"
                         sx={{
                            
                            '& .MuiInputBase-root': {
                                color: '#000', // Black text color for the input
                                backgroundColor: '#ffffff', // White background
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#d1c4e9', // Pastel purple border color
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#d1c4e9', // Pastel purple border color on hover
                            },
                            '& .MuiInputLabel-root': {
                                color: '#d1c4e9', // Pastel purple label color by default
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: '#d1c4e9', // Pastel purple label color when focused
                            },
                            '& .MuiInputBase-input': {
                                color: '#000', // Black text color for the input
                            },
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#d1c4e9', // Pastel purple border color when focused
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
                        onClick={handleRenameConfirm}
                        variant="contained"
                        color="primary"
                        sx={{
                            mt: -1,
                            mb: 1,
                            backgroundColor: '#d1c4e9', // Pastel purple background
                            color: '#000', // Black text color
                            textTransform: 'capitalize', // Capitalize only the first letter of 'Save'
                            '&:hover': {
                                backgroundColor: '#b9a7d9', // Slightly darker pastel purple on hover
                            },
                            borderRadius: '8px', // Rounded corners for the button
                            textShadow: '1px 1px 2px rgba(255, 255, 255, 0.5)',
                        }}
                    >
                        Confirm
                    </Button>
                    <Button
                        onClick={() => setOpenRenameModal(false)}
                        variant="contained"
                        color="primary"
                        sx={{
                            mt: -1,
                            mb: 1,
                            backgroundColor: '#d1c4e9', // Pastel purple background
                            color: '#000', // Black text color
                            textTransform: 'capitalize', // Capitalize only the first letter of 'Save'
                            '&:hover': {
                                backgroundColor: '#b9a7d9', // Slightly darker pastel purple on hover
                            },
                            borderRadius: '8px', // Rounded corners for the button
                            textShadow: '1px 1px 2px rgba(255, 255, 255, 0.5)',
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
