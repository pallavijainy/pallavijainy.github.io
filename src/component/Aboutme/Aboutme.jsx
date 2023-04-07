import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import vdo from "./video1905609684-WuuHbgUH-unscreen (1).gif";

const Aboutme = () => {
  return (
    <div >
        <Heading textDecoration={"underline"} id="aboutme" >About Me</Heading>
        <SimpleGrid
    columns={[1,1,2]}
      margin={"auto"}
   
    >
   
      <Box margin={"auto"}  >
        {/* <iframe 
          title="background-3d"
          src={vdo}
          frameBorder="0"
          height={"400px"}
         
        ></iframe> */}
        <img src={vdo} alt=""  height={"400px"}/>
      </Box>
      <Box marginTop={10}>
       

        <Stack spacing={10} marginTop={5} mr={10}marginBottom={5}>
          <Text  fontSize={20} textAlign={{base:"center",sm:"center",md:"left"}}>
            I got introduced to coding pretty late comparatively. It was always
            something I wanted to learn but having graduated with a Bachelor's
            degree in Business Administration it made sense to just continue on
            in that field. Hence the idea of learning to code just got pushed
            back.But when COVID hit, and the world came to a stop, I finally got
            the chance I wanted.
          </Text>
          <Text fontSize={20} textAlign={{base:"center",sm:"center",md:"left"}}>
            I joined the coding bootcamp for Full Stack Web Development at Masai
            School and started learning. I learned all the basics and then
            started making my own websites. I worked on different collaborative
            projects with fellow batchmates and even learned Data Structures and
            Algorithms. Everything you see in the projects section is what I've
            build/worked on from scratch in the past 8 months.
          </Text>
        </Stack>
      </Box>
    </SimpleGrid>
    </div>
    
  );
};

export default Aboutme;
