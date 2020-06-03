import React from 'react';
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Box
} from "@chakra-ui/core";
import { MdGraphicEq } from "react-icons/md"
function skeleton() {
    return (
        <>
            <Slider defaultValue={30}>
                <SliderTrack bg="red.100" />
                <SliderFilledTrack bg="tomato" />
                <SliderThumb size={6}>
                    <Box color="tomato" as={MdGraphicEq} />
                </SliderThumb>
            </Slider>
        </>
    )
}
export default skeleton