import React from 'react';
import { Skeleton } from "@chakra-ui/core";
function skeleton() {
    return (
        <>
            <div>
                <Skeleton height="20px" my="10px" />
                <Skeleton height="20px" my="10px" />
                <Skeleton height="20px" my="10px" />
            </div>
        </>
    )
}
export default skeleton