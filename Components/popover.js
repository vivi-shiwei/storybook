import React from 'react';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Box
} from "@chakra-ui/core";

const popover = () => {
    return (
        <>
            <Popover>
                <PopoverTrigger>
                    <Box
                        tabIndex="0"
                        role="button"
                        aria-label="Some box"
                        p={5}
                        w="120px"
                        bg="gray.300"
                        children="Click"
                    />
                </PopoverTrigger>
                <PopoverContent zIndex={4} bg="tomato" color="white">
                    <PopoverHeader fontWeight="semibold">Customization</PopoverHeader>
                    <PopoverArrow bg="pink.500" />
                    <PopoverCloseButton bg="purple.500" />
                    <PopoverBody>
                        Tadaa!! The arrow color and background color is customized. Check the
                        props for each component.
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </>
    )
}
export default popover