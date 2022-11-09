import { Icon } from "@chakra-ui/react";
import { FcManager } from "react-icons/fc";
export const labelOption = [
  {
    value: "Aryan",
    label: "Aryan",
    icon: <Icon as={FcManager} color="red.600" mr={2} h={5} w={5} />,
  },
  {
    value: "Karan",
    label: "Karan",
    icon: <Icon as={FcManager} color="red.600" mr={2} h={5} w={5} />,
  },
  {
    value: "Kishan",
    label: "Kishan",
    icon: <Icon as={FcManager} color="red.600" mr={2} h={5} w={5} />,
  },
  {
    value: "Rishi",
    label: "Rishi",
    icon: <Icon as={FcManager} color="red.600" mr={2} h={5} w={5} />,
  },
];

export const groupedOptions = [
  {
    label: "Select Members",
    options: labelOption,
  },
];

export const pointer = ["pointer 1", "pointer 2", "pointer 3"];

export const category = [
  {
    name: "Marketing",
    id: 1,
  },
  {
    name: "Design",
    id: 2,
  },
  {
    name: "Sales",
    id: 3,
  },
];
