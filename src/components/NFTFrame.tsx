interface INFTContentFrameProps {
    mediaUrl: string
}

const NFTContentFrame: React.FC<INFTContentFrameProps> = ({ ...props }: INFTContentFrameProps): JSX.Element => {
    return (
        <div>
            <img className="object-cover h-64 w-full mx-auto border border-sky-500 rounded-lg" src={'https://lh3.googleusercontent.com/Ku3e-h3F-o7cg2CstOWg3fN8e5YrmRMHjGkiETYadxguC4W3yJy8BCyaZMlBEk-t_xA5n7FDDoQPv2-TZSKSys2rRX9NtDbxRw3Z=w1000'} alt='NFT_Content' />
        </div>
    )
}

export default NFTContentFrame;