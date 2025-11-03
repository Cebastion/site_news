export interface INew {
    source: {
        id: string,
        name: string
    },
    author: string,
    title: string,
    description: string,
    content: string,
    url: string,
    urlToImage: string,
    publishedAt: string
}

export interface INewResponse {
    status: string,
    totalResults: number,
    articles: INew[]
}
