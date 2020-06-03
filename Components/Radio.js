import React from 'react';
import { Radio, RadioGroup, Button, RadioButtonGroup } from "@chakra-ui/core";
// Step 1: Create a component that accepts `isChecked` and `isDisabled` prop
const CustomRadio = React.forwardRef((props, ref) => {
    const { isChecked, isDisabled, value, ...rest } = props;
    return (
        <Button
            ref={ref}
            variantColor={isChecked ? "red" : "gray"}
            aria-checked={isChecked}
            role="radio"
            isDisabled={isDisabled}
            {...rest}
        />
    );
});

// Step 2: Add `CustomRadio` as children of `RadioButtonGroup`
function Example() {
    return (
        <RadioButtonGroup
            defaultValue="rad2"
            onChange={val => console.log(val)}
            isInline
        >
            <CustomRadio value="rad1">CustomRadio 1</CustomRadio>
            <CustomRadio value="rad2">CustomRadio 2</CustomRadio>
            <CustomRadio value="rad3">CustomRadio 3</CustomRadio>
            {/* This child will be skipped in keyboard navigation */}
            <CustomRadio isDisabled value="rad4">
                CustomRadio 4
        </CustomRadio>
        </RadioButtonGroup>
    );
}

export default Example