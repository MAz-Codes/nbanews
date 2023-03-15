import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Card, Stack, Image, CardBody, CardFooter, Button, Heading , Text, Grid,GridItem, Divider, useBreakpointValue} from '@chakra-ui/react'
import axios from 'axios'
import DynamicDate from './DynamicDate'

function DataFetching() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchArticles = async () => {
      const apiKey = "1934b2c0fbe6483fa57df759884e592d"
      const url = `https://newsapi.org/v2/everything?q=nba +basketball +ball -cuse -Men's -sneaker&language=en&apiKey=${apiKey}&sortBy=publishedAt`;

      try {
        const response = await axios.get(url);
        setArticles(response.data.articles);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <Box
    justifyContent={"center"}
    alignItems="center"
    h="fit-content">
      <Grid
      templateColumns={{base: "repeat(1, 1fr)", md:"repeat(6,1fr)"}}
      textColor="white">
        <GridItem bg="#dc0800"  colSpan="1" >
          <Heading fontFamily="monospace"  px="6" fontSize={{base:"lg", md:"3xl", lg:"4xl", xl:"5xl", "2xl":"8xl"}}>NBANews</Heading>
        </GridItem>
        <GridItem display="flex" alignItems="center"
            justifyContent="center" colSpan="5" bg="#2a2b2d">
          <Text fontFamily="monospace"  fontSize={{base:"xs", md:"md", lg:"lg", xl:"xl","2xl":"4xl"}}>Your home for daily news and updates around the NBA.</Text>
        </GridItem>
      </Grid>
      <DynamicDate/>
      <Grid  pb="6vh" px="4" w="100vw" alignItems="center" justifyContent="center"
            templateColumns={{base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)", lg:"repeat(4, 1fr)", xl:"repeat(4, 1fr)", "2xl":"repeat(6, 1fr)",}}
            gap="2vw">
        {articles.map(article => (
            <div key={article.url}>
              <Card borderRadius='lg'>
                  <Image
                  objectFit="cover"
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