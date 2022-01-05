import {Box, Divider, Image, Stack, Text} from "@chakra-ui/react";
import React from "react";

const ProductItem = ({item}) => {
  console.log(item);

  return (
    <Box bgColor={"white"} boxShadow={"md"}>
      <Image margin={"auto"} p={2} src={item.img.url} width={"100%"} />
      <Stack pb={5} px={7}>
        <Divider />
        <Stack spacing={0}>
          <Text color={"blackAlpha.600"}>{item.category}</Text>
          <Text>{item.name}</Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProductItem;
