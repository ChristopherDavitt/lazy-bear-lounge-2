"use client"

import {
  Flex,
  IconButton,
  Button,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Box,
} from '@chakra-ui/react';
import logo from '../../public/DiscordIcon.png'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Link from 'next/link';
import Image from 'next/image';
import ConnectButton from './ConnectButton';
import { Suspense } from 'react';
import { usePathname } from 'next/navigation';
import useIsMobile from './useIsMobile';
import { HamburgerIcon } from '@chakra-ui/icons'
import { FaDiscord, FaTwitter, FaGithub } from 'react-icons/fa'

function HamburgerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <IconButton aria-label="open menu" icon={<HamburgerIcon />} onClick={onOpen} />
      <Modal size="full" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody display="flex" alignItems="center" justifyContent="center" flexDirection="column">
            <Stack textAlign="center" gap={4}>
              <Link
                onClick={onClose}
                href='/'
              >
                Home
              </Link>
              <Link
                onClick={onClose}
                href='/staking'
              >
                Staking
              </Link>
              <Link
                onClick={onClose}
                href='/mint'
              >
                Mint
              </Link>
              <Link
                onClick={onClose}
                href='https://lazybearriver.gitbook.io/docs/'
                >
                Docs
              </Link>
            </Stack>
            <Flex gap={4} mt={4} align="center" justify="center">
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
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default function Navbar() {
  const path = usePathname();
  const isMobile = useIsMobile();
  console.log(path)
  return (
    <header style={{ borderBottom: '1px solid', borderColor: 'rgb(200, 200, 200)' }}>
      <Flex
        margin="0 auto"
        paddingX={2}
        maxWidth="1400px"
        gap='1rem'
        align='center'
        justify='space-between'
      >
          <Flex
            align='center'
          >
            <Image width={80} src={logo} alt='logo' />
            {!isMobile ?
              <>
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
              </> 
            : null}
          </Flex>
          <Flex
            gap='1rem'
            align='center'
          >
            <ColorModeSwitcher />
            <Suspense fallback={<Button isLoading colorScheme="blue"></Button>}>
              <ConnectButton />
            </Suspense>
            {isMobile ? <HamburgerMenu /> : null}
          </Flex>
        </Flex>
      </header>
  )
}