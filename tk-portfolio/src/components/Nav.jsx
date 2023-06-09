import React from 'react'
import { Box, Flex, HStack, List, ListItem } from '@chakra-ui/react';

export default function Nav({ currentPage, handlePageChange }) {
  return (
    <Box>
      <HStack>
        <ul>
            <li>
                <a href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                About Me
                </a>
            </li>
            <li>
                <a href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                Portfolio
                </a>
            </li>
             <li>
                <a href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                Contact Me
                </a>
            </li>
        </ul>
      </HStack>
    </Box>
  )
}
