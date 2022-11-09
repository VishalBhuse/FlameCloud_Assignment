import React, { useState } from "react";
import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { BsCaretRightFill, BsThreeDotsVertical, BsEye } from "react-icons/bs";
import { TbGridDots } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { pointer } from "../Data/data";

export const AccordionPanels = () => {
  const [pointertext, setpointertext] = useState(pointer);
  const [text, setText] = useState("");

  const {
    isOpen: isPointerOpen,
    onOpen: onPointerOpen,
    onClose: onPointerClose,
  } = useDisclosure();

  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();

  const handleAdd = () => {
    setpointertext([...pointertext, text]);
    setText("");
    onPointerClose();
  };

  return (
    <>
      <AccordionPanel pb={4} w="95%" m="auto">
        {pointertext.map((item) => (
          <AccordionItem key={item}>
            <AccordionButton
              border="1px solid grey"
              bg="#F8FAFC"
              borderRadius={"5px"}
              mb="2"
              textTransform={"capitalize"}
            >
              <Box mr="5">
                <TbGridDots />
              </Box>
              <Box flex="1" fontWeight="400" color="#2563EB" textAlign="left">
                {item}
              </Box>
              <Box mr="5">
                <BsEye />
              </Box>
              <Box mr="5">
                <Menu>
                  <MenuButton rightIcon={<BsCaretRightFill />}>
                    <BsThreeDotsVertical />
                  </MenuButton>
                  <MenuList fontSize={"14px"} fontWeight="700">
                    <MenuItem>Edit Sub-Category</MenuItem>
                    <MenuItem bg={"#FEF2F2"} color="red" onClick={onDeleteOpen}>
                      Delete
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </AccordionButton>
          </AccordionItem>
        ))}
        <HStack spacing={"4"}>
          <Button
            colorScheme="blue"
            size={"sm"}
            variant="outline"
            onClick={onPointerOpen}
            textTransform="capitalize"
          >
            <AiOutlinePlus />
            Add Pointer
          </Button>
          <Button
            textTransform="capitalize"
            colorScheme="blue"
            size={"sm"}
            variant="outline"
          >
            <AiOutlinePlus />
            ON hover
          </Button>
        </HStack>
      </AccordionPanel>

      {/* create Pointer modal */}
      <Modal isOpen={isPointerOpen} onClose={onPointerClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text>Pointer Name</Text>
            <Text fontWeight={"400"} fontSize="15px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit Tempora a
              quibusdam quis aperiam fuga? Aut!
            </Text>
          </ModalHeader>
          <ModalBody textTransform={"capitalize"}>
            <Box mb="2">
              <Text fontWeight={500} color="#2563EB" mb="1">
                Name
              </Text>
              <Input
                placeholder="Enter Your Name"
                onChange={(e) => setText(e.target.value)}
              />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              w="30%"
              colorScheme="red"
              variant={"outline"}
              mr={3}
              onClick={onPointerClose}
            >
              Cancel
            </Button>
            <Button w="30%" colorScheme="blue" onClick={() => handleAdd()}>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

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
