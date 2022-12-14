import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Aboutme = () => {
  return (
    <SimpleGrid
    columns={[1,1,2]}
      margin={"auto"}
   
    >
      <Box margin={"auto"}>
        <iframe
          title="background-3d"
          src="https://my.spline.design/awesomefolio-0c39efc3de701ba97be395cc128e4e2f/"
          frameBorder="0"
          height={"400px"}
         
        ></iframe>
      </Box>
      <Box >
        <Heading textDecoration={"underline"}>About Me</Heading>

        <Stack spacing={5} marginTop={3}>
          <Text >
            I got introduced to coding pretty late comparatively. It was always
            something I wanted to learn but having graduated with a Bachelor's
            degree in Business Administration it made sense to just continue on
            in that field. Hence the idea of learning to code just got pushed
            back.But when COVID hit, and the world came to a stop, I finally got
            the chance I wanted.
          </Text>
          <Text >
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
  );
};

export default Aboutme;
