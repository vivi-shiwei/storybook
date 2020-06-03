import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Stack,
    Input,
    Box,
    FormLabel,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Select,
    Textarea
} from "@chakra-ui/core";

function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const firstField = React.useRef();
    const btnRef = React.useRef();

    return (
        <>
            <Button ref={btnRef} leftIcon="add" variantColor="teal" onClick={onOpen}>
                Create user
        </Button>
            <Drawer
                isOpen={isOpen}
                placement="right"
                initialFocusRef={firstField}
                finalFocusRef={btnRef}
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth="1px">
                        Create a new account
            </DrawerHeader>

                    <DrawerBody>
                        <Stack spacing="24px">
                            <Box>
                                <FormLabel htmlFor="username">Name</FormLabel>
                                <Input
                                    ref={firstField}
                                    id="username"
                                    placeholder="Please enter user name"
                                />
                            </Box>

                            <Box>
                                <FormLabel htmlFor="url">Url</FormLabel>
                                <InputGroup>
                                    <InputLeftAddon>http://</InputLeftAddon>
                                    <Input
                                        type="url"
                                        id="url"
                                        placeholder="Please enter password"
                                        rounded="0"
                                    />
                                    <InputRightAddon>.com</InputRightAddon>
                                </InputGroup>
                            </Box>

                            <Box>
                                <FormLabel htmlFor="owner">Select Owner</FormLabel>
                                <Select id="owner" defaultValue="segun">
                                    <option value="segun">Segun Adebayo</option>
                                    <option value="kola">Kola Tioluwani</option>
                                </Select>
                            </Box>

                            <Box>
                                <FormLabel htmlFor="desc">Description</FormLabel>
                                <Textarea id="desc" />
                            </Box>
                        </Stack>
                    </DrawerBody>

                    <DrawerFooter borderTopWidth="1px">
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
              </Button>
                        <Button variantColor="blue">Submit</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}
export default DrawerExample