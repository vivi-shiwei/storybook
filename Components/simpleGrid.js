import React from 'react';
import { SimpleGrid, Box } from "@chakra-ui/core";
function simpleGrid() {
    return (
        <>
            <SimpleGrid minChildWidth="120px" spacing="40px">
                <Box bg="tomato" height="80px"></Box>
                <Box bg="tomato" height="80px"></Box>
                <Box bg="tomato" height="80px"></Box>
                <Box bg="tomato" height="80px"></Box>
                <Box bg="tomato" height="80px"></Box>
                <Box bg="tomato" height="80px"></Box>
            </SimpleGrid>
        </>
    )
}
export default simpleGrid