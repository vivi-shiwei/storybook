import React from 'react';
import { Switch, Stack } from "@chakra-ui/core";
function switchs() {
    return (
        <>
            <Stack align="center" isInline>
                <Switch size="sm" />
                <Switch size="md" />
                <Switch size="lg" />
            </Stack>
        </>
    )
}
export default switchs