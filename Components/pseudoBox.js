import React from 'react';
import { PseudoBox } from "@chakra-ui/core";
const pseudoBox = () => {
    return (
        <>
            <PseudoBox
                role="group"
                maxW="sm"
                overflow="hidden"
                rounded="md"
                p={5}
                cursor="pointer"
                bg="white"
                boxShadow="md"
                _hover={{ bg: "blue.500" }}
            >
                <PseudoBox
                    fontWeight="semibold"
                    fontSize="lg"
                    mb={1}
                    color="gray.900"
                    _groupHover={{ color: "white" }}
                >
                    New Project
                </PseudoBox>
                <PseudoBox color="gray.700" mb={2} _groupHover={{ color: "white" }}>
                    Create a new project from a variety of starting templates.
                </PseudoBox>
            </PseudoBox>
        </>
    )
}
export default pseudoBox