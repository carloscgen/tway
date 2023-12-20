import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import search from '../public/images/search_white.png';
import login from '../public/images/login.svg';
import imgur from '../public/images/imgur.svg';
import Image from 'next/image'
import Link from 'next/link'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store';
import { useDispatch } from 'react-redux';

const pages = ['Find any images you want!!!'];
const navIcons = [search];

export const Header: React.FunctionComponent = () => {
    let theme = useTheme()
    let isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const [header, setHeader] = useState<boolean>(false)
    const dispatch = useDispatch();
    const { setColor } = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        if (typeof window !== undefined) {
            window.addEventListener('scroll', () => {
                if (isMobile && window.scrollY >= 1) {
                    setHeader(true)
                    setColor('#00196aeb');
                    return
                }
                if (!isMobile && window.scrollY >= 50) {
                    setHeader(true)
                    setColor('#353c7d47');
                    return
                }
                else {
                    setHeader(false)
                    setColor('#7e7d936e');
                    return
                }
            })
        }
    }, [])

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const setHeaderColor = (header: boolean, isMobile: boolean) => {
        if (isMobile && header) {
            return '#6c79a373'
        }
        if (!isMobile && header) {
            return '#09104c9c'
        }
        return '#7e7d936e'
    }

    return (
        <AppBar
            sx={{
                backgroundColor: () => setHeaderColor(header, isMobile),
                height: { xs: '60px', lg: '80px' },
                display: 'flex',
                width: '100%',
                zIndex: '1400',
                position: 'fixed',
                transition: 'all 0.3s ease-out 0s',
                boxShadow: header ? '0px 1px 2px rgb(0 56 255 / 26%), 0px 2px 4px rgb(0 73 255 / 32%), 0px 2px 4px rgb(0 5 255 / 21%), 0px 4px 6px rgb(0 10 255 / 25%)' : 'none',
                justifyContent: { md: 'center', lg: 'center' },
                alignItems: 'center',
                backdropFilter: header ? 'blur(8px)' : 'blur(2px)',
            }}
            position="fixed"
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            mr: 2,
                            cursor: 'pointer',
                            ml: { xs: 2, sm: 10 },
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'center',
                        }}>
                        <Link href="https://imgur.com/" target='_blank'>
                            <Image
                                src={imgur.src} alt="imgur"
                                width={80}
                                height={30}
                            />
                        </Link>
                    </Box>

                    <Box sx={{
                        flexGrow: 1,
                        display: { xs: 'flex', md: 'none' },
                        height: { xs: '60px', lg: '80px' },
                    }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={((Math.random() * 10) + 1).toFixed(5)} >
                                    <Typography
                                        sx={{
                                            textTransform: 'lowercase'
                                        }}
                                        textAlign="center" >{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box

                        sx={{
                            mr: 2,
                            cursor: 'pointer',
                            ml: { xs: 2, sm: 10 },
                            display: { xs: 'flex', md: 'none' }
                        }}>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'BryantLG',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            textTransform: 'uppercase',
                            fontSize: '16px',
                            lineHeight: '16px',
                        }}
                    >
                        Seach Images!
                    </Typography>

                    {/* NO MOBILE */}
                    <Box sx={{
                        flexGrow: 1,
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'center',
                        height: '64px',
                    }}>
                        {pages.map((page, index) => (
                            <Box
                                key={((Math.random() * 10) + 1).toFixed(5)}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Image
                                    className=''
                                    src={navIcons[index].src} alt="images"
                                    width={20}
                                    height={20}
                                />
                                <Box
                                    key={page}
                                    sx={{
                                        my: 2,
                                        mt: 0,
                                        mb: 0,
                                        pt: 0,
                                        pb: 0,
                                        pl: '16px',
                                        pr: '16px',
                                        color: 'white',
                                        display: 'block',
                                        textTransform: 'none',
                                        fontSize: '20px',
                                        fontWeight: 700,
                                    }}
                                >
                                    {page}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0, mr: { xs: 2, sm: 10 }, display: { xs: 'none', md: 'flex' }, cursor: 'pointer' }}>
                        <Button>
                            <Image
                                className='login-icon'
                                src={login.src} alt="login"
                                width={20}
                                height={20}
                            />
                            <Typography
                                sx={{
                                    fontSize: '13px',
                                    ml: '10px',
                                    color: '#fff',
                                    textTransform: 'none'
                                }}
                            >{'Log in'}</Typography>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
