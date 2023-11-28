export type Product = {
    id: number,
    name: string,
    imageUrl: string,
    category: Category,

}

export type Category = {
    id: number,
    name: string,
    path: string
}