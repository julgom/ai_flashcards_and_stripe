/*
//BILL'S TUTORIAL
import {Container, AppBar, Toolbar, Typography, Button, Box} from '@mui/material'
import Link from 'next/link'
import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
    return <Container maxWidth = "100vw">
        <AppBar position = "static" sx = {{backgroundColor: "#3f51b5"}}>
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
            <Typography variant = "h4">Sign Up</Typography>
            <SignUp />
        </Box>

    </Container>
}
*/
//FINAL
"use client"
import {Container, Box} from '@mui/material'
import CustomAppBar from '../../AppBar';
import { SignUp } from '@clerk/nextjs'
//import { ThemeProvider } from '../../ThemeContext';
//import { useTheme } from '../ThemeContext'; 

export default function SignUpPage() {
    //const { isDarkMode } = useTheme();
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
            
            <SignUp />
        </Box>

    </Container>

    </>
    )
                
}
