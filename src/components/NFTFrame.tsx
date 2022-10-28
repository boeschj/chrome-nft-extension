
const NFTContentFrame = (props: { imageUrl: string | undefined }): JSX.Element => {
    return (
        !props.imageUrl ?
            <div className="h-64 w-full mx-auto border border-sky-300 rounded-lg text-center py-28">Image Unavailable</div>
            :
            <img className="object-cover h-64 w-full mx-auto border border-sky-300 rounded-lg" src={props.imageUrl} alt='NFT_Content' />
    )
}

export default NFTContentFrame;