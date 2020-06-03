import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    MenuOptionGroup,
    MenuItemOption,
    Button
} from "@chakra-ui/core";
function menu() {
    return (
        <Menu closeOnSelect={false}>
            <MenuButton as={Button} variantColor="blue">
                MenuItem
            </MenuButton>
            <MenuList minWidth="240px">
                <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
                    <MenuItemOption value="asc">Ascending</MenuItemOption>
                    <MenuItemOption value="desc">Descending</MenuItemOption>
                </MenuOptionGroup>
                <MenuDivider />
                <MenuOptionGroup title="Country" type="checkbox">
                    <MenuItemOption value="email">Email</MenuItemOption>
                    <MenuItemOption value="phone">Phone</MenuItemOption>
                    <MenuItemOption value="country">Country</MenuItemOption>
                </MenuOptionGroup>
            </MenuList>
        </Menu>
    )
}
export default menu