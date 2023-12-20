import { Box, Button, Card, CardActions, CardHeader, CardMedia, IconButton } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { IStoreSelector } from './HomeBanner'
import { capitalizeFirstLetter } from '../utils/stringUtils'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import GradeIcon from '@mui/icons-material/Grade';
import Link from 'next/link';

export const ImageCardDetails: React.FunctionComponent = () => {
    const { storeImages } = useSelector((state: IStoreSelector) => state)

    const image = storeImages?.image;
    const imageDetails = storeImages?.image?.images;

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                ml: { xs: '12px', md: '155px' },
                mr: { xs: '12px', md: '155px' },
                mt: '90px',
                mb: '40px',
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


                <Card sx={{
                    backgroundColor: '#ff000000',
                    m: 0,
                    maxWidth: { xs: '80%', sm: '50%', md: '100%', lg: '90%', xl: '90%' },
                    flexGrow: 1,
                    boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);',
                    cursor: 'pointer',
                }}
                >
                    <Box role="button" >
                        <CardHeader
                            sx={{
                                pb: 1,
                                backgroundColor: '#6c79a373',
                                backdropFilter: 'blur(2px)',
                                color: '#424242'
                            }}
                            title={image?.title}
                            subheader={imageDetails && imageDetails[0] ? capitalizeFirstLetter(imageDetails[0]?.description) : '-'}
                        />
                        <Box
                            sx={{
                                border: '1px solid #eee'
                            }}
                        >
                            {imageDetails && imageDetails[0]?.type !== 'video/mp4' && <CardMedia
                                sx={{
                                    backgroundColor: '#fff',
                                    height: 'auto',
                                }}
                                component='img'
                                image={imageDetails[0]?.link}
                                alt="Imgur Image"
                            />}
                            {imageDetails && imageDetails[0]?.type === 'video/mp4' &&
                                <Box>
                                    <video className='video' controls>
                                        <source src={imageDetails[0]?.link} type="video/mp4"></source>
                                        Your browser does not support the video tag.
                                    </video>
                                </Box>
                            }
                        </Box>
                        <CardActions sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            backgroundColor: '#6c79a373',
                            backdropFilter: 'blur(2px)',
                        }}>
                            <Box>
                                <IconButton aria-label="add to favorites">
                                    <ThumbUpOffAltIcon />
                                    {image?.ups}
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ThumbDownOffAltIcon />
                                    {image?.downs}
                                </IconButton>
                                <IconButton aria-label="share">
                                    <GradeIcon />
                                    {image?.score}
                                </IconButton>
                            </Box>
                            <Link href="/">
                                <Button
                                    sx={{
                                        ":hover": {
                                            background: '#dbdfec'
                                        }
                                    }} size="small">Go Back</Button>
                            </Link>
                        </CardActions>
                    </Box>
                </Card>
            </Box>
        </Box>
    )
}
