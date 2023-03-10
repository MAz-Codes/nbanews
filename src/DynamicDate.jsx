import React, { useState, useEffect } from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

function DynamicDate() {

    const [currentDate, setCurrentDate] = useState(new Date())
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentDate(new Date());
        }, 43200000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, []);
  return (
    <Box textAlign={"left"} py="6vh"  px="6">
        <Heading fontSize={{base:"sm", md:"lg", lg:"2xl", xl:"4xl"}}>Today, {currentDate.toLocaleDateString(undefined, options)}</Heading>
        <Heading fontSize={{base:"sm", md:"lg", lg:"2xl", xl:"4xl"}}>See what's happening around the leauge:</Heading>
    </Box>
  )
}

export default DynamicDate