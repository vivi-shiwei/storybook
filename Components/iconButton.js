import React from 'react';
import { IconButton } from "@chakra-ui/core";
import { MdPhone } from "react-icons/md"

const iconButton = () => {
    return (
        <>
            <IconButton
                variant="outline"
                variantColor="teal"
                aria-label="Send email"
                icon="email"
            />
            <IconButton
                variant="outline"
                variantColor="teal"
                aria-label="Call Sage"
                fontSize="20px"
                icon={MdPhone}
            />
        </>
    )
}
export default iconButton