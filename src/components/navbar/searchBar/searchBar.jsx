import { Box, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const SearchBar = () => {
    const [os, setOS] = useState('');

    useEffect(() => {
        const userAgent = window.navigator.userAgent;
        if (userAgent.indexOf('Win') !== -1) {
            setOS('windows');
        } else if (userAgent.indexOf('Mac') !== -1) {
            setOS('mac');
        } else if (userAgent.indexOf('Linux') !== -1) {
            setOS('linux');
        } else {
            setOS('unknown');
        }
    }, []);

    let placeholder = '';

    switch (os) {
        case 'mac':
            placeholder = 'CMD + K';
            break;
        case 'windows':
            placeholder = 'CTRL + K';
            break;
        case 'linux':
            placeholder = 'CTRL + K';
            break;
        default:
            placeholder = 'CTRL + K'; // Default placeholder for unknown platforms
            break;
    }

    return (
        <Box bg="rgba(255, 255, 255, 0.05)" border="1px solid rgba(255, 255, 255, 0.05)" w="280px" h="45px" rounded="15px">
            <Input
                transition="all 0.3s ease-in-out"
                bg="transparent"
                h="100%"
                justify="right"
                align="center"
                w="100%"
                px="15"
                placeholder={placeholder}
                color="white"
                fontWeight="700"
                fontSize="16px"
                border="none"
                _focus={{ border: "none", shadow: "0 0 15px 0px rgba(255, 255, 255, 0.4)" }}
                _active={{ border: "none" }}
                borderRadius="15px"
                _placeholder={{ fontWeight: "700", fontSize: "18px" }}
            />
        </Box>
    );
};

export default SearchBar;
