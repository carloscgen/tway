import { Box } from '@mui/material'
import React from 'react'
import { DesktopFooter } from './DesktopFooter';

export const Footer: React.FunctionComponent = () => {

    return (
        <Box sx={{
            width: '100%',
            backgroundColor: '#7e7d936e',
            height: '60px',
            display: 'flex',
            backdropFilter: 'blur(4px)',
        }}>
            <DesktopFooter />
        </Box >
    )
}
