import React from 'react'
import { FilterBanner } from './FilterBanner'
import { Footer } from './Footer/Footer'
import { Header } from './Header'
import { HomeBanner } from './HomeBanner'
import { ImageCardDetails } from './ImageCardDetails'
import { store } from '@/store'
import theme from '@/theme'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

interface IHome {
    details: boolean
}

export const Home = ({ details }: IHome) => {

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Header />
                {details ?
                    <ImageCardDetails />
                    :
                    <>
                        <FilterBanner />
                        <HomeBanner />
                    </>
                }
                <Footer />
            </ThemeProvider>
        </Provider>
    )
}
