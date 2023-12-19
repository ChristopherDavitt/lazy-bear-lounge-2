"use client"

import React, { useState } from 'react';
import {
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Heading,
  Divider,
  HStack,
  Skeleton,
} from '@chakra-ui/react';
import {
  FaMinus,
  FaPlus,
} from 'react-icons/fa';
import Image from 'next/image';
import minterImg from '../../../public/Minter.png';
import MaxWidthSection from '@/components/MaxWidthSection';

export default function Minter() {

  const costAvax = 1;
  const maxAmount = 10;
  
  const [amount, setAmount] = useState(1);


  const addAmount = () => {
    if (amount < maxAmount) {
      setAmount(amount + 1);
    }
  }

  const subAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  }

  return (
    <MaxWidthSection>
      <Stack justify='center' align='center' p={4} minH='calc(80vh - 120px)'>
        <Stack justify='center' align={'center'} spacing={0}>
          <Heading>Pre-Sale</Heading>
          <Text fontSize='14px' align='center' color='text'>
            First 4000 Bears minted with Avax before the experiment begins
          </Text>
          <Text fontSize='14px' align='center' color='text'>
            1 AVAX per Lazy Bear
          </Text>
        </Stack>
        <Stack p={4} direction={{xsm: 'column-reverse', sm: 'column-reverse',md: 'row'}} justify='space-around' gap='2rem'>
          <Stack minW='300px' p={4} border='solid 1px rgb(240,240,240)' borderRadius='lg' >
            <Stack mb='2rem' gap='0.5rem'>
              <Stack justify='start' align='center' spacing={0}>
                <Heading size='md' >Mint NFT</Heading>
                <Skeleton h='20px' w='100%' fadeDuration={1}>
                  <Text size='sm' w='100%' color='gray.300' align='center'>0 / 4000</Text>
                </Skeleton>
              </Stack>
              <Flex align='center' justify='space-between'>
                <Heading  size='sm'>Balance</Heading>
                <Text>10 AVAX</Text>
              </Flex>
              <Divider />
              <Flex align='center' justify='space-between' gap='0.5rem'>
                <Heading size='sm'>Amount</Heading>
                <HStack spacing={1} align='center' justify='space-between'>
                  <IconButton size='sm' boxShadow='sm' 
                    borderRadius='lg' aria-label='add' 
                    icon={<FaPlus w={3} h={3} />} onClick={() => addAmount()} 
                  />
                  <Text>{amount}</Text>
                  <IconButton size='sm' boxShadow='sm' 
                    borderRadius='lg' aria-label='subtract' 
                    icon={<FaMinus w={3} h={3} />} onClick={() => subAmount()}
                  />
                </HStack>
                <Button onClick={()=>setAmount(maxAmount)}>Max</Button>
              </Flex>
              <Divider />
              <Flex justify='space-between'>
                <Heading size='sm'>Total</Heading>
                <Text>{costAvax * amount} AVAX</Text>
              </Flex>
              <Divider />
            </Stack>
            <Button mt='2rem'>
              Mint
            </Button>
            <Text  align='center' w='280px' color='text' fontSize='12px' pl='1rem' lineHeight='16px'>
              Contract is paused
            </Text>
          </Stack>
          <Stack>
            <Image width={300} height={300} src={minterImg} alt='gif' /> 
            <Text align='center' w='280px' color='text' fontSize='12px' pl='1rem' lineHeight='16px'>
              Mint and Stake your Bear on the river to earn the tasty reward of FISH 
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </MaxWidthSection>
    /* <Stack justify='center' align={'center'} spacing={0}>
        <Heading>$FISH Sale</Heading>
        <Text fontSize='14px' align='center' color='text'>
          Last 16,000 Bears minted with $FISH
        </Text>
        <Text fontSize='14px' align='center' color='text'>
          100 $FISH per Lazy Bear
        </Text>
      </Stack>
      <Stack p={4} direction={{xsm: 'column-reverse', sm: 'column-reverse',md: 'row'}} justify='space-around' gap='2rem'>
        <Stack minW='300px' p={4} border='solid 1px rgb(240,240,240)' borderRadius='lg' bg='white'>
          <Stack mb='2rem' gap='0.5rem'>
            <Stack justify='start' align='center' spacing={0}>
              <Heading size='md' color='rgb(50,50,50)' >Mint NFT</Heading>
              <Skeleton h='20px' w='100%' fadeDuration={1} isLoaded={connected}>
                <Text size='sm' w='100%' color='gray.300' align='center'>{supply} / 20000</Text>
              </Skeleton>
            </Stack>
            <Flex align='center' justify='space-between'>
              <Heading color='rgb(50,50,50)' size='sm'>Balance</Heading>
              <Text>{Math.trunc(balance / (10 ** 18))} $FISH</Text>
            </Flex>
            <Divider />
            <Flex align='center' justify='space-between' gap='0.5rem'>
              <Heading color='rgb(50,50,50)' size='sm'>Amount</Heading>
              <Flex align='center' justify='space-between'>
                <IconButton bg='white' size='sm' boxShadow='sm' 
                  _hover={{backgroundColor: 'rgb(250,250,250)'}} borderRadius='lg' aria-label='add' 
                  icon={<FaAdd w={3} h={3} />} onClick={() => addAmount()} 
                />
                <Text>{amount}</Text>
                <IconButton bg='white' size='sm' boxShadow='sm' 
                  _hover={{backgroundColor: 'rgb(250,250,250)'}} borderRadius='lg' aria-label='subtract' 
                  icon={<FaMinus w={3} h={3} />} onClick={() => subAmount()}
                />
              </Flex>
              <Button onClick={()=>setAmount(maxAmount)}>Max</Button>
            </Flex>
            <Divider />
            <Flex justify='space-between'>
              <Heading color='rgb(50,50,50)' size='sm'>Total</Heading>
              <Text>{costFish * amount} $FISH</Text>
            </Flex>
            <Divider />
          </Stack>
          {approvedFish < 10**23 ?
            
            <Button onClick={approveFish} disabled={!connected} mt='2rem'>
              Approve $FISH
            </Button>

            : 

            <Button onClick={() => mintFish(amount)} disabled={!connected || (costFish * amount) > (balance / (10 ** 18))} mt='2rem'>
              Mint
            </Button>
          
          }
          
          {!connected ?
            <Text  align='center' w='280px' color='text' fontSize='12px' pl='1rem' lineHeight='16px'>
              Connect Your Wallet to Mint
            </Text>

            :

            <Text  align='center' w='280px' color='text' fontSize='12px' pl='1rem' lineHeight='16px'>
              Mint {amount} Bears at {costFish * amount} AVAX
            </Text>
          }
        </Stack>
        <Stack>
          <Image w='300px' h='300px' bg='white' borderRadius='lg' src={minterImg} alt='gif' /> 
          <Text align='center' w='280px' color='text' fontSize='12px' pl='1rem' lineHeight='16px'>
            Mint and Stake your Bear on the river to earn the tasty reward of FISH 
          </Text>
        </Stack>
      </Stack>
      */
  )
}
