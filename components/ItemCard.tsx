import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import { Button, Box, CardActions, Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { useDispatch, useSelector } from 'react-redux';
import { IStoreSelector } from './HomeBanner';
import { capitalizeFirstLetter } from '@/utils/stringUtils';
import { actionCreators } from '@/store';
import { bindActionCreators } from 'redux';
import Link from 'next/link';
import { IImageData } from '@/interfaces/images';

export const ItemCard = ({ img, title }: IImageData) => {
    const { storeImages } = useSelector((state: IStoreSelector) => state)
    const dispatch = useDispatch();
    const { setImageDetails } = bindActionCreators(actionCreators, dispatch);

    const imgUrl = img?.images ? img.images[0]?.link : '';
    const imgObj = img?.images ? img.images[0] : null;

    const videoUrl: string | undefined = img?.images ? img.images[0]?.link : img?.images ? img?.images[0]?.mp4 : '';

    const handleDetailsClick = () => {
        if (img) {
            setImageDetails(img);
        }
    }

    return (
        <>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}
                sx={{ display: 'flex', justifyContent: 'center', height: 'fit-content' }}>
                <Card sx={{
                    backgroundColor: '#ff000000',
                    m: 0,
                    maxWidth: { xs: '80%', sm: '50%', md: '100%', lg: '90%', xl: '90%' },
                    flexGrow: 1,
                    boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);',
                    cursor: 'pointer',
                    ":hover": {
                        transition: '50ms',
                        transform: 'scale(1.05)',
                    }
                }}
                >
                    <Box role="button" >
                        <CardHeader
                            sx={{
                                pb: 1,
                                backgroundColor: `${storeImages?.headerColor}`,
                                backdropFilter: 'blur(2px)',
                                color: '#424242'
                            }}
                            subheader={title ? capitalizeFirstLetter(title) : '-'}
                        />
                        <Box
                            sx={{
                                border: '1px solid #eee'
                            }}
                        >
                            {imgObj?.type !== 'video/mp4' ? <CardMedia
                                sx={{
                                    backgroundColor: '#fff',
                                }}
                                component='img'
                                height="294"
                                image={imgUrl}
                                alt="Imgur Image"
                            /> :
                                <Box>
                                    <video className='video' controls>
                                        <source src={videoUrl} type="video/mp4"></source>
                                        Your browser does not support the video tag.
                                    </video>
                                </Box>
                            }
                        </Box>
                        <CardActions sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            backgroundColor: `${storeImages?.headerColor}`,
                            backdropFilter: 'blur(2px)',
                        }}>
                            <Box>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon color='error' />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                            </Box>
                            <Link href="/imageDetails">
                                <Button sx={{
                                    ":hover": {
                                        background: '#dbdfec'
                                    }
                                }} size="small" onClick={handleDetailsClick}>See Details</Button>
                            </Link>
                        </CardActions>
                    </Box>
                </Card>
            </Grid>
        </>

    );
}