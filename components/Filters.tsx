import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box, Button, FormControlLabel, Switch } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../store';
import { bindActionCreators } from 'redux';
import { IStoreSelector } from './HomeBanner';

export const Filters: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const { setFilters, setIsLoading } = bindActionCreators(actionCreators, dispatch);
    const { storeImages } = useSelector((state: IStoreSelector) => state)
    const [section, setSection] = useState<string>('hot');
    const [sort, setSort] = useState<string>('viral');
    const [window, setWindow] = useState<string>('day');
    const [viralImages, setViralImages] = useState<boolean>(true);

    const handleSectionChange = (event: SelectChangeEvent) => {
        setSection(event.target.value);
    };

    const handleSortChange = (event: SelectChangeEvent) => {
        setSort(event.target.value);
    };

    const handleWindowChange = (event: SelectChangeEvent) => {
        setWindow(event.target.value);
    };

    const handleSumbit = (e: any) => {
        e.preventDefault()
        setIsLoading(true);
        setFilters({ section, sort, window, viralImages });
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'baseline',
                backdropFilter: 'blur(8px)',
                mt: '80px',
                mb: '20px',
            }}
        >
            <form>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'baseline',
                        backdropFilter: 'blur(8px)',
                        flexWrap: 'wrap',
                    }}
                >
                    <FormControl sx={{ m: 1, minWidth: 120 }} disabled={storeImages?.isLoading}>
                        <InputLabel id="demo-simple-select-label">Section</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            data-testid="section-button"
                            value={section}
                            label="Section"
                            onChange={handleSectionChange}
                            aria-label="section-actions"
                        >
                            <MenuItem value={'hot'}>Hot</MenuItem>
                            <MenuItem value={'top'}>Top</MenuItem>
                            <MenuItem value={'user'}>User</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }} disabled={storeImages?.isLoading}>
                        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sort}
                            label="Sort"
                            onChange={handleSortChange}
                            aria-label="sort-actions"
                        >
                            <MenuItem value={'viral'}>Viral</MenuItem>
                            <MenuItem value={'top'}>Top</MenuItem>
                            <MenuItem value={'time'}>Time</MenuItem>
                            <MenuItem value={'rising'}>Rising</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }} disabled={storeImages?.isLoading}>
                        <InputLabel id="demo-simple-select-label">Window</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={window}
                            label="Window"
                            onChange={handleWindowChange}
                            aria-label="sort-window"
                        >
                            <MenuItem value={'day'}>Day</MenuItem>
                            <MenuItem value={'week'}>Week</MenuItem>
                            <MenuItem value={'month'}>Month</MenuItem>
                            <MenuItem value={'year'}>Year</MenuItem>
                            <MenuItem value={'all'}>All</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl component="fieldset" variant="standard" disabled={storeImages?.isLoading}>
                        <FormControlLabel
                            control={
                                <Switch checked={viralImages} onChange={() => setViralImages(!viralImages)} />
                            }
                            label="Show Viral Images"
                        />
                    </FormControl>
                    <Button
                        sx={{
                            backgroundColor: '#c9c9d2',
                            ":hover": {
                                backgroundColor: '#d7d7d7',
                            }
                        }}
                        variant="contained"
                        onClick={handleSumbit}
                        disabled={storeImages?.isLoading}
                    >Search</Button>
                </Box>
            </form>
        </Box>
    );
}