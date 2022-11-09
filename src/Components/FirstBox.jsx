import {
  Box,
  Button,
  HStack,
  Stack,
  Input,
  Text,
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Select, chakraComponents } from "chakra-react-select";
import { MdPeople } from "react-icons/md";
import { BiPlusCircle } from "react-icons/bi";
import { groupedOptions } from "../Data/data";

const customComponents = {
  Option: ({ children, ...props }) => (
    <chakraComponents.Option {...props}>
      {props.data.icon} {children}
    </chakraComponents.Option>
  ),
};

export const FirstBox = ({ list, setList }) => {
  const [text, setText] = useState("");

  const {
    isOpen: isManageOpen,
    onOpen: onManageOpen,
    onClose: onManageClose,
  } = useDisclosure();

  const {
    isOpen: isPlanOpen,
    onOpen: onPlanOpen,
    onClose: onPlanClose,
  } = useDisclosure();

  const handleAdd = () => {
    setList([...list, text]);
    setText("");
    onPlanClose();
  };
  return (
    <>
      <Box m="5px">
        <Text fontSize={"17px"} textTransform="capitalize">
          sop
        </Text>
        <HStack alignItems={"center"} justifyContent="space-between">
          <Box>
            <Text fontWeight={"bold"} fontSize="1.5rem">
              Action Plans
            </Text>
          </Box>
          <Box>
            <Stack direction="row" spacing={4}>
              <Button
                leftIcon={<MdPeople />}
                colorScheme="blue"
                variant="outline"
                onClick={onManageOpen}
              >
                Manage Access
              </Button>

              <Button
                leftIcon={<BiPlusCircle style={{ backgroundColor: "blue" }} />}
                colorScheme="blue"
                variant="solid"
                onClick={onPlanOpen}
              >
                New Plan
              </Button>
            </Stack>
          </Box>
        </HStack>
      </Box>

      {/* modal manage access */}
      <Modal isOpen={isManageOpen} onClose={onManageClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>SOP Access</ModalHeader>
          <ModalBody textTransform={"capitalize"}>
            <Box mb="2">
              <Text fontWeight={500} color="#2563EB" mb="1">
                sales
              </Text>
              <Select
                isMulti
                name="colors"
                options={groupedOptions}
                placeholder="Select Members"
                closeMenuOnSelect={false}
                components={customComponents}
                size="sm"
              />
            </Box>
            <Box mb="2">
              <Text fontWeight={500} color="blue" mb="1">
                Marketing
              </Text>
              <Select
                isMulti
                name="colors"
                options={groupedOptions}
                placeholder="Select Members"
                closeMenuOnSelect={false}
                components={customComponents}
                size="sm"
              />
            </Box>
            <Box mb="2">
              <Text fontWeight={500} color="blue" mb="1">
                Design
              </Text>
              <Select
                isMulti
                name="colors"
                options={groupedOptions}
                placeholder="Select Members"
                closeMenuOnSelect={false}
                components={customComponents}
                size="sm"
              />
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              w="30%"
              colorScheme="red"
              variant={"outline"}
              mr={3}
              onClick={onManageClose}
            >
              Cancel
            </Button>
            <Button w="30%" colorScheme="blue">
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* modal new plan */}
      <Modal isOpen={isPlanOpen} onClose={onPlanClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text>Plan Name</Text>
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
                value={text}
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
              onClick={onPlanClose}
            >
              Cancel
            </Button>
            <Button w="30%" colorScheme="blue" onClick={() => handleAdd()}>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
