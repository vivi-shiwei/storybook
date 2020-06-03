import React from 'react';
import { AspectRatioBox, Image } from "@chakra-ui/core";

const aspectRatioBox = () => {
    return (
        <>
            <AspectRatioBox maxW="400px" ratio={4 / 3}>
                <Image src="https://bit.ly/naruto-sage" alt="naruto" objectFit="cover" />
            </AspectRatioBox>
        </>
    )
}
export default aspectRatioBox