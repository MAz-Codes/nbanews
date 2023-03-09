import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Card, Stack, Image, CardBody, CardFooter, Button, Heading , Text, Grid,GridItem, Divider, useBreakpointValue} from '@chakra-ui/react'
import axios from 'axios'

function DataFetching() {
    const [articles, setArticles] = useState([])
    

    useEffect(() => {
        const fetchArticles = async () => {
          const apiKey = "1934b2c0fbe6483fa57df759884e592d"
          const url = `https://newsapi.org/v2/everything?q=nba +basketball +ball -Men's -sneaker&language=en&apiKey=${apiKey}&sortBy=publishedAt`;

          try {
            const response = await axios.get(url);
            setArticles(response.data.articles);
          } catch (error) {
            console.error(error);
          }
        };
        fetchArticles();
    }, []);

      return (
        <Box justifyContent={"center"} alignItems="center" h="fit-content">

          <Stack  bg="linear-gradient(to bottom, #c31432, #FFFFFF00)" p="3vh" textColor="gray.700" >
            <Heading fontSize={{base:"xl", md:"2xl", lg:"3xl"}}>Welcome to NBANews</Heading>
            <Text fontSize={{base:"sm", md:"md", lg:"lg"}}>Your home for daily news and everything around the NBA.</Text>
          </Stack>
          <Heading fontSize={{base:"md", md:"xl", lg:"2xl"}} pt="6vh" px="6" textAlign="left" textColor="gray.700">What's happening today:</Heading>
          <Grid  py="6vh" px="4" w="100vw" alignItems="center" justifyContent="center"
                templateColumns={{base: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)", lg:"repeat(4, 1fr)"}}
                gap="2vw">
            {articles.map(article => (
                <div key={article.url}>
                  <Card overflow="auto"borderRadius='lg'>
                      <Image
                      objectFit="cover"
                        maxH={{base:"auto",md:"20vh", lg:"15vh", xl:"20vh"}}
                        src={article.urlToImage}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                      />
                      <Stack mt='6' spacing='3' p="6">
                        <Heading noOfLines={[2, 2, 3]} size={{base: "sm",md:'md'}}>{article.title}</Heading>
                        <Text noOfLines={[2, 2, 3]} size={{base: "xs",md:'md'}}>{article.description} </Text>
                      </Stack>
                    <CardFooter justifyContent={"center"}>
                        <Button onClick={()=> window.open(article.url,"_blank")} size="xs" variant='solid' colorScheme="gray">
                          See more
                        </Button>
                    </CardFooter>
                  </Card>
                </div>
            ))}
      </Grid>
        </Box>
      )
    }

export default DataFetching