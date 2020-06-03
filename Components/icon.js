import React from 'react';
import { Stack, Icon } from "@chakra-ui/core";
import { MdSettings } from "react-icons/md"
function icon() {
    return (
        // Example from paystack.com
        <>
            <Stack isInline>
                {/* Default size is 1em => 16px */}
                <Icon name="phone" />

                {/* Use the `size` prop to change the icon size */}
                <Icon name="check-circle" size="24px" />

                {/* Use the `color` prop to change the icon color */}
                <Icon name="warning" size="32px" color="red.500" />
            </Stack>
        </>
    )
}
export default icon