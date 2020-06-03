import React from 'react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    Scale,
    AlertDialogCloseButton,
    useDisclosure
} from "@chakra-ui/core";

function TransitionExample() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const cancelRef = React.useRef();

    return (
        <>
            <Button ref={btnRef} onClick={onOpen}>
                Discard
            </Button>
            {/* You can swap the `Scale` with `SlideIn` to see a different transition */}
            <Scale in={isOpen}>
                {styles => (
                    <AlertDialog
                        leastDestructiveRef={cancelRef}
                        finalFocusRef={btnRef}
                        onClose={onClose}
                        isOpen={true}
                    >
                        <AlertDialogOverlay opacity={styles.opacity} />
                        <AlertDialogContent {...styles}>
                            <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
                            <AlertDialogCloseButton />
                            <AlertDialogBody>
                                Are you sure you want to discard all of your notes? 44 words
                                will be deleted.
                            </AlertDialogBody>
                            <AlertDialogFooter>
                                <Button ref={cancelRef} onClick={onClose}>
                                    No
                                </Button>
                                <Button variantColor="red" ml={3}>
                                    Yes
                                </Button>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                )}
            </Scale>
        </>
    );
}
export default TransitionExample