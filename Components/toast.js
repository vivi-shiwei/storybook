import React from 'react';
import { useToast, Button } from "@chakra-ui/core";
function PositionExample() {
    const toast = useToast();
    return (
        <Button
            onClick={() =>
                toast({
                    position: "bottom-left",
                    title: "Account created.",
                    description: "We've created your account for you.",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                })
            }
        >
            Show Toast
        </Button>
    );
}
export default PositionExample