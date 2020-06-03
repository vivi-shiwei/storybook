import React from 'react';
import { Code, Stack } from "@chakra-ui/core";

const code = () => {
    return (
        <>
            <Stack isInline>
                <Code children="console.log(welcome)" />
                <Code variantColor="red" children="var chakra = 'awesome!'" />
                <Code variantColor="yellow" children="npm install chakra" />
            </Stack>
        </>
    )
}
export default code