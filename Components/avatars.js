import React from 'react';
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/core";

const avatar = () => {
    return (
        <>
            <AvatarGroup size="md" max={2}>
                <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
                <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
                <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            </AvatarGroup>
        </>
    )
}
export default avatar