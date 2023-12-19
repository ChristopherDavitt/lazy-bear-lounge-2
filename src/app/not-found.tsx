"use client"
import { Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import roboBear from '../../public/RoboBear.png';
import Image from 'next/image';

export default function ErrorPage() {
  const size = useBreakpointValue({xsm: 200 , md: 400 })
  return (
    <Stack align='center' p={4} direction={{xsm: 'column-reverse' , md: 'row'}} w='100vw'>
        <Stack justify='center' align='left' gap='1rem'>
           <Heading size='2xl'>
            404 Error
            </Heading>
            <Text color='rgb(160,160,160)'>
                Uh oh... Something went wrong
            </Text> 
            <Text color='rgb(160,160,160)'>
                Use the Nav Bar above to redirect you to one of our pages
            </Text>
        </Stack>
        <Image width={size} height={size} src={roboBear} alt='roboBear' />
    </Stack>
  )
}
