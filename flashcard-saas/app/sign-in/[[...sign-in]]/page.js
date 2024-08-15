/*
//BILL'S TUTORIAL
import {Container, AppBar, Toolbar, Typography, Button, Box} from '@mui/material'
import Link from 'next/link'
import { SignIn } from '@clerk/nextjs'


export default function SignUpPage() {
    return <Container 
        maxWidth="100vw" 
        >
        <AppBar position = "static">
            <Toolbar>
                <Typography
                  variant = "h6"
                  sx = {{
                    flexGrow: 1,
                  }}
                >
                    FlashCard SaaS
                </Typography>
                <Button color = "inherit">
                    <Link href = "/sign-in" passHref>
                        Login
                    </Link>
                </Button>
                <Button color = "inherit">
                    <Link href = "/sign-up" passHref>
                        Sign Up
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>

        <Box
            display = "flex"
            flexDirection = "column"
            alignItems = "center"
            justifyContent = "center"
        >
            <Typography variant = "h4">Sign In</Typography>
            <SignIn />
        </Box>

    </Container>
    
}
*/
//FINAL
"use client"
import {Container, Box} from '@mui/material'
import CustomAppBar from '../../AppBar';
import { SignIn } from '@clerk/nextjs'


export default function SignUpPage() {
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
            
            backgroundColor: '#fce4ec', 
            minHeight: '100vh', 
            p: 3, 
        }}>
        <Box
           sx = {{pt: "90px",}}
           display = "flex"
           flexDirection = "column"
           alignItems = "center"
           justifyContent = "center"
            
        >
            
            <SignIn />
        </Box>

    </Container>
    </>

    )
}