import React from 'react';
import { ImageCardDetails } from './ImageCardDetails';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { reducers } from '../store';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";

const storeImages = createStore(
    reducers,
    {
        storeImages: {
            images: [
                {
                    "id": "xdzt9eK",
                    "title": "The people who really matter",
                    "description": null,
                    "datetime": 1702860335,
                    "cover": "nAXUW2b",
                    "cover_width": 594,
                    "cover_height": 4761,
                    "account_url": "LincLoud",
                    "account_id": 78852983,
                    "privacy": "hidden",
                    "layout": "blog",
                    "views": 91692,
                    "link": "https://imgur.com/a/xdzt9eK",
                    "ups": 2370,
                    "downs": 41,
                    "points": 2329,
                    "score": 2374,
                    "is_album": true,
                    "vote": null,
                    "favorite": false,
                    "nsfw": false,
                    "section": "",
                    "comment_count": 113,
                    "favorite_count": 315,
                    "topic": null,
                    "topic_id": null,
                    "images_count": 1,
                    "in_gallery": true,
                    "is_ad": false,
                    "tags": [
                        {
                            "name": "wholesome",
                            "display_name": "Wholesome",
                            "followers": 59770,
                            "total_items": 38996,
                            "following": false,
                            "is_whitelisted": false,
                            "background_hash": "W5yeBvr",
                            "thumbnail_hash": null,
                            "accent": "5D85C3",
                            "background_is_animated": false,
                            "thumbnail_is_animated": false,
                            "is_promoted": false,
                            "description": "",
                            "logo_hash": null,
                            "logo_destination_url": null,
                            "description_annotations": {}
                        },
                        {
                            "name": "gravity_falls",
                            "display_name": "gravity falls",
                            "followers": 1673,
                            "total_items": 1959,
                            "following": false,
                            "is_whitelisted": false,
                            "background_hash": "YDS5rp4",
                            "thumbnail_hash": null,
                            "accent": "24565E",
                            "background_is_animated": false,
                            "thumbnail_is_animated": false,
                            "is_promoted": false,
                            "description": "",
                            "logo_hash": null,
                            "logo_destination_url": null,
                            "description_annotations": {}
                        },
                        {
                            "name": "comics",
                            "display_name": "comics",
                            "followers": 3290593,
                            "total_items": 44585,
                            "following": false,
                            "is_whitelisted": false,
                            "background_hash": "1fDftsZ",
                            "thumbnail_hash": null,
                            "accent": "63A2C8",
                            "background_is_animated": false,
                            "thumbnail_is_animated": false,
                            "is_promoted": false,
                            "description": "POW! BAM! ZAP!",
                            "logo_hash": null,
                            "logo_destination_url": null,
                            "description_annotations": {}
                        }
                    ],
                    "ad_type": 0,
                    "ad_url": "",
                    "in_most_viral": true,
                    "include_album_ads": false,
                    "images": [
                        {
                            "id": "nAXUW2b",
                            "title": null,
                            "description": "I found this randomly and I'm not sure who the artist is, could be Moring Mark but I can't be certain",
                            "datetime": 1702860271,
                            "type": "image/jpeg",
                            "animated": false,
                            "width": 594,
                            "height": 4761,
                            "size": 697064,
                            "views": 48425,
                            "bandwidth": 33755324200,
                            "vote": null,
                            "favorite": false,
                            "nsfw": null,
                            "section": null,
                            "account_url": null,
                            "account_id": null,
                            "is_ad": false,
                            "in_most_viral": false,
                            "has_sound": false,
                            "tags": [],
                            "ad_type": 0,
                            "ad_url": "",
                            "edited": "0",
                            "in_gallery": false,
                            "link": "https://i.imgur.com/nAXUW2b.jpg",
                            "comment_count": null,
                            "favorite_count": null,
                            "ups": null,
                            "downs": null,
                            "points": null,
                            "score": null
                        }
                    ],
                    "ad_config": {
                        "safeFlags": [
                            "album",
                            "in_gallery",
                            "gallery"
                        ],
                        "highRiskFlags": [],
                        "unsafeFlags": [
                            "sixth_mod_unsafe"
                        ],
                        "wallUnsafeFlags": [],
                        "showsAds": false,
                        "showAdLevel": 1,
                        "safe_flags": [
                            "album",
                            "in_gallery",
                            "gallery"
                        ],
                        "high_risk_flags": [],
                        "unsafe_flags": [
                            "sixth_mod_unsafe"
                        ],
                        "wall_unsafe_flags": [],
                        "show_ads": false,
                        "show_ad_level": 1,
                        "nsfw_score": 0
                    }
                },
            ],
            image:                 {
                "id": "xdzt9eK",
                "title": "The people who really matter",
                "description": null,
                "datetime": 1702860335,
                "cover": "nAXUW2b",
                "cover_width": 594,
                "cover_height": 4761,
                "account_url": "LincLoud",
                "account_id": 78852983,
                "privacy": "hidden",
                "layout": "blog",
                "views": 91692,
                "link": "https://imgur.com/a/xdzt9eK",
                "ups": 2370,
                "downs": 41,
                "points": 2329,
                "score": 2374,
                "is_album": true,
                "vote": null,
                "favorite": false,
                "nsfw": false,
                "section": "",
                "comment_count": 113,
                "favorite_count": 315,
                "topic": null,
                "topic_id": null,
                "images_count": 1,
                "in_gallery": true,
                "is_ad": false,
                "tags": [
                    {
                        "name": "wholesome",
                        "display_name": "Wholesome",
                        "followers": 59770,
                        "total_items": 38996,
                        "following": false,
                        "is_whitelisted": false,
                        "background_hash": "W5yeBvr",
                        "thumbnail_hash": null,
                        "accent": "5D85C3",
                        "background_is_animated": false,
                        "thumbnail_is_animated": false,
                        "is_promoted": false,
                        "description": "",
                        "logo_hash": null,
                        "logo_destination_url": null,
                        "description_annotations": {}
                    },
                    {
                        "name": "gravity_falls",
                        "display_name": "gravity falls",
                        "followers": 1673,
                        "total_items": 1959,
                        "following": false,
                        "is_whitelisted": false,
                        "background_hash": "YDS5rp4",
                        "thumbnail_hash": null,
                        "accent": "24565E",
                        "background_is_animated": false,
                        "thumbnail_is_animated": false,
                        "is_promoted": false,
                        "description": "",
                        "logo_hash": null,
                        "logo_destination_url": null,
                        "description_annotations": {}
                    },
                    {
                        "name": "comics",
                        "display_name": "comics",
                        "followers": 3290593,
                        "total_items": 44585,
                        "following": false,
                        "is_whitelisted": false,
                        "background_hash": "1fDftsZ",
                        "thumbnail_hash": null,
                        "accent": "63A2C8",
                        "background_is_animated": false,
                        "thumbnail_is_animated": false,
                        "is_promoted": false,
                        "description": "POW! BAM! ZAP!",
                        "logo_hash": null,
                        "logo_destination_url": null,
                        "description_annotations": {}
                    }
                ],
                "ad_type": 0,
                "ad_url": "",
                "in_most_viral": true,
                "include_album_ads": false,
                "images": [
                    {
                        "id": "nAXUW2b",
                        "title": null,
                        "description": "I found this randomly and I'm not sure who the artist is, could be Moring Mark but I can't be certain",
                        "datetime": 1702860271,
                        "type": "image/jpeg",
                        "animated": false,
                        "width": 594,
                        "height": 4761,
                        "size": 697064,
                        "views": 48425,
                        "bandwidth": 33755324200,
                        "vote": null,
                        "favorite": false,
                        "nsfw": null,
                        "section": null,
                        "account_url": null,
                        "account_id": null,
                        "is_ad": false,
                        "in_most_viral": false,
                        "has_sound": false,
                        "tags": [],
                        "ad_type": 0,
                        "ad_url": "",
                        "edited": "0",
                        "in_gallery": false,
                        "link": "https://i.imgur.com/nAXUW2b.jpg",
                        "comment_count": null,
                        "favorite_count": null,
                        "ups": null,
                        "downs": null,
                        "points": null,
                        "score": null
                    }
                ],
                "ad_config": {
                    "safeFlags": [
                        "album",
                        "in_gallery",
                        "gallery"
                    ],
                    "highRiskFlags": [],
                    "unsafeFlags": [
                        "sixth_mod_unsafe"
                    ],
                    "wallUnsafeFlags": [],
                    "showsAds": false,
                    "showAdLevel": 1,
                    "safe_flags": [
                        "album",
                        "in_gallery",
                        "gallery"
                    ],
                    "high_risk_flags": [],
                    "unsafe_flags": [
                        "sixth_mod_unsafe"
                    ],
                    "wall_unsafe_flags": [],
                    "show_ads": false,
                    "show_ad_level": 1,
                    "nsfw_score": 0
                }
            },
            headerColor: '#7e7d936e',
            isLoading: false,
            filters: {
                section: 'hot',
                sort: 'viral',
                window: 'day',
                viralImages: true
            }
        }
    },
    applyMiddleware(thunk)
)

describe('Render ImageCardDetails component', () => {
    it('Display Title on Card on screen', () => {
        render(
            <Provider store={storeImages}>
                <ImageCardDetails />
            </Provider>
        );

        const value = screen.getByText('The people who really matter');
        expect(value).toBeInTheDocument();
    });

    it('Display Description on Card on screen', () => {
        render(
            <Provider store={storeImages}>
                <ImageCardDetails />
            </Provider>
        );

        const value = screen.getByText(`I found this randomly and I'm not sure who the artist is, could be Moring Mark but I can't be certain`);
        expect(value).toBeInTheDocument();
    });

    it('Display Go Back on Card on screen', () => {
        render(
            <Provider store={storeImages}>
                <ImageCardDetails />
            </Provider>
        );

        const value = screen.getByText('Go Back');
        expect(value).toBeInTheDocument();
    });
})