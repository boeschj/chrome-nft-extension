
interface INFTProperties {
    title: string,
    attributes: Record<string, any> | undefined
}

const NFTProperties: React.FC<INFTProperties> = ({ title, attributes }: INFTProperties): JSX.Element => {

    return (
        <div className="h-fit w-full">
            <div className="h-auto w-full border border-sky-300 text-gray-700 rounded-t-lg text-center text-2xl font-bold align-middle p-1">
                {title}
            </div>
            <div className="h-auto w-full border border-sky-300 text-gray-700 border-t-0 py-2 text-center text-md font-bold align-middle p-1">
                Properties
            </div>
            <div className="flex flex-row justify-start flex-wrap w-full h-32 mx-auto overflow-y-auto rounded-b-lg border border-t-0 border-sky-300 p-1">
                {
                    attributes ?
                        attributes.map((attribute: Record<string, any>, index: number) => {
                            return (
                                <div
                                    className="flex flex-col h-24 w-[170px] bg-sky-50 border border-sky-300 rounded-xl p-2 mx-1 my-1 justify-center"
                                    key={index}
                                >
                                    <div className="text-center align-middle self-center text-sky-400 text-lg">{attribute.trait_type}</div>
                                    <div className="text-center align-middle self-center text-xl text-gray-700">{attribute.value}</div>
                                </div>
                            )
                        })
                        :
                        <div className="text-center w-full">No Properties to Display</div>
                }
            </div>
        </div>
    )
}

export default NFTProperties;