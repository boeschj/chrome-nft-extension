import * as isIPFS from 'is-ipfs'

type IpfsCIDResult = {
    containsCid: boolean,
    cid: string | undefined
}

const containsCID = (url: string): IpfsCIDResult => {

    const splitUrl = url.split(/\/|\?/);

    for (const split of splitUrl) {
        if (isIPFS.cid(split)) {
            return {
                containsCid: true,
                cid: split,
            };
        }

        const splitOnDot = split.split(".")[0];
        if (isIPFS.cid(splitOnDot)) {
            return {
                containsCid: true,
                cid: splitOnDot,
            };
        }
    }

    return {
        containsCid: false,
        cid: undefined,
    };
};

/**
 * Returns a metadata URL formatted using a specific gateway of choice by the user
* @param {string} sourceUrl The URL of the metadata file you wish to convert. This can be an IPFS URL or another gateway
* @example 
    ipfs://CID
    ipfs://ipfs/CID
    https://example-gateway.com/ipfs/CID
    https://example-gateway.com/ipfs/CID/exampleFile.json
    https://example-gateway.com/ipns/CID
* @param {string} desiredGatewayPrefix The desired gateway you want to convert your source URL to.
* @example 
    https://mygateway.mypinata.cloud
    https://ipfs.io
* @returns {string} A new URL formatted using the provided gateway prefix
*/

export const convertIPFSToGateway = (sourceUrl: string, desiredGatewayPrefix: string): string | undefined => {
    const results = containsCID(sourceUrl);

    const splitUrl = sourceUrl.split(results.cid ?? '');
    //case 1 - the ipfs://cid path
    if (sourceUrl.includes(`ipfs://${results.cid}`)) {
        return `${desiredGatewayPrefix}/ipfs/${results.cid}${splitUrl[1]}`;
    }

    //case 2 - the /ipfs/cid path (this should cover ipfs://ipfs/cid as well
    if (sourceUrl.includes(`/ipfs/${results.cid}`)) {
        return `${desiredGatewayPrefix}/ipfs/${results.cid}${splitUrl[1]}`;
    }

    //case 3 - the /ipns/cid path
    if (sourceUrl.includes(`/ipns/${results.cid}`)) {
        return `${desiredGatewayPrefix}/ipns/${results.cid}${splitUrl[1]}`;
    }

    //case 4 - Alchemy only returns a straight up CID
    if (sourceUrl.includes(`${results.cid}`)) {
        return `${desiredGatewayPrefix}/ipfs/${results.cid}${splitUrl[1]}`;
    }

    //case 5 - No IPFS specific formatting is found, just return the url
    if (sourceUrl.includes('https://')) {
        return sourceUrl;
    }
    //default case when format fits none of the above patterns    
    else {
        return undefined;
    }
};
