'use client';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import { useState } from 'react';

export default function FileUpload({ onFlashcardsGenerated, setFlashcards }) {

 


  const handleProcessFile = (error, file) => {
    if (error) {
      console.error('Error uploading file:', error);
      
      return;
    }


    // The file is already uploaded at this point, so we just need to parse the response
    if (file.serverId) {
      try {
        const flashcards = JSON.parse(file.serverId);
        
        onFlashcardsGenerated(flashcards);
      } catch (error) {
        console.error('Error parsing flashcards:', error);
        
      }
    }
  };


  return (
    
  
    <div style={{ width: '100%'}}>
    <FilePond
      server={{
        process: '/api/upload',
        fetch: null,
        revert: null,
      }}
      onaddfile={() => setFlashcards([])}  // Reset flashcards when a file is added
      onprocessfile={handleProcessFile}
      style={{
        width: '100%',
        height: '100%',
        
      }}
      />

    </div>

  );
}
/*
import React from 'react';
import { Box, Input, IconButton, Typography } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const FileUpload = ({ onFlashcardsGenerated }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file.server) {
      // Process the file if needed, then clear flashcards
      onFlashcardsGenerated(new Set()); // Set flashcards to empty set
    }
  };

  return (
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
        accept='.pdf'
        onChange={handleFileChange}
        sx={{ display: 'none' }}
        id="file-upload"
      />
      <label htmlFor="file-upload">
        <IconButton component="span" color="primary">
          <InsertDriveFileIcon fontSize="large" sx={{ color: '#ffb6c1' }} />
        </IconButton>
      </label>
    </Box>
  );
};

export default FileUpload;
*/