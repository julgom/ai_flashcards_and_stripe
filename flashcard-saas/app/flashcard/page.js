//BILL'S TUTORIAL
/*"use client"

import {useUser} from '@clerk/nextjs'
import { useState, useEffect } from 'react'

import {doc, setDoc, getDoc, collection, getDocs} from 'firebase/firestore'
import {db} from '@/firebase'

import {useSearchParams} from 'next/navigation'


import {Container, Box, Typography, Paper, TextField, Button, Grid, Card, CardActionArea, CardContent, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@mui/material'


export default function Flashcard() {
    const {isLoaded, isSignedIn, user} = useUser()
    const [flashcards, setFlashcards] = useState([])
    const [flipped, setFlipped] = useState([])

    const searchParams = useSearchParams()
    const search = searchParams.get('id')

    useEffect(() => {
        async function getFlashcard(){
            if (!search || !user) return
            
            const colRef = collection(doc(collection(db, 'users'), user.id), search)
            const docs = await getDocs(colRef)
            const flashcards = []
            
            docs.forEach((doc) => {
                flashcards.push({id: doc.id, ...doc.data()})
            })
            setFlashcards(flashcards)
        }
        getFlashcard()
    }, [user, search])

    const handleCardClick = (id) => {
        setFlipped((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }

    if (!isLoaded || !isSignedIn) {
        return <></>
    }

    return (
        <Container maxWidth = "100vw">
            <Grid container spacing = {3} sx = {{mt: 4}}>
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
        </Container>
    )
}
*/
//INITIAL VERSION: REACT-COMPONENT

/*
"use client"

import {useUser} from '@clerk/nextjs'
import { useState, useEffect } from 'react'

import {doc, setDoc, getDoc, collection, getDocs} from 'firebase/firestore'
import {db} from '@/firebase'

import {useSearchParams} from 'next/navigation'


import React from 'react';
import { FlashCardArray } from 'react-flashcards';

export default function Flashcard() {
    const {isLoaded, isSignedIn, user} = useUser()
    const [flashcards, setFlashcards] = useState([])

    const searchParams = useSearchParams()
    const search = searchParams.get('id')

    useEffect(() => {
        async function getFlashcard(){
            if (!search || !user) return
            
            const colRef = collection(doc(collection(db, 'users'), user.id), search)
            const docs = await getDocs(colRef)
            const fetchedFlashcards = []

            docs.forEach((doc) => {
                fetchedFlashcards.push({ id: doc.id, ...doc.data() })
            })

            // Format flashcards here
            const formatted_flashcards = fetchedFlashcards.map((flashcard, index) => ({
                id: index + 1,
                front: flashcard.front || "Default Front",
                back: flashcard.back || "Default Back",
            }))

            setFlashcards(formatted_flashcards)
        }
        getFlashcard()
    }, [user, search])

    
    if (!isLoaded || !isSignedIn) {
        return <></>
    }
;

    // Custom styles
    const flashcardStyle = {
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#ffffff',
        border: '2px solid #d1c4e9',
    };
    const frontStyle = {
        backgroundColor: '#ffffff',
        color: '#000000',
    };
    const backStyle = {
        backgroundColor: '#ffb6c1',
        color: '#000000',
    };

    
    
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#fce4ec', padding: '20px' }}>
            <FlashCardArray
                cards={flashcards}
                shuffle={true}
                cardStyle={flashcardStyle}
                frontStyle={frontStyle}
                backStyle={backStyle}
            />
        </div>
    );
}*/
/*
"use client"

import { useUser } from '@clerk/nextjs'
import { useState, useEffect } from 'react'
import { doc, collection, getDocs, getDoc, setDoc } from 'firebase/firestore'
import { db } from '@/firebase'
import { useSearchParams } from 'next/navigation'
import { FlashCardArray } from 'react-flashcards'

export default function Flashcard() {
    const { isLoaded, isSignedIn, user } = useUser()
    const [flashcards, setFlashcards] = useState([])
    const [formatted_flashcards, setFormatted_Flashcards] = useState([])

    const searchParams = useSearchParams()
    const search = searchParams.get('id')

   
    useEffect(() => {
        async function getFlashcard() {
            if (!search || !user) return

            const colRef = collection(doc(collection(db, 'users'), user.id), search)
            const docs = await getDocs(colRef)
            const fetchedFlashcards = []

            docs.forEach((doc) => {
                fetchedFlashcards.push({ id: doc.id, ...doc.data() })
            })

            const formatted_flashcards = fetchedFlashcards.map((flashcard, index) => ({
                id: index + 1,
                front: flashcard.front || "Default Front",
                back: flashcard.back || "Default Back",
            }))

            setFlashcards(formatted_flashcards)
        }

        getFlashcard()
    }, [user, search])

    if (!isLoaded || !isSignedIn) {
        return <p>Loading or not signed in...</p>
    }

    const flashcardStyle = {
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#ffffff',
        border: '2px solid #d1c4e9',
    }
    const frontStyle = {
        backgroundColor: '#ffffff',
        color: '#000000',
    }
    const backStyle = {
        backgroundColor: '#ffb6c1',
        color: '#000000',
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#fce4ec', padding: '20px' }}>
            <FlashCardArray
                cards={formatted_flashcards}
                shuffle={true}
                cardStyle={flashcardStyle}
                frontStyle={frontStyle}
                backStyle={backStyle}
            />
        </div>
    )
}
*/
//REACT-COMPONENT
/*
"use client"

import { useUser } from '@clerk/nextjs'
import { useState, useEffect } from 'react'
import { doc, collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'
import { useSearchParams } from 'next/navigation'
import { FlashCardArray } from 'react-flashcards'

export default function Flashcard() {
    const { isLoaded, isSignedIn, user } = useUser()
    const [flashcards, setFlashcards] = useState([])

    const searchParams = useSearchParams()
    const search = searchParams.get('id')

    useEffect(() => {
        async function getFlashcard() {
            if (!search || !user) return;

            const colRef = collection(doc(collection(db, 'users'), user.id), search);
            const docs = await getDocs(colRef);
            const flashcards = [];

            docs.forEach((doc) => {
                flashcards.push({ id: doc.id, ...doc.data() });
            });
            setFlashcards(flashcards);
        }
        getFlashcard();
    }, [user, search]);

    if (!isLoaded || !isSignedIn) {
        return <p>Loading or not signed in...</p>
    }

    const flashcardStyle = {
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#ffffff',
        border: '2px solid #d1c4e9',
    }
    const frontStyle = {
        backgroundColor: '#ffffff',
        color: '#000000',
    }
    const backStyle = {
        backgroundColor: '#ffb6c1',
        color: '#000000',
    }
    const fetchedFlashcards = flashcards
    const formatted_flashcards = fetchedFlashcards.map((flashcard, index) => ({
        id: index+1, // Use the actual ID from Firebase
        front: flashcard.front || "Default Front",
        back: flashcard.back || "Default Back",
    }))

   

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#fce4ec', padding: '20px' }}>
            <FlashCardArray
                cards={formatted_flashcards}
                shuffle={true}
                cardStyle={flashcardStyle}
                frontStyle={frontStyle}
                backStyle={backStyle}
            />
        </div>
    )
}
*/

/*
//INITIAL VERSION
'use client'

import { useUser } from '@clerk/nextjs';
import { useState, useEffect } from 'react';
import { doc, setDoc, getDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';
import { useSearchParams } from 'next/navigation';
import { Container, Grid, Card, CardActionArea, CardContent, Typography, Box } from '@mui/material';

export default function Flashcard() {
    const { isLoaded, isSignedIn, user } = useUser();
    const [flashcards, setFlashcards] = useState([]);
    const [flipped, setFlipped] = useState([]);

    const searchParams = useSearchParams();
    const search = searchParams.get('id');

    useEffect(() => {
        async function getFlashcard() {
            if (!search || !user) return;

            const colRef = collection(doc(collection(db, 'users'), user.id), search);
            const docs = await getDocs(colRef);
            const flashcards = [];

            docs.forEach((doc) => {
                flashcards.push({ id: doc.id, ...doc.data() });
            });
            setFlashcards(flashcards);
        }
        getFlashcard();
    }, [user, search]);

    const handleCardClick = (id) => {
        setFlipped((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    if (!isLoaded || !isSignedIn) {
        return <></>;
    }

    

    return (
        <Container maxWidth="100vw" sx={{ minHeight: '100vh', backgroundColor: '#fce4ec', p: 3 }}>
            <Grid container spacing={3} sx={{ mt: 4 }}>
                {flashcards.map((flashcard, index) => {
                    const cardColor = index % 2 === 0 ? 'rgba(209, 196, 233, 0.6)' : 'rgba(255, 182, 193, 0.6)';
                    const hoverColor = index % 2 === 0 ? 'rgba(209, 196, 233, 0.8)' : 'rgba(255, 182, 193, 0.8)';

                    return (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
                                    backgroundColor: '#ffffff',
                                    border: `2px solid ${index % 2 === 0 ?  'rgba(209, 196, 233, 0.5)' : 'rgba(255, 182, 193, 0.5)'}`, // Alternating pastel purple/pink blurred border
                                    
                                }}
                            >
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
                                                   backgroundColor: index % 2 === 0 ? '#d1c4e9' : '#ffb6c1', // Pastel purple/pink for the front
                                                   border: `2px solid ${index % 2 === 0 ? 'rgba(209, 196, 233, 0.5)' : 'rgba(255, 182, 193, 0.5)'}`, // Alternating border colors
                                                   color: index % 2 === 0 ? '#000000' : '#ffffff', // Black text on purple, white text on pink
                                               },
                                               '& > div > div:nth-of-type(2)': {
                                                   backgroundColor: index % 2 === 0 ? '#ffb6c1' : '#d1c4e9', // Alternating pastel pink/purple for the back
                                                   border: `2px solid ${index % 2 === 0 ? 'rgba(255, 182, 193, 0.5)' : 'rgba(209, 196, 233, 0.5)'}`, // Alternating border colors
                                                   color: index % 2 === 0 ? '#ffffff' : '#000000', // White text on pink, black text on purple
                                                   transform: 'rotateY(180deg)',
                                               },
                                            }}
                                        >
                                            <div>
                                                <div>
                                                    <Typography variant="h5" component="div" >
                                                        {flashcard.front}
                                                    </Typography>
                                                </div>
                                                <div>
                                                    <Typography variant="h5" component="div" >
                                                        {flashcard.back}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </Box>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    );
}*/

//FINAL
'use client';

import { useUser } from '@clerk/nextjs';
import { useState, useEffect } from 'react';
import { doc, collection, getDocs, getDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import { useSearchParams } from 'next/navigation';
import { Container, Box, Typography, Card, CardActionArea, CardContent, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import React from 'react';
import CustomAppBar from '../AppBar';

export default function Flashcard() {
    const { isLoaded, isSignedIn, user } = useUser();
    const [flashcards, setFlashcards] = useState([]);
    const [flipped, setFlipped] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const [flashcardSetName, setFlashcardSetName] = useState('');


    const searchParams = useSearchParams();
    const search = searchParams.get('id');

    useEffect(() => {
       
        async function getFlashcard() {
            if (!search || !user) return;
    
            const userDocRef = doc(collection(db, 'users'), user.id);
            const userDocSnap = await getDoc(userDocRef);
    
            if (!userDocSnap.exists()) return;
    
            const flashcardCollections = userDocSnap.data().flashcards || [];
            const flashcardSet = flashcardCollections.find((f) => f.name === search);
    
            if (flashcardSet) {
                const colRef = collection(userDocRef, search);
                const cardDocSnap = await getDocs(colRef);
                const flashcards = [];
    
                cardDocSnap.forEach((cardDoc) => {
                    flashcards.push({ id: cardDoc.id, ...cardDoc.data() });
                });
    
                setFlashcards(flashcards);
                setFlashcardSetName(flashcardSet.name);
            }
        }
       
        getFlashcard();
    }, [user, search]);

    const handleCardClick = () => {
        setFlipped((prev) => ({
            ...prev,
            [currentIndex]: !prev[currentIndex],
        }));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % flashcards.length);
        setFlipped({});
    };

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
        setFlipped({});
    };

    if (!isLoaded || !isSignedIn) {
        return <></>;
    }

    const flashcard = flashcards[currentIndex];
    const isEven = currentIndex % 2 === 0;

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
                //pt: '90px',
                minHeight: '100vh',
                backgroundColor: '#fce4ec',
                p: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                flexDirection: 'column',
            }}
        >
            <Typography variant="h4" sx={{ pt: '90px', color: '#333333', mb:4, textShadow: '1px 1px 2px rgba(255, 255, 255, 0.5)' }}>
                {flashcardSetName.charAt(0).toUpperCase() + flashcardSetName.slice(1)}
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    //width: '60%',
                    width: '100%',
                    //maxWidth: '650px'
                    
                    
                }}
            >
                
                <IconButton
                    sx={{
                        position: 'relative',
                        right: '16px',
                        //zIndex: 1,
                        backgroundColor: '#ffffff',
                        '&:hover': {
                            backgroundColor: '#d3d3d3',
                        },
                    }}
                    onClick={handlePrevious}
                >
                    <ArrowBackIos />
                </IconButton>

                {flashcards.length > 0 && (
                    <Card
                        sx={{
                            borderRadius: '12px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
                            border: `2px solid ${isEven ? 'rgba(209, 196, 233, 0.5)' : 'rgba(255, 182, 193, 0.5)'}`,
                            backgroundColor: '#ffffff',
                            width: '650px',
                            

                            height: '450px',
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer', // Add this to indicate the card is clickable
                        }}
                        onClick={handleCardClick} // Attach the click handler directly to the Card
                        
                    >
                        
                            <CardContent>
                                <Box
                                    sx={{
                                        perspective: '1000px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        '& > div': {
                                            transition: 'transform 0.6s',
                                            transformStyle: 'preserve-3d',
                                            position: 'relative',
                                            width: '600px',
                                            height: '400px',
                                            
                                            transform: flipped[currentIndex] ? 'rotateX(180deg)' : 'rotateX(0deg)',
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
                                            borderRadius: '12px',
                                        },
                                        '& > div > div:nth-of-type(1)': {
                                            backgroundColor: isEven ? '#d1c4e9' : '#ffb6c1',
                                            border: `2px solid ${isEven ? 'rgba(209, 196, 233, 0.5)' : 'rgba(255, 182, 193, 0.5)'}`,
                                            color: isEven ? '#000000' : '#ffffff',
                                        },
                                        '& > div > div:nth-of-type(2)': {
                                            backgroundColor: isEven ? '#ffb6c1' : '#d1c4e9',
                                            border: `2px solid ${isEven ? 'rgba(255, 182, 193, 0.5)' : 'rgba(209, 196, 233, 0.5)'}`,
                                            color: isEven ? '#ffffff' : '#000000',
                                            transform: 'rotateX(180deg)',
                                        },
                                    }}
                                >
                                    <div>
                                        <div>
                                            <Typography variant="h5" component="div" sx={{  textAlign: 'center' }}>
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
                )}

                <IconButton
                    sx={{
                        position: 'relative',
                        left: '16px',
                        //zIndex: 1,
                        backgroundColor: '#ffffff',
                        '&:hover': {
                            backgroundColor: '#d3d3d3',
                        },
                    }}
                    onClick={handleNext}
                >
                    <ArrowForwardIos />
                </IconButton>
            </Box>

            {flashcards.length > 0 && (
                <Typography
                    variant="body1"
                    sx={{ mt: 2, color: '#333333', textAlign: 'center' }}
                >
                    {currentIndex + 1} / {flashcards.length}
                </Typography>
            )}
        </Container>
        </>
    );
}
