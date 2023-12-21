"use client"

import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  VStack,
  HStack,
  Heading,
  Checkbox,
  Grid,
  Hide,
  Show,
  useColorModeValue,
  Skeleton,
  useToast,
} from '@chakra-ui/react';
import Image from 'next/image';
import Timer from '../../components/Timer';
import peacefulIcon from '../../../public/PeacefulIcon.png';
import hungryIcon from '../../../public/HungryIcon.png';
import frenzyIcon from '../../../public/FrenzyIcon.png';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { useState } from 'react';

export default function Staking() {
  const epoch = useAppSelector((state) => state.epochNum);
  const epochTime = useAppSelector((state) => state.lastEpochTime);
  const address = useAppSelector((state) => state.account.address)
  const balance = useAppSelector((state) => state.balance)
  const claimable = useAppSelector((state) => state.claimable);
  const riverSupply = useAppSelector((state) => state.river);
  const connected = useAppSelector((state) => state.connected);
  const nfts = useAppSelector((state) => state.nfts);
  const approvedNFT = useAppSelector((state) => state.approvedNFT);
  const peaceful = useAppSelector((state) => state.peacefulStaked);
  const hungry = useAppSelector((state) => state.hungryStaked);
  const frenzy = useAppSelector((state) => state.frenzyStaked);
  const peacefulNum = useAppSelector((state) => state.peacefulNum);
  const hungryNum = useAppSelector((state) => state.hungryNum);
  const frenzyNum = useAppSelector((state) => state.frenzyNum);

  const toast = useToast();
  const dispatch = useAppDispatch();

  const [nftBool, setNftBool] = useState<boolean[]>([]);
  const [peacefulBool, setPeacefulBool] = useState<boolean[]>([]);
  const [hungryBool, setHungryBool] = useState<boolean[]>([]);
  const [frenzyBool, setFrenzyBool] = useState<boolean[]>([]);

  return (
    <Stack
      overflowY='hidden'
      align='center'
      justify='center'
      p={4}
      gap='1rem'
      minH={{md: '620px'}}
      m='auto'
      direction='column'
      >
      <Grid
        w='calc(100vw - 40px)'
        maxW='1200px'
        templateColumns={{sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr', lg:'1fr 1fr 1fr 1fr', xl: '1fr 1fr 1fr 1fr'}}
        gap='1rem'
        overflow='hidden'
        pb='10px'
        >
        <VStack
          align='center'
          justify='space-around'
          w='100%'
          boxShadow={'md'}
          borderRadius='lg'
          spacing={0}
          p='0.5rem'
          bg={useColorModeValue('rgb(240,240,240)', 'blackAlpha.100')}
          >
          <Heading 
            as='h3'
            size='lg'
            >
            Current Epoch
          </Heading>
          <Skeleton h='20px' w='90%' fadeDuration={1} isLoaded={connected}
          > 
            <Text
              fontSize='lg'
              fontWeight='medium'
              align='center'>
              {epoch}
            </Text>
          </Skeleton>
          <Heading 
            as='h3'
            size='lg'
            >
            Next Epoch
          </Heading>
          <Skeleton h='30px' w='90%' fadeDuration={1} isLoaded={connected}
          >
              <Timer time={epochTime} />
          </Skeleton>
        </VStack>
        <Stack 
          align='center'
          justify='space-around'
          w='100%'
          boxShadow={'md'}
          borderRadius='lg'
          spacing={0}
          p='0.5rem'
          bg={useColorModeValue('rgb(240,240,240)', 'blackAlpha.100')}
          
          >
          <Heading
            as='h3'
            size='lg'>
            Balance
          </Heading>
          <Skeleton h='20px' w='90%' fadeDuration={1} isLoaded={connected}
          >
            <Text
              fontSize='lg'
              fontWeight='medium'
              align='center'>
              {(balance / (10 ** 18)).toFixed(2)} $FISH
            </Text>
          </Skeleton>
          <Heading 
            as='h3'
            size='lg'
            >
            Claim Rewards
          </Heading>
          <HStack align='center' justify='space-between'>
            <Skeleton h='24px' w='100%' fadeDuration={1} isLoaded={connected}
            >
              <Text 
                fontSize='lg'
                fontWeight='medium'
                align='center'
                >
                {claimable} $FISH
              </Text >
            </Skeleton>
            <Button 
              h='30px'
              variant={'outline'}
              boxShadow={'md'}
              disabled={!connected || claimable <= 0}
              // onClick={() => claimRewards()}
              >
              Claim
            </Button>
          </HStack>
        </Stack>
        <VStack
          align='center'
          justify='space-around'
          w='100%'
          minH='150px'
          boxShadow={'md'}
          borderRadius='lg'
          spacing={0}
          p='0.5rem'
          bg={useColorModeValue('rgb(240,240,240)', 'blackAlpha.100')}
          >
          <Heading 
            as='h3'
            size='lg'
            >
            River Supply
          </Heading>
          <Box
            w='95%'
            h='25px'
            style={{ borderRadius: '7px'}}
            border='solid 1px rgb(60,60,60)'
            boxShadow='md'>
            <Stack  
              w={String(riverSupply / 271828 * 100) + '%'}
              h='100%'
              borderLeftRadius='7px'
              bg={riverSupply / 271828 * 100 > 80 ? 'green.200' : riverSupply / 271828 * 100 > 45 ? 'yellow.200' : 'red.200'}
              justify='center'
              align='center'>
              <Text
                fontSize='lg'
                fontWeight='600'
                as='i'
                >
                {riverSupply}
              </Text>
            </Stack>
          </Box>
          <Text align='center' color={useColorModeValue('gray.700', 'gray.200')} fontSize='sm'>
            The river supply increases by 2x every epoch. Carrying Capacity is 271828 Fish.
          </Text>
        </VStack>
        
        <Stack 
          align='center'
          justify='space-around'
          w='100%'
          boxShadow='md'
          borderRadius='lg'
          spacing={0}
          p='0.5rem'
          bg={useColorModeValue('rgb(240,240,240)', 'blackAlpha.100')}
          >
          <Heading
            as='h3'
            size='lg'>
            Bears Staked
          </Heading>
          <Flex
            justify='space-around'
            align='center'
            w='100%'
            >
            <Image src={peacefulIcon} alt='p-pic' />
            <VStack w='70px' align='start'>
              <Text
                fontSize='md'>
                Peaceful
              </Text>
              <Skeleton h='20px' w='100%' fadeDuration={1} isLoaded={connected}
              >
                <Text align='center'
                  fontWeight='medium'>
                  {peacefulNum}
                </Text>
              </Skeleton>
            </VStack>
          </Flex>
          <Flex
            justify='space-around'
            align='center'
            w='100%'
            >
            <Image src={hungryIcon} alt='p-pic' />
            <VStack w='70px' align='start'>
              <Text
                fontSize='md'>
                Hungry
              </Text>
              <Skeleton h='20px' w='100%' fadeDuration={1} isLoaded={connected}
              >
                <Text align='center' fontWeight='medium'>
                  {hungryNum}
                </Text>
              </Skeleton>
            </VStack>
          </Flex>
          <Flex
            justify='space-around'
            align='center'
            w='100%'
            >
            <Image src={frenzyIcon} alt='p-pic' />
            <VStack w='70px' align='start'>
              <Text fontSize='md'>
                Frenzy
              </Text>
              <Skeleton h='20px' w='100%' fadeDuration={1} isLoaded={connected}
              >
                <Text align='center'
                  fontWeight='medium'>
                  {frenzyNum}
                </Text>
              </Skeleton>
            </VStack>
          </Flex>
        </Stack>
      </Grid>
      <Box
        w='calc(100vw - 40px)'
        maxW='1200px' 
        minH='730px'
        h={{base: '1057px', sm: '787px'}}
        borderRadius='lg'
        p='0.5rem 1rem'
        bg={useColorModeValue('rgb(240,240,240)', 'blackAlpha.100')}
        boxShadow={'md'}
        >
        <VStack 
          align='center'
          minH='600px'
          h='100%'
          maxH='700px'
          spacing='1rem'
          >
          <Flex 
            justify='space-between'  
            w='100%' 
            align='center'>
            <Flex gap='5px' align='center'>
              <Heading as='h5'>
                Bears Unstaked
              </Heading>
              <Hide below='sm'> 
                <Checkbox 
                  // onChange={(e) => selectAllUnstaked(e.target.checked)} 
                  iconColor='white' 
                  colorScheme={'blue'} 
                  iconSize='2rem'
                >
                  Select All
                </Checkbox>
              </Hide>
            </Flex>
            <Hide above='sm'>
              <Checkbox 
              // onChange={(e) => selectAllUnstaked(e.target.checked)} 
              iconColor='white' colorScheme={'blue'} iconSize='2rem'>
                All
              </Checkbox>
            </Hide>
            <Flex gap='5px' align='center'>
              <Hide below='sm'>
                <VStack>          
                  <Text fontWeight='400'>
                    Stake:
                  </Text>
                </VStack>
              </Hide>
             
              {approvedNFT ? 
                <Grid templateColumns={{base: '1fr' ,sm: '1fr 1fr ', md: '1fr 1fr 1fr'}}
                >
                  <Button 
                    h='30px'
                    variant={'outline'}
                    boxShadow={'md'}
                    disabled={!connected}
                    // onClick={() => stakeSelected(0)}
                    >
                    Peaceful
                  </Button>
                  <Button 
                    h='30px'
                    variant={'outline'}
                    boxShadow={'md'}
                    disabled={!connected}
                    // onClick={() => stakeSelected(1)}
                    >
                    Hungry
                  </Button>
                  <Button 
                    h='30px'
                    variant={'outline'}
                    boxShadow={'md'}
                    disabled={!connected}
                    // onClick={() => stakeSelected(2)}
                    >
                    Frenzy
                  </Button>
                </Grid>

                :

                <Button 
                  h='30px'
                  variant={'outline'}
                  boxShadow={'md'}
                  disabled={!connected}
                  // onClick={() => approveNFT()}
                  >
                  Approve Staking
                </Button>
              }
            </Flex>
          </Flex>
          <HStack p={2} spacing='10px' bg={useColorModeValue('white', 'gray.800')} style={{ borderRadius: '7px'}} boxShadow='md' w='100%' minH='140px' overflowX='auto' overflowY='hidden'>
            {/* Map through the list of unstaked NFTs */}
            {nftBool.map((bool:boolean, index:number) => 
              <Stack 
                key={index} 
                // onClick={() => clickNftUnstaked(index)}
                cursor='pointer' w='100px' minW='100px' border='solid 1px rgb(240,240,240)' 
                // bg={bool ? backgroundSelected : 'none' }
                 h='115px' p='5px 10px' style={{ borderRadius: '7px'}} justify='start' align='left' spacing='5px'>
                <Image style={{ borderRadius: '7px'}} src={`https://ipfs.io/ipfs/${process.env.NEXT_PUBLIC_NFT_URI}/${nfts[index]}.png`} alt='id-pic' loading='lazy' />
                <Text fontWeight={'bold'} >#{nfts[index]}</Text>
              </Stack>
            )}
          </HStack>
          <Hide below='sm'>
            <HStack w='100%' justify='space-between' h={{sm: 'calc(100% - 250px)', md: 'calc(100% - 220px)'}}
            >
              <VStack w={{md: '160px', lg: '280px'}} h='100%'>
                <HStack w='100%' justify='space-between' align='baseline'>
                  <Heading size='lg'>Peaceful</Heading>
                  <Checkbox
                  //  onChange={(e) => selectAllPeaceful(e.target.checked)}
                             iconColor='white' colorScheme={'blue'} iconSize='2rem'>
                    All
                  </Checkbox>
                </HStack>
                <HStack justify='space-between' w='100%'>
                  <Text>Switch:</Text>
                  <Stack direction={{base: 'column', lg: 'row'}}>
                    <Button 
                      h='30px'
                      variant={'outline'}
                      
                      boxShadow={'md'}
                      disabled={!connected}
                      
                      // onClick={() => changePoolSelected(0, 1)}
                    >
                      Hungry
                    </Button>
                    <Button 
                      h='30px'
                      variant={'outline'}
                      
                      boxShadow={'md'}
                      disabled={!connected}
                      
                      // onClick={() => changePoolSelected(0, 2)}
                    >
                      Frenzy
                    </Button>
                  </Stack>
                </HStack>
                <Grid justifyItems='center' templateColumns={{ lg: '1fr 1fr'}} p='1rem 0 0.5rem 0.5rem' bg={useColorModeValue('white', 'gray.800')}  style={{ borderRadius: '7px'}} boxShadow='md' w='100%' h='400px' overflowY='auto'>
                  {peacefulBool.map((bool:boolean, index:number) => 
                    <Stack key={index + 15000} 
                    // onClick={() => clickNftPeaceful(index)} 
                    cursor='pointer' w='100px' minW='100px' border='solid 1px rgb(240,240,240)' 
                            // bg={bool ? backgroundSelected : 'none' }
                             h='115px'  p='5px 10px' style={{ borderRadius: '7px'}} justify='start' align='left' spacing='5px'>
                      <Image style={{ borderRadius: '7px'}} width={80} src={`https://joepegs.mypinata.cloud/ipfs/${process.env.NEXT_PUBLIC_NFT_URI}/${peaceful[index]}.png`} alt='id-pic' loading='lazy' />
                      <Text fontWeight={'bold'} >#{peaceful[index]}</Text>
                    </Stack>
                  )}
                </Grid>
              </VStack>
              <VStack w={{md: '160px', lg: '280px'}} h='100%'>
                <HStack w='100%' justify='space-between' align='baseline'>
                  <Heading size='lg'>Hungry</Heading>
                  <Checkbox 
                  // onChange={(e) => selectAllHungry(e.target.checked)}
                          iconColor='white' colorScheme={'blue'} iconSize='2rem'>
                    All
                  </Checkbox>
                  
                </HStack>
                <HStack justify='space-between' w='100%'>
                  <Text>Switch:</Text>
                  <Stack direction={{base: 'column', lg: 'row'}}>
                    <Button 
                      h='30px'
                      variant={'outline'}
                      
                      boxShadow={'md'}
                      disabled={!connected}
                      
                      // onClick={() => changePoolSelected(1, 0)}
                      >
                      Peaceful
                    </Button>
                    <Button 
                      h='30px'
                      variant={'outline'}
                      
                      boxShadow={'md'}
                      disabled={!connected}
                      
                      // onClick={() => changePoolSelected(1, 2)}
                      >
                      Frenzy
                    </Button>
                  </Stack>
                </HStack>
                <Grid justifyItems='center' templateColumns={{lg: '1fr 1fr'}} p='1rem 0 0.5rem 0.5rem' bg={useColorModeValue('white', 'gray.800')}  style={{ borderRadius: '7px'}} boxShadow='md' w='100%' h='400px' overflowY='auto'>
                  {hungryBool.map((bool:boolean, index:number) => 
                    <Stack key={index + 30000}
                      // onClick={() => clickNftHungry(index)}
                       cursor='pointer' w='100px' minW='100px' border='solid 1px rgb(240,240,240)' 
                          // bg={bool ? backgroundSelected : 'none' }
                           h='115px' p='5px 10px' style={{ borderRadius: '7px'}} justify='start' align='left' spacing='5px'>
                      <Image style={{ borderRadius: '7px'}} width={80} src={`https://joepegs.mypinata.cloud/ipfs/${process.env.NEXT_PUBLIC_NFT_URI}/${hungry[index]}.png`} alt='id-pic' loading='lazy' />
                      <Text fontWeight={'bold'} >#{hungry[index]}</Text>
                    </Stack>
                  )}
                </Grid>
              </VStack>
              <VStack w={{md: '160px', lg: '280px'}} h='100%'>
                <HStack w='100%' justify='space-between' align='baseline'>
                  <Heading size='lg'>Frenzy</Heading>
                  <Checkbox 
                  // onChange={(e) => selectAllFrenzy(e.target.checked)}

                           iconColor='white' colorScheme={'blue'} iconSize='2rem'>
                    All
                  </Checkbox>
                </HStack>
                <HStack justify='space-between' w='100%'>
                  <Text>Switch:</Text>
                  <Stack direction={{base: 'column', lg: 'row'}}>
                    <Button 
                      h='30px'
                      variant={'outline'}
                      
                      boxShadow={'md'}
                      disabled={!connected}
                      
                      // onClick={() => changePoolSelected(2,0)}
                      >
                      Peaceful
                    </Button>
                    <Button 
                      h='30px'
                      variant={'outline'}
                      
                      boxShadow={'md'}
                      disabled={!connected}
                      
                      // onClick={() => changePoolSelected(2, 1)}
                      >
                      Hungry
                    </Button>
                  </Stack>
                </HStack>
                <Grid justifyItems='center' templateColumns={{ lg: '1fr 1fr'}}  p='1rem 0 0.5rem 0.5rem' bg={useColorModeValue('white', 'gray.800')}  style={{ borderRadius: '7px'}} boxShadow='md' w='100%'  h='400px' overflowY='auto'>
                  {frenzyBool.map((bool:boolean, index:number) => 
                    <Stack key={index + 45000}
                    //  onClick={() => clickNftFrenzy(index)}
                     cursor='pointer' w='100px' minW='100px' border='solid 1px rgb(240,240,240)' 
                          // bg={bool ? backgroundSelected : 'none' }
                           maxH='115px' h='115px' p='5px 10px' style={{ borderRadius: '7px'}} justify='start' align='left' spacing='5px'>
                      <Image style={{ borderRadius: '7px'}} width={80} src={`https://joepegs.mypinata.cloud/ipfs/${process.env.NEXT_PUBLIC_NFT_URI}/${frenzy[index]}.png`} alt='id-pic' loading='lazy' />
                      <Text fontWeight={'bold'} >#{frenzy[index]}</Text>
                    </Stack>
                  )}
                </Grid>
              </VStack>
            </HStack>
            <HStack align='space-between' justify='space-around' w='100%'>
              <Button 
                h='40px'
                variant={'outline'}
                
                boxShadow={'md'}
                disabled={!connected}
                
                // onClick={() => unstakeAll()}
              >
                Claim and Unstake All
              </Button>
              <Button
                h='40px'
                variant={'outline'}
                
                boxShadow={'md'}
                disabled={!connected}
                
                // onClick={() => runUnstakeSelected()}
              >
                Claim and Unstake Selected
              </Button>
            </HStack> 
          </Hide>
          <Show below='sm'>
            <Flex w='100%' align='center' justify='space-between'>
              <Heading as='h2'>Peaceful</Heading>
              <Checkbox 
              // onChange={(e) => selectAllPeaceful(e.target.checked)}
                       iconColor='white' colorScheme={'blue'} iconSize='2rem'>
                All
              </Checkbox>
              <Flex gap='5px' align='center'>
                <Stack direction={{base: 'column', md: 'row'}}
                >
                  <Button 
                    h='30px'
                    variant={'outline'}
                    
                    boxShadow={'md'}
                    disabled={!connected}
                    
                    // onClick={() => changePoolSelected(0, 1)}
                    >
                    Hungry
                  </Button>
                  <Button 
                    h='30px'
                    variant={'outline'}
                    
                    boxShadow={'md'}
                    disabled={!connected}
                    
                    // onClick={() => changePoolSelected(0, 2)}
                    >
                    Frenzy
                  </Button>
                </Stack>
              </Flex>
            </Flex>
            <HStack p={2} spacing='10px' bg={useColorModeValue('white', 'gray.800')}  style={{ borderRadius: '7px'}} boxShadow='md' w='100%' minH='140px' overflowX='auto' overflowY='hidden'>
              {peacefulBool.map((bool:boolean, index:number) => 
                <Stack key={index + 15000} 
                // onClick={() => clickNftPeaceful(index)}
                 cursor='pointer' w='100px' minW='100px' border='solid 1px rgb(240,240,240)' 
                        // bg={bool ? backgroundSelected : 'none' }
                         h='115px' p='5px 10px' style={{ borderRadius: '7px'}} justify='start' align='left' spacing='5px'>
                  <Image style={{ borderRadius: '7px'}} width={80} src={`https://joepegs.mypinata.cloud/ipfs/${process.env.NEXT_PUBLIC_NFT_URI}/${peaceful[index]}.png`} alt='id-pic' loading='lazy' />
                  <Text fontWeight={'bold'} >#{peaceful[index]}</Text>
                </Stack>
              )}
            </HStack>
            <Flex w='100%' align='center' justify='space-between'>
              <Heading as='h2'>Hungry</Heading>
              <Checkbox 
              // onChange={(e) => selectAllHungry(e.target.checked)}
                       iconColor='white' colorScheme={'blue'} iconSize='2rem'>
                All
              </Checkbox>
              <Flex gap='5px' align='center'>
                <Stack direction={{base: 'column', md: 'row'}}
                >
                  <Button 
                    h='30px'
                    variant={'outline'}
                    
                    boxShadow={'md'}
                    disabled={!connected}
                    
                    // onClick={() => changePoolSelected(1, 0)}
                    >
                    Peaceful
                  </Button>
                  <Button 
                    h='30px'
                    variant={'outline'}
                    
                    boxShadow={'md'}
                    disabled={!connected}
                    
                    // onClick={() => changePoolSelected(1, 2)}
                    >
                    Frenzy
                  </Button>
                </Stack>
              </Flex>
            </Flex>
            <HStack p={2} spacing='10px' bg={useColorModeValue('white', 'gray.800')}  style={{ borderRadius: '7px'}} boxShadow='md' w='100%' minH='140px' overflowX='auto' overflowY='hidden'>
              {hungryBool.map((bool:boolean, index:number) => 
                <Stack key={index + 30000} 
                // onClick={() => clickNftHungry(index)}
                 cursor='pointer' w='100px' minW='100px' border='solid 1px rgb(240,240,240)' 
                        // bg={bool ? backgroundSelected : 'none' }
                         h='115px' p='5px 10px' style={{ borderRadius: '7px'}} justify='start' align='left' spacing='5px'>
                  <Image style={{ borderRadius: '7px'}} width={80} src={`https://joepegs.mypinata.cloud/ipfs/${process.env.NEXT_PUBLIC_NFT_URI}/${hungry[index]}.png`} alt='id-pic' loading='lazy' />
                  <Text fontWeight={'bold'} >#{hungry[index]}</Text>
                </Stack>
              )}
            </HStack>
            <Flex w='100%' align='center' justify='space-between'>
              <Heading as='h2'>Frenzy</Heading>
              <Checkbox 
              // onChange={(e) => selectAllFrenzy(e.target.checked)}
                        iconColor='white' colorScheme={'blue'} iconSize='2rem'>
                All
              </Checkbox>
              <Flex gap='5px' align='center'>
                <Stack direction={{base: 'column', md: 'row'}}
                >
                  <Button 
                    h='30px'
                    variant={'outline'}
                    
                    boxShadow={'md'}
                    disabled={!connected}
                    
                    // onClick={() => changePoolSelected(2, 0)}
                    >
                    Peaceful
                  </Button>
                  <Button 
                    h='30px'
                    variant={'outline'}
                    boxShadow={'md'}
                    disabled={!connected}
                    // onClick={() => changePoolSelected(2, 1)}
                    >
                    Hungry
                  </Button>
                </Stack>
              </Flex>
            </Flex>
            <HStack p={2} spacing='10px' bg={useColorModeValue('white', 'gray.800')}  style={{ borderRadius: '7px'}} boxShadow='md' w='100%' minH='140px' overflowX='auto' overflowY='hidden'>
              {frenzyBool.map((bool:boolean, index:number) => 
                <Stack key={index + 45000}
                //  onClick={() => clickNftFrenzy(index)} 
                 cursor='pointer' w='100px' minW='100px' border='solid 1px rgb(240,240,240)' 
                        // bg={bool ? backgroundSelected : 'none' }
                         h='115px' p='5px 10px' style={{ borderRadius: '7px'}} justify='start' align='left' spacing='5px'>
                  <Image style={{ borderRadius: '7px'}} width={80} src={`https://joepegs.mypinata.cloud/ipfs/${process.env.NEXT_PUBLIC_NFT_URI}/${frenzy[index]}.png`} alt='id-pic' loading='lazy' />
                  <Text fontWeight={'bold'} >#{frenzy[index]}</Text>
                </Stack>
              )}
            </HStack>
            <VStack align='space-between' justify='space-around' w='100%'>
              <Button 
                h='30px'
                variant={'outline'}
                boxShadow={'md'}
                disabled={!connected}
                // onClick={() => unstakeAll()}
              >
                Claim and Unstake All
              </Button>
              <Button
                h='30px'
                variant={'outline'}
                boxShadow={'md'}
                disabled={!connected}
                // onClick={() => runUnstakeSelected()}
              >
                Claim and Unstake Selected
              </Button>
            </VStack>  
          </Show>
        </VStack> 
      </Box>     
    </Stack>
  )
}
