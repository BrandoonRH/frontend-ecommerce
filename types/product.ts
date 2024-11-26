export type Product = {
    id: number;
    documentId: string;
    productName: string;
    slug: string;
    description: string;
    active: boolean;
    price: number;
    origin: string;
    isFeatured: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    images: Image[];
    category: Category;
};

export type Image = {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
        thumbnail: Thumbnail;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: unknown | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
};

export type Thumbnail = {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    width: number;
    height: number;
    sizeInBytes: number;
};

export type Category = {
    id: number;
    documentId: string;
    categoryName: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
};


/*export type ProductType = {
    id: number;
    attributes: {
        productName: string;
        slug: string;
        description: string;
        active: boolean;
        price: number;
        origin: string;
        isFeatured: boolean;
        taste: string,
        images: {
            data: {
                id: number,
                attributes: {
                    url: string;
                }
            }[];
        };
        category: {
            data: {
                attributes: {
                    slug: string;
                    categoryName: string;
                }
            }
        };
    }
}*/