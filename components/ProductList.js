import {Button, Divider, Image, SimpleGrid, Stack, Text} from "@chakra-ui/react";

import useItems from "../hooks/useItems";

const ProductList = () => {
  const {List, Totalitems, page, handlepage} = useItems();

  return (
    <>
      <Stack direction={"row"} py={5}>
        <Stack alignItems={"center"} direction={"row"} spacing={5} width={"100%"}>
          <Text color={"blackAlpha.600"} fontWeight={500}>
            {page === 1 ? Totalitems / 2 : Totalitems} of {Totalitems} products
          </Text>
          <Divider borderColor={"blackAlpha.300"} height={6} orientation="vertical" />
          <Text color={"blackAlpha.500"}>Sort by:</Text>
          <Button bg={"rgb(21,219,255)"} borderRadius={15} color={"white"} height={9}>
            Most Recent
          </Button>
          <Button borderRadius={15} color={"blackAlpha.500"} height={9}>
            Lower price
          </Button>
          <Button borderRadius={15} color={"blackAlpha.500"} height={9}>
            Highest price
          </Button>
        </Stack>
        <Stack>
          {page === 1 ? (
            <Image src={"/arrow-right.svg"} width={10} onClick={handlepage} />
          ) : (
            <Image src={"/arrow-left.svg"} width={10} onClick={handlepage} />
          )}
        </Stack>
      </Stack>
      <Divider mb={8} />
      <SimpleGrid columns={{base: 2, lg: 4}} spacing={{base: 2, lg: 5}}>
        <List />
      </SimpleGrid>
      <Stack direction={"row"} pb={4} pt={10}>
        <Stack
          alignItems={"center"}
          direction={"row"}
          justifyContent={"space-between"}
          spacing={5}
          width={"100%"}
        >
          <Text color={"blackAlpha.600"} fontWeight={700}>
            {page === 1 ? Totalitems / 2 : Totalitems} of {Totalitems} products
          </Text>
          {page === 1 ? (
            <Image src={"/arrow-right.svg"} width={10} onClick={handlepage} />
          ) : (
            <Image src={"/arrow-left.svg"} width={10} onClick={handlepage} />
          )}
        </Stack>
      </Stack>
      <Divider />
    </>
  );
};

export default ProductList;
