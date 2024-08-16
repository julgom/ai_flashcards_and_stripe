//INITIAL

/*
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const AppBarComponent = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Flashcard SaaS
        </Typography>
        <Button color="inherit" onClick={() => handleNavigation('/')}>Home</Button>
        <Button color="inherit" onClick={() => handleNavigation('/flashcards')}>Library</Button>
        <SignedOut>
          <Button color="inherit" onClick={() => handleNavigation('/sign-in')}>Login</Button>
          <Button color="inherit" onClick={() => handleNavigation('/sign-up')}>Sign Up</Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;

*/
/*
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const AppBarComponent = () => {
  const router = useRouter();
  const { pathname } = router; // Get the current route

  // Define background colors for different routes
  const getBackgroundColor = (path) => {
    switch (path) {
      case '/':
        return '#ffb6c1'; // Pastel Pink for Home
      case '/generate':
        return '#d1c4e9'; // Pastel Purple for Generate
      case '/flashcards':
        return '#ffb6c1'; // Pastel Pink for Library
      case '/flashcard':
        return '#d1c4e9'; // Pastel Purple for Practice
      default:
        return '#ffb6c1'; // Default to Pastel Purple
    }
  };

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <AppBar position="static"  sx={{ backgroundColor,  height: '90px', }}> 
    <Toolbar 
       sx={{
        height: '100%', // Make sure the Toolbar takes full height of AppBar
        display: 'flex',
        alignItems: 'center', // Center items vertically
        px: 2, // Optional: Add padding left and right
      }}
    >
    <Typography
      variant="h4" // Larger font size
      sx={{
        flexGrow: 1,
        color: '#333333', // Dark Gray for text
        fontWeight: 'bold', // Bold text
        
      }}
    >
      FlashAIde
    </Typography>
        <SignedIn>
        <IconButton 
          color="inherit" 
          sx={{ color: '#333333', '&:hover': { color: '#141414' }, mr:3  }} // Dark Gray text and Pastel Pink on hover
          onClick={() => handleNavigation('/')}
        >
          <HomeIcon />
          </IconButton>
          <IconButton 
          color="inherit" 
          sx={{ color: '#333333', '&:hover': { color: '#141414' }, mr:3 }} // Dark Gray text and Pastel Pink on hover
          onClick={() => handleNavigation('/flashcards')}
        >
          <LibraryBooksIcon />
        </IconButton>
        </SignedIn>

        <SignedOut>
          <Button 
            color="inherit" 
            sx={{ 
              color: '#333333', 
              '&:hover': { color: '#141414' }, 
              fontSize: '16px',
              fontWeight: 'bold', // Bold text
              mr:3 
            }} 
            onClick={() => handleNavigation('/sign-in')}
          >
            Login
          </Button>
          <Button 
            color="inherit" 
            sx={{ 
              color: '#333333', 
              '&:hover': { color: '#141414' }, 
              fontSize: '16px',
              fontWeight: 'bold', // Bold text
              
            }} 
            onClick={() => handleNavigation('/sign-up')}
          >
            Sign Up
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton  />
        </SignedIn>
  </Toolbar>
</AppBar>
);
};

export default AppBarComponent;

*/
//FINAL 
/*
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { useRouter } from 'next/navigation';

const CustomAppBar = ({ backgroundColor, textColor, hoverColor }) => {
  const router = useRouter();
  const { pathname } = router;

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor, height: '90px' }}>
      <Toolbar
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          px: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            flexGrow: 1,
            color: textColor,
            fontWeight: 'bold',

            textShadow: textColor === 'white'
              ? '0.5px 0.5px 1px rgba(0, 0, 0, 0.3)' // Subtle grey shadow for white text
              : '1px 1px 2px rgba(255, 255, 255, 0.5)', // Subtle white shadow for grey text
          }}
        >
          FlashAIde
        </Typography>
        <SignedIn>
          <IconButton
            color="inherit"
            sx={{
              color: textColor,
              '&:hover': { color: hoverColor },
              mr: 3,
              boxShadow: textColor === 'white'
                ? '0px 1px 2px rgba(0, 0, 0, 0.3)' // Subtle grey shadow for white icons
                : '0px 2px 4px rgba(255, 255, 255, 0.5)', // Subtle white shadow for grey icons

            }}
            onClick={() => handleNavigation('/')}
          >
            <HomeIcon />
          </IconButton>
          <IconButton
            color="inherit"
            sx={{
              color: textColor,
              '&:hover': { color: hoverColor },
              mr: 3,
              boxShadow: textColor === 'white'
                ? '0px 1px 2px rgba(0, 0, 0, 0.3)' // Subtle grey shadow for white icons
                : '0px 2px 4px rgba(255, 255, 255, 0.5)', // Subtle white shadow for grey icons

            }}
            onClick={() => handleNavigation('/flashcards')}
          >
            <LibraryBooksIcon />
          </IconButton>
        </SignedIn>

        <SignedOut>
          <Button
            color="inherit"
            sx={{
              color: textColor,
              '&:hover': { color: hoverColor },
              fontSize: '16px',
              fontWeight: 'bold',
              mr: 3,
              textShadow: textColor === 'white'
              ? '0.5px 0.5px 1px rgba(0, 0, 0, 0.3)' // Subtle grey shadow for white text
              : '1px 1px 2px rgba(255, 255, 255, 0.5)', // Subtle white shadow for grey text
            }}
            onClick={() => handleNavigation('/sign-in')}
          >
            Login
          </Button>
          <Button
            color="inherit"
            sx={{
              color: textColor,
              '&:hover': { color: hoverColor },
              fontSize: '16px',
              fontWeight: 'bold',
              textShadow: textColor === 'white'
              ? '0.5px 0.5px 1px rgba(0, 0, 0, 0.3)' // Subtle grey shadow for white text
              : '1px 1px 2px rgba(255, 255, 255, 0.5)', // Subtle white shadow for grey text
            }}
            onClick={() => handleNavigation('/sign-up')}
          >
            Sign Up
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton sx={{ color: textColor }} />
        </SignedIn>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
*/
"use client"
import React, {useState, useEffect} from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'; // Updated icon for flashcards
import AddCircleIcon from '@mui/icons-material/AddCircle'; // New icon for generating flashcards
import { useRouter } from 'next/navigation';
import LightMode from '@mui/icons-material/LightMode'; 
import DarkMode from '@mui/icons-material/DarkMode'; 
import { useTheme } from './ThemeContext'; // Import the useTheme hook
import { ThemeProvider } from './ThemeContext';

const CustomAppBar = ({ backgroundColor, textColor, hoverColor }) => {
  //const [isDarkMode, setIsDarkMode] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme(); // Use the context
  const router = useRouter();
  

  const handleNavigation = (path) => {
    router.push(path);
  };

  

  if (textColor == 'white' && isDarkMode) {
    textColor = '#333333'
  } else if (textColor == '#333333' && isDarkMode) {
    textColor = 'white'
  }
  if (hoverColor == '#f5f5f5' && isDarkMode) {
    hoverColor = '#141414'
  } else if (hoverColor == '#141414' && isDarkMode) {
    hoverColor = '#f5f5f5'
  }

  

  return (
    
    <AppBar position="fixed" sx={{ backgroundColor, height: '90px' }}>
      <Toolbar
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          px: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            flexGrow: 1,
            color: textColor,
            fontWeight: 'bold',
            textShadow: textColor === 'white'
              ? '0.5px 0.5px 1px rgba(0, 0, 0, 0.3)' // Subtle grey shadow for white text
              : '1px 1px 2px rgba(255, 255, 255, 0.5)', // Subtle white shadow for grey text
          }}
        >
          FlashAIde
        </Typography>
        <SignedIn>
          <IconButton
            color="inherit"
            sx={{
              color: textColor,
              '&:hover': { color: hoverColor },
              mr: 3,
              boxShadow: textColor === 'white'
                ? '0px 1px 2px rgba(0, 0, 0, 0.3)' // Subtle grey shadow for white icons
                : '0px 2px 4px rgba(255, 255, 255, 0.5)', // Subtle white shadow for grey icons
            }}
            onClick={() => handleNavigation('/')}
          >
            <HomeIcon />
          </IconButton>
          <IconButton
            color="inherit"
            sx={{
              color: textColor,
              '&:hover': { color: hoverColor },
              mr: 3,
              boxShadow: textColor === 'white'
                ? '0px 1px 2px rgba(0, 0, 0, 0.3)' // Subtle grey shadow for white icons
                : '0px 2px 4px rgba(255, 255, 255, 0.5)', // Subtle white shadow for grey icons
            }}
            onClick={() => handleNavigation('/generate')}
          >
            <AddCircleIcon /> {/* Icon for generating flashcards */}
          </IconButton>
          <IconButton
            color="inherit"
            sx={{
              color: textColor,
              '&:hover': { color: hoverColor },
              mr: 3,
              boxShadow: textColor === 'white'
                ? '0px 1px 2px rgba(0, 0, 0, 0.3)' // Subtle grey shadow for white icons
                : '0px 2px 4px rgba(255, 255, 255, 0.5)', // Subtle white shadow for grey icons
            }}
            onClick={() => handleNavigation('/flashcards')}
          >
            <LibraryBooksIcon /> 
          </IconButton>
          <IconButton
            color="inherit"
            sx={{
              color: textColor,
              '&:hover': { color: hoverColor },
              mr: 3,
              boxShadow: textColor === 'white'
                ? '0px 1px 2px rgba(0, 0, 0, 0.3)' // Subtle grey shadow for white icons
                : '0px 2px 4px rgba(255, 255, 255, 0.5)', // Subtle white shadow for grey icons
            }}
            onClick={toggleTheme}
          >
            {isDarkMode ? <DarkMode /> : <LightMode />}
          </IconButton>
        </SignedIn>

        <SignedOut>
          <Button
            color="inherit"
            sx={{
              color: textColor,
              '&:hover': { color: hoverColor },
              fontSize: '16px',
              fontWeight: 'bold',
              mr: 3,
              textShadow: textColor === 'white'
                ? '0.5px 0.5px 1px rgba(0, 0, 0, 0.3)' // Subtle grey shadow for white text
                : '1px 1px 2px rgba(255, 255, 255, 0.5)', // Subtle white shadow for grey text
            }}
            onClick={() => handleNavigation('/sign-in')}
          >
            Login
          </Button>
          <Button
            color="inherit"
            sx={{
              color: textColor,
              '&:hover': { color: hoverColor },
              fontSize: '16px',
              fontWeight: 'bold',
              textShadow: textColor === 'white'
                ? '0.5px 0.5px 1px rgba(0, 0, 0, 0.3)' // Subtle grey shadow for white text
                : '1px 1px 2px rgba(255, 255, 255, 0.5)', // Subtle white shadow for grey text
            }}
            onClick={() => handleNavigation('/sign-up')}
          >
            Sign Up
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton sx={{ color: textColor }} />
        </SignedIn>
      </Toolbar>
    </AppBar>
    
    
  );
};

export default CustomAppBar;
