import React from 'react';
import { Button, ButtonGroup } from "@chakra-ui/core";

const button = () => {
    return (
        <>
            <ButtonGroup spacing={4}>
                <Button variantColor="teal" size="xs">
                    Button
                </Button>
                <Button variantColor="teal" size="sm">
                    Button
                </Button>
                <Button variantColor="teal" size="md">
                    Button
                </Button>
                <Button variantColor="teal" size="lg">
                    Button
                </Button>
            </ButtonGroup>
        </>
    )
}
export default button