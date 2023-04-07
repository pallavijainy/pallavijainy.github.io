import React from 'react'
import { Box, Image } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import "./PersonalA.css";
import proimage from "./WhatsApp Image 2023-04-07 at 6.08.36 PM (1).jpeg";
import certificateimage from "./certificateimage.jpg";
import codingimage from "./codingimg.jpg";
import miniimage from "./miniproject.jpg"

const PersonalAchievement = () => {
  return (
      <Box id='main'>
      <Box id='headbox'>

       <Heading id='head'>Personal Achievement</Heading>
      </Box>
    <Box id='mainbox'>
        <Box>
            <Image src={certificateimage}></Image>
        </Box>
        <Box>
            <Image src={codingimage}></Image>
        </Box>
        <Box>
            <Image src={miniimage}></Image>
        </Box>
        <Box>
            <Image src={proimage}></Image>
        </Box>
        
    </Box>
      </Box>
       
  )
}

export default PersonalAchievement
