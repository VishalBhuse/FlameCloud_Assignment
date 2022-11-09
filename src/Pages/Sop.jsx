import { Box } from "@chakra-ui/react";
import React, { useState } from "react";

import { FirstBox } from "../Components/FirstBox";
import { SecondBox } from "../Components/SecondBox";

export const Sop = () => {
  const [list, setList] = useState(["marketing", "design", "sales"]);
  return (
    <Box w="90%" m="auto">
      <FirstBox list={list} setList={setList} />

      <SecondBox list={list} setList={setList} />
    </Box>
  );
};
