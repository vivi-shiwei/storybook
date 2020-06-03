import React from 'react';
import { Tag, TagIcon, TagLabel, TagCloseButton, Stack } from "@chakra-ui/core";
import { MdSettings } from "react-icons/md"
function tag() {
    return (
        <>
            <Stack spacing={4} isInline>
                <Tag variantColor="cyan">
                    <TagLabel>Cyan</TagLabel>
                    <TagIcon icon="check" size="12px" />
                </Tag>

                {/* You can also use custom svg icons */}
                <Tag variantColor="teal">
                    <TagLabel>Teal</TagLabel>
                    <TagIcon icon={MdSettings} />
                </Tag>
            </Stack>
        </>
    )
}
export default tag