export interface IImageData {
    img?: IImage,
    title?: string,
}

export interface IImageDetails {
    id: string,
    title: string | null,
    description: string | null,
    datetime: number,
    type?: string,
    animated: boolean,
    width: number,
    height: number,
    size: number,
    views: number,
    bandwidth: number,
    vote: number | null,
    favorite: boolean,
    nsfw: null,
    section: null,
    account_url: null,
    account_id: null,
    is_ad: any,
    in_most_viral: boolean,
    has_sound: boolean,
    tags: any,
    ad_type: number,
    ad_url: string,
    edited: string,
    in_gallery: boolean,
    link: string,
    comment_count: null,
    favorite_count: null,
    ups: null,
    downs: null,
    points: null,
    score: null,
    mp4?: string,
}

export interface IImage {
    title?: string,
    description?: string | null,
    ups?: number,
    downs?: number,
    points?: number,
    score?: number,
    id?: string,
    datetime?: number,
    cover?: any,
    cover_width?: any,
    cover_height?: number,
    account_url?: string,
    account_id?: number,
    privacy?: any,
    layout?: any,
    views?: number,
    link?: string,
    is_album?: boolean,
    vote?: string | null,
    favorite?: boolean,
    nsfw?: boolean,
    section?: string,
    comment_count?: number,
    favorite_count?: number,
    topic?: null,
    topic_id?: any,
    images_count?: number,
    in_gallery?: boolean,
    is_ad?: boolean,
    tags?: any[],
    ad_type?: number,
    type?: string,
    ad_url?: string,
    in_most_viral?: boolean,
    include_album_ads?: boolean,
    images?: IImageDetails[],
    ad_config?: any
}

export interface IImagesResponse {
    data: IImage[]
}

