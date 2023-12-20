export interface IItemLink {
    title: string,
    link: string,
    image: string,
    price: number,
    subtitle: string,
}

export interface IItem {
    name: string,
    title: string,
    subtitle: string,
    home: string,
    image: string,
    links: IItemLink[]
}