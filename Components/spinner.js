import React from 'react';
import {
    Stack,
    Spinner
} from "@chakra-ui/core";
import { MdGraphicEq } from "react-icons/md"
function spinner() {
    return (
        <>
            <Stack isInline spacing={4}>
                <Spinner size="xs" />
                <Spinner size="sm" />
                <Spinner size="md" />
                <Spinner size="lg" />
                <Spinner size="xl" />
            </Stack>
        </>
    )
}
export default spinner