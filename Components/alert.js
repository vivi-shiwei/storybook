import React from 'react';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton
} from "@chakra-ui/core";
const alert = () => {
    return (
        <>
            <Alert
                status="success"
                variant="subtle"
                flexDirection="column"
                justifyContent="center"
                textAlign="center"
                height="200px"
            >
                <AlertIcon size="40px" mr={0} />
                <AlertTitle mt={4} mb={1} fontSize="lg">
                    Application submitted!
            </AlertTitle>
                <AlertDescription maxWidth="sm">
                    Thanks for submitting your application. Our team will get back to you soon.
            </AlertDescription>
            </Alert>
        </>
    )
}
export default alert