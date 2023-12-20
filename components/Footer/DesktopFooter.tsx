import React from 'react'
import { Box, Typography } from '@mui/material'

export const DesktopFooter: React.FunctionComponent = () => {
    return (
        <Box
            sx={{
                ml: '46px',
                mr: '46px',
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {/* copyright */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        mr: '13px',
                    }}
                >
                    <Typography className='footer-words'>Copyright 2023 | Imgur Viewer.</Typography>
                </Box>
            </Box>
        </Box>
    )
}
