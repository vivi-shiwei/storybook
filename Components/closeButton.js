import React from 'react';
import { CloseButton, Stack } from "@chakra-ui/core";

const closebutton = () => {
    return (
        <>
            <Stack isInline spacing={6}>
                <CloseButton size="sm" />
                <CloseButton size="md" />
                <CloseButton size="lg" />
            </Stack>
        </>
    )
}
export default closebutton