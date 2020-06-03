import React from 'react';
import { Divider, Box } from "@chakra-ui/core";

const divider = () => {
    return (
        <>
            <Box>
                <span>Part 1</span>
                <Divider borderColor="red.200" />
                <span>Part 2</span>
            </Box>
        </>
    )
}
export default divider