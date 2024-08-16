import React from 'react';
import { ThemeProvider } from './ThemeContext'; // Import the ThemeProvider
import CustomAppBar from './AppBar'; // Import the CustomAppBar component if it's used here
import FlashcardPage from './flashcard/page'; // Import other pages/components if needed
import GeneratePage from './generate.page'; // Import other pages/components if needed
import FlashcardsPage from './flashcards/page';
import HomePage from '.app/page.js';

export default function ThemeProvider() {
  return (
    <ThemeProvider>
      <CustomAppBar />
      <FlashcardPage /> {/* Include other pages or routes */}
      <GeneratePage />
      <FlashcardsPage />
      <HomePage />
      {/* Include other components or routes as needed */}
    </ThemeProvider>
  );
}
