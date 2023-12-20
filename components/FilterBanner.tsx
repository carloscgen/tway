import React from 'react'
import Box from '@mui/material/Box';
import { Filters } from './Filters';

export const FilterBanner: React.FunctionComponent = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                height: { xs: '80px', md: '150px' },
                mt: { xs: '56px', md: '80px' },
                justifyContent: 'center',
            }}
        >
            <Filters />
        </Box>
    )
}
