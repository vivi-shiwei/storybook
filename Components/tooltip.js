import React from 'react';
import { Tooltip, Stack, Button } from "@chakra-ui/core";
function tooltip() {
    return (
        <>
            <Stack shouldWrapChildren spacing={6}>
                <Tooltip label="Right end" placement="right-end">
                    <Button variant="outline">Right-End</Button>
                </Tooltip>

                <Tooltip label="Left" placement="left">
                    <Button variant="outline">Left</Button>
                </Tooltip>

                <Tooltip label="Auto start" placement="auto-start">
                    <Button variant="outline">Auto-Start</Button>
                </Tooltip>

                <Tooltip label="Auto end" placement="auto-end">
                    <Button variant="outline">Auto-End</Button>
                </Tooltip>

                <Tooltip label="Left end" placement="left-end">
                    <Button variant="outline">Left-End</Button>
                </Tooltip>
            </Stack>
        </>
    );
}
export default tooltip