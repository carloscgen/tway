import { Box } from '@mui/material'
import React, { useCallback, useEffect } from 'react'
import { GetImages } from '@/services/images.service'
import { IErrorResponse } from '@/interfaces/error'
import { Typography, Grid, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ItemCard } from './ItemCard'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store';
import { useDispatch } from 'react-redux';
import { IFilters, IStoreData } from '@/store/reducers/imagesReducer'
import { useSelector } from 'react-redux';
import { IImagesResponse } from '@/interfaces/images';
export interface IStoreSelector {
    storeImages: IStoreData
}

export const HomeBanner: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const { addImages, setIsLoading } = bindActionCreators(actionCreators, dispatch);
    const { storeImages } = useSelector((state: IStoreSelector) => state)
    const filters = storeImages?.filters

    const fetchItemsData = useCallback(
        async (filters: IFilters) => {
            try {
                setIsLoading(true);
                const itemsData: IImagesResponse = await GetImages(filters.section, filters.sort, filters.window, filters.viralImages);
                addImages(itemsData?.data);
            } catch (error) {
                setIsLoading(false);
                const res = error as IErrorResponse;
                console.log(error);
                return res;
            }
        }, [])

    useEffect(() => {
        fetchItemsData(filters)
            .finally(() => {
                setIsLoading(false)
            });
    }, [fetchItemsData, filters])

    const Main = styled(Box)(({ theme }) => ({
        // minHeight: '70vh',
        flexGrow: 2,
        paddingTop: '28px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                ml: { xs: '12px', md: '155px' },
                mr: { xs: '12px', md: '155px' },
                mt: '30px',
                minHeight: '90vh',
                justifyContent: 'center'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {storeImages?.isLoading &&
                    <Main>
                        <CircularProgress sx={{ mb: 4, mt: 4 }} />
                    </Main>
                }
                <Main>
                    {storeImages?.images?.length < 1 && (
                        <Typography
                            variant="h5"
                            color="text.secondary"
                        >
                            No images to display...
                        </Typography>
                    )}
                </Main>
                {storeImages?.images?.length > 0 ? <Grid
                    sx={{
                        pb: 2
                    }}
                    container rowSpacing={2}>
                    {storeImages?.images.map((item) => {
                        return (
                            <ItemCard key={item.id} img={item} title={item?.title} />
                        )
                    })}
                </Grid> : null}
            </Box>
        </Box>
    )
}
