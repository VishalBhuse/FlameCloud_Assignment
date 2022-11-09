import React, { useRef } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import {
  BsCaretRightFill,
  BsThreeDotsVertical,
  BsPlusSquare,
} from "react-icons/bs";
import { TbGridDots } from "react-icons/tb";
import { FiMinusSquare } from "react-icons/fi";
import { AccordionPanels } from "./AccordionPanel";

export const SecondBox = ({ list, setList }) => {
  const dragItem = useRef();
  const dragOverItem = useRef();

  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();
  const dragStart = (e, position) => {
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const drop = (e) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };

  return (
    <>
      <Box mt="10">
        <Accordion allowMultiple>
          {list.map((accord, index) => (
            <AccordionItem
              border="none"
              onDragStart={(e) => dragStart(e, index)}
              onDragEnter={(e) => dragEnter(e, index)}
              onDragEnd={drop}
              key={index}
              draggable
            >
              <AccordionButton _expanded={{ bg: "#F8FAFC", color: "#000" }}>
                <Box mr="5">
                  <TbGridDots />
                </Box>
                <Box
                  flex="1"
                  fontWeight="600"
                  textAlign="left"
                  textTransform={"capitalize"}
                >
                  {accord}
                </Box>
                <Box mr="5">
                  <Menu>
                    <MenuButton rightIcon={<BsCaretRightFill />}>
                      <BsThreeDotsVertical />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Edit Category</MenuItem>
                      <MenuItem>Manage Access</MenuItem>
                      <MenuItem
                        bg={"#FEF2F2"}
                        color="red"
                        onClick={onDeleteOpen}
                      >
                        Delete
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel p="0">
                {/* wordpress */}
                <AccordionItem border="none">
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton>
                        <Box mr="5">
                          {isExpanded ? (
                            <FiMinusSquare fontSize={"20px"} />
                          ) : (
                            <BsPlusSquare fontSize={"20px"} bg="#F8FAFC" />
                          )}
                        </Box>
                        <Box flex="1" fontWeight="600" textAlign="left">
                          Wordpress
                        </Box>
                        <Box mr="5">
                          <Menu>
                            <MenuButton rightIcon={<BsCaretRightFill />}>
                              <BsThreeDotsVertical />
                            </MenuButton>
                            <MenuList fontSize={"14px"} fontWeight="700">
                              <MenuItem>Edit Sub-Category</MenuItem>
                              <MenuItem
                                bg={"#FEF2F2"}
                                color="red"
                                onClick={onDeleteOpen}
                              >
                                Delete
                              </MenuItem>
                            </MenuList>
                          </Menu>
                        </Box>
                      </AccordionButton>

                      <AccordionPanels />
                    </>
                  )}
                </AccordionItem>

                {/* googledrive */}
                <AccordionItem border="none">
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton>
                        <Box mr="5">
                          {isExpanded ? (
                            <FiMinusSquare fontSize={"20px"} />
                          ) : (
                            <BsPlusSquare fontSize={"20px"} />
                          )}
                        </Box>
                        <Box flex="1" fontWeight="600" textAlign="left">
                          Google Drive
                        </Box>
                        <Box mr="5">
                          <Menu>
                            <MenuButton rightIcon={<BsCaretRightFill />}>
                              <BsThreeDotsVertical />
                            </MenuButton>
                            <MenuList fontSize={"14px"} fontWeight="700">
                              <MenuItem>Edit Sub-Category</MenuItem>
                              <MenuItem
                                bg={"#FEF2F2"}
                                color="red"
                                onClick={onDeleteOpen}
                              >
                                Delete
                              </MenuItem>
                            </MenuList>
                          </Menu>
                        </Box>
                      </AccordionButton>

                      <AccordionPanels />
                    </>
                  )}
                </AccordionItem>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>

      {/* delete modal */}
      <Modal isOpen={isDeleteOpen} onClose={onDeleteClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text>Delete Category or / Sub Category</Text>
            <Text fontWeight={"400"} fontSize="12px">
              Are you sure you want to delete this learning. this step cannot be
              undone.
            </Text>
          </ModalHeader>
          <ModalFooter>
            <Button
              w="30%"
              colorScheme="red"
              variant={"outline"}
              mr={3}
              onClick={onDeleteClose}
            >
              Cancel
            </Button>
            <Button w="30%" colorScheme="blue">
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
