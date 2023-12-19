"use client"

import {
  Flex,
  IconButton,
  Button,
} from '@chakra-ui/react';
import logo from '../../public/DiscordIcon.png'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Link from 'next/link';
import Image from 'next/image';
import ConnectButton from './ConnectButton';
import { Suspense } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const path = usePathname();
  console.log(path)
  return (
    <header style={{ borderBottom: '1px solid', borderColor: 'rgb(200, 200, 200)' }}>
      <Flex
        margin="0 auto"
        maxWidth="1400px"
        gap='1rem'
        align='center'
        justify='space-between'
        >
          <Flex
            align='center'
            >
            <Image width={80} src={logo} alt='logo' />
            <Button variant="ghost">
              <Link
                href='/'
                style={path === '/' ? { fontWeight: 'bold' } : {}}
              >
                Home
              </Link>
            </Button>
            <Button variant="ghost">
              <Link
                style={path === '/staking' ? { fontWeight: 'bold' } : {}}
                href='/staking'
              >
                Staking
              </Link>
            </Button>
            <Button variant="ghost">
              <Link
                style={path === '/mint' ? { fontWeight: 'bold' } : {}} 
                href='/mint'
              >
                Mint
              </Link>
            </Button>
            <Button variant="ghost">
              <Link
                href='https://lazybearriver.gitbook.io/docs/'
                >
                Docs
              </Link>
            </Button>
          </Flex>
          <Flex
            gap='1rem'
            align='center'
          >
            <ColorModeSwitcher />
            <Suspense fallback={<Button isLoading colorScheme="blue"></Button>}>
              <ConnectButton />
            </Suspense>
            <IconButton
              size={'md'}
              aria-label={'Open Menu'}
              display={{ sm: 'none' }}
            />
          </Flex>
        </Flex>
      </header>
  )
}