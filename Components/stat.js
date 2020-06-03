import React from 'react';
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
} from "@chakra-ui/core";
import { MdGraphicEq } from "react-icons/md"
function stat() {
    return (
        <>
            <StatGroup>
                <Stat>
                    <StatLabel>Sent</StatLabel>
                    <StatNumber>345,670</StatNumber>
                    <StatHelpText>
                        <StatArrow type="increase" />
                        23.36%
                    </StatHelpText>
                </Stat>

                <Stat>
                    <StatLabel>Clicked</StatLabel>
                    <StatNumber>45</StatNumber>
                    <StatHelpText>
                        <StatArrow type="decrease" />
                        9.05%
                    </StatHelpText>
                </Stat>
            </StatGroup>
        </>
    )
}
export default stat