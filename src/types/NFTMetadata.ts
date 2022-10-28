export type NFTMetadata = {
    title: string,
    imageUrl: string | undefined,
    attributes: Record<string, any>[] | undefined,
    metadataError: string | undefined
};