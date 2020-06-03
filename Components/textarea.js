import React from 'react';
import { Textarea, Radio, RadioGroup } from "@chakra-ui/core";
function ResizeExample() {
    const [resize, setResize] = React.useState("horizontal");
    const handleResizeChange = event => setResize(event.target.value);

    return (
        <>
            <RadioGroup
                isInline
                spacing={5}
                defaultValue={resize}
                onChange={handleResizeChange}
                mb={6}
            >
                <Radio value="horizontal">Horizontal</Radio>
                <Radio value="vertical">Vertical</Radio>
                <Radio value="none">None</Radio>
            </RadioGroup>

            <Textarea
                placeholder="Here is a sample placeholder"
                size="sm"
                resize={resize}
            />
        </>
    );
}
export default ResizeExample