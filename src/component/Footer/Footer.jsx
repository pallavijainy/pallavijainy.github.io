import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { Box, Heading, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <div style={{height:"200px" ,marginTop:"40px"}} id="footer" > 
        <hr /> 
        <Heading style={{textDecoration:"underline",paddingTop:'20px'}}>CONTACT ME</Heading>
        <div style={{paddingTop:'20px'}}>
       <Link href='https://github.com/pallavijainy' target="_blank" rel="noopener noreferrer"><GitHubIcon fontSize='large' /></Link>     
          <Link href='https://www.linkedin.com/in/pallavi-jain-64442a23a/' target="_blank" rel="noopener noreferrer"><LinkedInIcon fontSize='large'/></Link>  
           <Link href='https://www.instagram.com/_pallavi_baraiya_06/' target="_blank" rel="noopener noreferrer"> <InstagramIcon fontSize='large'/></Link>
           <Link href='mailto:pallavijainy0612@gmail.com' target="_blank" rel="noopener noreferrer"><EmailIcon fontSize='large'/></Link> 
         <Link href='tel: 9755415107' target="_blank" rel="noopener noreferrer"> <ContactPageIcon fontSize='large'/></Link>  
         
            
            <div>
                <Text> <Link href='tel: 9755415107' target="_blank" rel="noopener noreferrer">+91 9755415107</Link> </Text>
                
                <Text> E-Mail: <Link href='mailto:pallavijainy0612@gmail.com' target="_blank" rel="noopener noreferrer">pallavijainy0612@gmail.com</Link></Text>
            </div>
        </div>
        <Box >
        <Heading fontSize={"20px"}> 2022 © Pallavi Jain </Heading>
        </Box>
    </div>
  )
}

export default Footer