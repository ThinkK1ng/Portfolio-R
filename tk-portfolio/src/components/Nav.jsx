import React from 'react'
import { Box, HStack, List, ListItem } from '@chakra-ui/react';

export default function Nav({ currentPage, handlePageChange }) {
  return (
    <Box>
      <HStack>
        <List>
            <ListItem>
                <a href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                About Me
                </a>
            </ListItem>
            <ListItem>
                <a href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                Portfolio
                </a>
            </ListItem>
             <ListItem>
                <a href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                Contact Me
                </a>
            </ListItem>
        </List>
      </HStack>
    </Box>
  )
}
