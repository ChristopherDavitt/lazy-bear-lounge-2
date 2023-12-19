"use client"

import { FaDiscord, FaTwitter, FaGithub } from 'react-icons/fa'
import { Stack, Box, Grid,
        Text, Heading, VStack, 
        HStack, Button, Divider, 
        Flex,
        Accordion, AccordionItem,
        AccordionButton, AccordionPanel,
        AccordionIcon
        } from '@chakra-ui/react';

import hero from '../../public/43.png';
import stakingMethods from '../../public/stakingMethods.png';
import exponential from '../../public/exponential.png';
import allThree from '../../public/allThree.png';
import collect from '../../public/40.png';
import selectBear from '../../public/selectBear.png';
import win from '../../public/Wint.png';
import loss from '../../public/Losst.png';
import Link from 'next/link';
import Image from 'next/image';
import MaxWidthSection from '@/components/MaxWidthSection';

export default function Home() {

  const backgrounds = ['Blue', 'Purple', 'Red'];
  const backgroundStats = [60, 25, 15];
  const bearType = ['Grizzly', 'Brown', 'Black', 'Polar', 'Sea Bear', 'Zombie'];
  const bearTypeStats = [23, 23, 23, 15, 7.5, 7.5];
  const eye = ['Normal',   'Confused', 'Angry', 'Sleepy','Eyelashes','Glaring', 'Dazed', 'Zoned Out', 'Shades', 'Nerd Glasses',
               'Eye Patch', 'Third  Eye',  'Masquarade', 'VR', 'Lazer Eyes', '3D' ,'Exposed Skull', 'Destroyer' ];
  const eyeStats = [4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 2, 2, 1.5, 1.5, 1, 1, 1, 1, 1];
  const mouth = ['Smile', 'Frown', 'Pursed', 'Whistling', 'Smirk', 'In Awe', 'Open Mouth', 
                'Lips', 'Cig', 'E-Cig', 'Tongue Out', 'Pipe', 'Dead Fish', 'Scary' ];
  const mouthStats = [5, 5, 5, 4, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1];
  const hat = ['None', 'Honey Pot', 'Baseball Cap', 'Apple', 'Red Mohawk', 'Bow', 'Earing', 
                'Circus', 'Top Hat', 'Green Mohawk', 'Fire Fighter', 'Tiara', 'Chick',
                'Crown', 'Smoky Ranger', 'Pirate'];
  const hatStats = [10, 4, 4, 4, 4, 3, 3, 3, 2.5, 2, 2, 2, 1.5, 1.5, 1, 1, 1];
  const shirt = ['None', 'Blue Bandana', 'Red Bandana', 'Pearl Necklace', 'Gold Chain', 
                 'Fire Fighter', 'Fishing Vest', 'Jean Jacket', 'Tuxedo',
                 'Holiday Sweater', 'Jersey', 'Harpoon',];
  const shirtStats = [10, 8, 8, 4, 3.5, 3, 3, 3, 3, 2.5, 2, 1];

  return (
    <>
      <MaxWidthSection>
        <Stack m={4} minH='400px' justify='space-between' direction={{xsm:'column', sm: 'column',md: 'row-reverse', lg:'row-reverse', xl: 'row-reverse'}} p={4}>
            <VStack flex={1} gap='1.5rem' justify='center' align='start'>
                <Heading as='h1' size='3xl' >
                    Lazy Bear River
                </Heading>
                <Text color='text' size='md'>
                    Stake your bear on the river to compete for the tasty reward of FISH. Will you be able to work together
                    to solve the population problem, or face the perils of greed?
                </Text>
                <Flex justify='start' gap='1rem' w='100%'>
                    <Link href='/mint'>
                        <Button
                            colorScheme="blue"
                            h='45px'
                            size="lg"
                          >
                            Mint Your Bear
                        </Button>
                    </Link>
                    <Link href='/staking'>
                        <Button 
                            h='45px'
                            variant={'outline'}
                          >
                            Staking
                        </Button>
                    </Link>
                </Flex>
                <HStack w='100%' justify='left' gap='1rem' >
                    <Link 
                      href='https://twitter.com/LazyBearRiver'
                    >
                    <Box size={'32px'} as={FaTwitter} />
                    </Link>
                    <Link 
                      href='#'
                    >
                    <Box size={'32px'} as={FaDiscord} />
                    </Link>
                    <Link 
                      href='https://lazybearriver.gitbook.io/docs/'
                    >
                    <Box size={'32px'} as={FaGithub} />
                    </Link>
                </HStack>   
            </VStack>
            <Stack flex={1} justify="center" align="center">
              <Image width={500} style={{ objectFit: 'cover' }} src={hero} alt='hero-image'/>
            </Stack>
        </Stack>
      </MaxWidthSection>
      <MaxWidthSection>
        <Stack m='2rem 0' p={6}  align='center' justify='center' gap='2rem'>
            <VStack>
                <Heading as='h2' size='2xl'>
                    The River
                </Heading>
                <Divider w='300px' />
                <Text align='center' color='text' size='sm'>
                    In a changing ecosystem, how will you play?
                </Text>
            </VStack>
            <Grid m='1rem 0' templateColumns="1fr 1fr 1fr 1fr" gap='1rem'>
                <Stack p={4} align='center' justify='start'>
                    {/* <Icon  /> */}
                    <Image src={stakingMethods} alt='grid-pic' />
                    <Heading as="h3" size="lg">
                        Staking
                    </Heading>
                    <Text  textAlign="center" color='text' size='sm'>
                        Choose your own strategy on your quest for $FISH
                    </Text>
                </Stack>
                <Stack p={4} align='center' justify='start'>
                    {/* <Icon  /> */}
                    <Image src={collect} alt='grid-pic' />
                    <Heading as="h3" size="lg">
                        Collection
                    </Heading>
                    <Text textAlign="center" color='text' size='sm'>
                        Collectible bears with over 69 unique attributes
                    </Text>
                </Stack>
                <Stack p={4} align="center" justify='start'>
                    {/* <Icon  /> */}
                    <Image src={exponential} alt='grid-pic' />
                    <Heading as="h3" size="lg">
                        Supply
                    </Heading>
                    <Text textAlign="center" color='text' size='sm'>
                        $FISH supply that simulates natural population growth
                    </Text>
                </Stack>
                <Stack p={4} align="center" justify='start'>
                    {/* <Icon  /> */}
                    <Image src={allThree} alt='grid-pic' />
                    <Heading textAlign="center" as="h3" size="lg">
                        Game Theory
                    </Heading>
                    <Text textAlign="center" color='text' size='sm'>
                        Compete or work together to survive on The River
                    </Text>
                </Stack>
            </Grid>
        </Stack>
      </MaxWidthSection>
      <MaxWidthSection bg="bg">
        <Stack m='2rem 0' p={6} w='100%' align='center' justify='center' >
            <Heading as="h2" size="2xl">
                Bears
            </Heading>
            <Text color='text'>
                Over 200,000 unique bear options
            </Text>
            <Divider w='300px' />
            <Stack direction={{xsm: 'column', sm:'column', md:'row', lg: 'row'}} align='start' gap='2rem' w='100%' p={4}>
                <Box w='100%'>
                    <Image style={{ margin: 'auto', maxWidth: '400px' }} width={400} src={selectBear} alt='bear-customization' />
                </Box>
                <Box w='100%'>
                    <Accordion allowToggle>
                        <AccordionItem>
                            <AccordionButton h='50px'  >
                                <Box flex='1' textAlign='left'>
                                    <Heading fontWeight='medium' size='md'>Background</Heading>
                                </Box>
                                <Flex gap='0.7rem' align='center'>
                                    <Text>3</Text>
                                    <AccordionIcon /> 
                                </Flex>
                                
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Flex  w='100%' justify='space-between'>
                                    <Text fontWeight={'medium'}>Attribute</Text> 
                                    <Text fontWeight={'medium'}>Chance (%)</Text>
                                </Flex>
                                <Divider />
                                {backgrounds.map((type:string, index: number) => 
                                    <Flex key={index}  w='100%' justify='space-between'>
                                        <Text fontWeight={'light'}>{type}</Text> 
                                        <Text fontWeight={'light'}>{backgroundStats[index].toFixed(1)}%</Text>
                                    </Flex>
                                )}
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton h='50px'  >
                                <Box flex='1' textAlign='left'>
                                    <Heading fontWeight='medium' size='md'>Bear</Heading>
                                </Box>
                                <Flex gap='0.7rem' align='center'>
                                    <Text>6</Text>
                                    <AccordionIcon /> 
                                </Flex>
                                
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Flex  w='100%' justify='space-between'>
                                    <Text fontWeight={'medium'}>Attribute</Text> 
                                    <Text fontWeight={'medium'}>Chance (%)</Text>
                                </Flex>
                                <Divider />
                                {bearType.map((type:string, index: number) => 
                                    <Flex key={index + 7}  w='100%' justify='space-between'>
                                        <Text fontWeight={'light'}>{type}</Text> 
                                        <Text fontWeight={'light'}>{bearTypeStats[index].toFixed(1)}%</Text>
                                    </Flex>
                                )}
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton h='50px'  >
                                <Box flex='1' textAlign='left'>
                                    <Heading fontWeight='medium' size='md'>Eyes</Heading>
                                </Box>
                                <Flex gap='0.7rem' align='center'>
                                    <Text>{eye.length}</Text>
                                    <AccordionIcon /> 
                                </Flex>
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Flex  w='100%' justify='space-between'>
                                    <Text fontWeight={'medium'}>Attribute</Text> 
                                    <Text fontWeight={'medium'}>Chance (%)</Text>
                                </Flex>
                                <Divider />
                                {eye.map((type:string, index: number) => 
                                    <Flex key={index + 100}  w='100%' justify='space-between'>
                                        <Text fontWeight={'light'}>{type}</Text> 
                                        <Text fontWeight={'light'}>{(eyeStats[index]* 2).toFixed(1)}%</Text>
                                    </Flex>
                                )}
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton h='50px'  >
                                <Box flex='1' textAlign='left'>
                                    <Heading fontWeight='medium' size='md'>Mouth</Heading>
                                </Box>
                                <Flex gap='0.7rem' align='center'>
                                    <Text>{mouth.length}</Text>
                                    <AccordionIcon /> 
                                </Flex>
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Flex  w='100%' justify='space-between'>
                                    <Text fontWeight={'medium'}>Attribute</Text> 
                                    <Text fontWeight={'medium'}>Chance (%)</Text>
                                </Flex>
                                <Divider />
                                {mouth.map((type:string, index: number) => 
                                    <Flex key={index + 200}  w='100%' justify='space-between'>
                                        <Text fontWeight={'light'}>{type}</Text> 
                                        <Text fontWeight={'light'}>{(mouthStats[index]* 2).toFixed(1)}%</Text>
                                    </Flex>
                                )}
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton h='50px'  >
                                <Box flex='1' textAlign='left'>
                                    <Heading fontWeight='medium' size='md'>Hat</Heading>
                                </Box>
                                <Flex gap='0.7rem' align='center'>
                                    <Text>{hat.length}</Text>
                                    <AccordionIcon /> 
                                </Flex>
                                
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Flex  w='100%' justify='space-between'>
                                    <Text fontWeight={'medium'}>Attribute</Text> 
                                    <Text fontWeight={'medium'}>Chance (%)</Text>
                                </Flex>
                                <Divider />
                                {hat.map((type:string, index: number) => 
                                    <Flex key={index + 300}  w='100%' justify='space-between'>
                                        <Text fontWeight={'light'}>{type}</Text> 
                                        <Text fontWeight={'light'}>{(hatStats[index] * 2).toFixed(1)}%</Text>
                                    </Flex>
                                )}
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton h='50px'  >
                                <Box flex='1' textAlign='left'>
                                    <Heading fontWeight='medium' size='md'>Body</Heading>
                                </Box>
                                <Flex gap='0.7rem' align='center'>
                                    <Text>{shirt.length}</Text>
                                    <AccordionIcon /> 
                                </Flex>
                                
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Flex  w='100%' justify='space-between'>
                                    <Text fontWeight={'medium'}>Attribute</Text> 
                                    <Text fontWeight={'medium'}>Chance (%)</Text>
                                </Flex>
                                <Divider />
                                {shirt.map((type:string, index: number) => 
                                    <Flex  key={index + 400} w='100%' justify='space-between'>
                                        <Text fontWeight={'light'}>{type}</Text> 
                                        <Text fontWeight={'light'}>{(shirtStats[index] * 2).toFixed(1)}%</Text>
                                    </Flex>
                                )}
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Stack>
        </Stack>
      </MaxWidthSection>
      <MaxWidthSection>

        <Stack m='2rem 0' p={6} align='center' justify='center'>
            <Text fontWeight='bold' color='text'>
                1 $FISH = 1 $FISH
            </Text>
            <Text fontWeight='bold' color='text'>
                Bear Cost | 100 $FISH
            </Text>
            <HStack gap='1rem'>
                <Heading>Game</Heading>
                <Text color='text' >16,000 / 20,000 Bears</Text>
            </HStack>
            <Divider w='300px' />
            <Grid alignContent='space-around' w='100%' templateColumns={{xsm: '1fr', md: '1fr 1fr', lg: '1fr 1fr', xl: '1fr 1fr'}}>
                <Stack  p={4} align='center' justify='start'>
                    <Heading>
                        Win
                    </Heading>
                    <Text color='text' >Survive 69 Epochs</Text>
                    <Divider w='300px' />
                    <Image width={300} src={win} alt='grid-pic' />
                    <Divider w='300px' />
                    <Text color='text'  align='center' size='sm'>
                        Dont Deplete the River for 69 Epochs
                    </Text>
                </Stack>
                <Stack p={4} align='center' justify='start'>
                    <Heading>
                        Loss
                    </Heading>
                    <Text color='text' >Overfish The River</Text>
                    <Divider w='300px' />
                    <Image width={300} src={loss} alt='grid-pic' />
                    <Divider w='300px' />
                    <Text color='text'  align='center' size='sm'>
                        River goes empty before 69 Epochs
                    </Text>
                </Stack>
            </Grid>
        </Stack>
        <Stack p={6}>
             <HStack w='100%' justify='center' gap='1rem' >
                <Link 
                  href='https://twitter.com/LazyBearRiver'
                  >
                  <Box size={'32px'} as={FaTwitter} />
                </Link>
                <Link 
                  href='#'
                  >
                  <Box size={'32px'} as={FaDiscord} />
                </Link>
                <Link 
                  href='https://lazybearriver.gitbook.io/docs/'
                  >
                  <Box size={'32px'} as={FaGithub} />
                </Link>
            </HStack>    
        </Stack>  
      </MaxWidthSection>
    </>
  )
}
