// This is a static page mocking an "About Us" section for our fake user data
import { Stack, Flex, Box, Text} from '@chakra-ui/layout';

import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';

export default function AboutPage() {
  
  return (
    <Stack>          
            <Flex direction={"row"}          
            wrap="wrap"           
              p="20" 
                alignSelf="flex-center">                
                <Box alignSelf="center" overflowY="auto" mx={10}  my={16}  >
                    <Text fontSize="3xl"  >Welcome to my portfolio!</Text>
                    <Text fontSize="5xl" fontWeight="bold" bgGradient="linear(to-r, purple.400, blue.500, purple.600)" bgClip='text' >Sakshi Arora</Text>
                    <Text width="100%" >
                    I am passionate and dedicated Full Stack Developer with a relentless pursuit of crafting innovative web solutions.
                      </Text>
                    <Button mt={8} colorScheme="blue" onClick={() =>
                        <a href='/contact'></a>
                    }>Contact me</Button>

                </Box>
                <Image alignSelf="center" mx={10} my={16} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src='' />
                
            </Flex>

        </Stack>
  );
}
