import { IImagesResponse } from '@/interfaces/images';
import axios from 'axios';

export const GetImages = async (section: string, sort: string, window: string, showViral: boolean): Promise<IImagesResponse> => {
    console.log(`https://api.imgur.com/3/gallery/${section}/${sort}/${window}/?showViral=${showViral}`)
    try {
        const response = await axios.get(`https://api.imgur.com/3/gallery/${section}/${sort}/${window}/?showViral=${showViral}`, {
            headers: {
                Authorization: `Client-ID 7449a008e75ca1d`,
            },
        })
        const images: IImagesResponse = response?.data;
        return images;
    } catch (error) {
        const res = error as any
        console.error(error);
        return res;
    }
}
