import React from 'react';
import {
    Stack,
    InputGroup,
    InputLeftElement,
    Input,
    InputRightElement,
    Icon
} from "@chakra-ui/core"

const iconButton = () => {
    return (
        <>
            <Stack spacing={4}>
                <InputGroup>
                    <InputLeftElement children={<Icon name="phone" color="gray.300" />} />
                    <Input type="phone" placeholder="Phone number" />
                </InputGroup>

                <InputGroup>
                    <InputLeftElement color="gray.300" fontSize="1.2em" children="$" />
                    <Input placeholder="Enter amount" />
                    <InputRightElement children={<Icon name="check" color="green.500" />} />
                </InputGroup>
            </Stack>
        </>
    )
}
export default iconButton