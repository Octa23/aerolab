import {Button, chakra, Divider, Image, SimpleGrid, Stack, Text} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {useState} from "react";

import useItems from "../hooks/useItems";

const ProductList = () => {
  const {List, Totalitems, page, handlepage} = useItems();
  const [sort, setSort] = useState(null);
  const MotionBox = chakra(motion.div);

  return (
    <>
      <Stack direction={"row"} gap={{base: 5, md: 0}} py={5} wrap={"wrap"}>
        <Stack alignItems={"center"} direction={"row"} flex={[1, 1, 0]} spacing={5}>
          <Text color={"blackAlpha.600"} fontWeight={500} width="max">
            {page === 1 ? Totalitems / 2 : Totalitems} of {Totalitems} products
          </Text>
          <Divider borderColor={"blackAlpha.300"} height={6} orientation="vertical" />
        </Stack>
        <Stack
          alignItems={{base: "stretch", md: "center"}}
          direction={{base: "column", md: "row"}}
          flex={1}
          flexBasis={{base: "100%", md: "auto"}}
          order={{base: -1, md: 0}}
        >
          <Text color={"blackAlpha.500"}>Sort by:</Text>
          <Button
            bgColor={sort === null && "primary"}
            borderRadius={15}
            color={sort === null ? "white" : "blackAlpha.500"}
            height={9}
            onClick={() => setSort(null)}
          >
            Most Recent
          </Button>
          <Button
            bgColor={sort === 1 && "primary"}
            borderRadius={15}
            color={sort === 1 ? "white" : "blackAlpha.500"}
            height={9}
            onClick={() => setSort(1)}
          >
            Lower price
          </Button>
          <Button
            bgColor={sort === 2 && "primary"}
            borderRadius={15}
            color={sort === 2 ? "white" : "blackAlpha.500"}
            height={9}
            onClick={() => setSort(2)}
          >
            Highest price
          </Button>
        </Stack>
        <Stack>
          {page === 1 ? (
            <Image minWidth={10} src={"/arrow-right.svg"} width={10} onClick={handlepage} />
          ) : (
            <Image minWidth={10} src={"/arrow-left.svg"} width={10} onClick={handlepage} />
          )}
        </Stack>
      </Stack>
      <Divider mb={8} />
      <MotionBox animate={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}}>
        <SimpleGrid animate={{x: [0, 100, 0]}} columns={{base: 2, lg: 4}} spacing={4}>
          <List sort={sort} />
        </SimpleGrid>
      </MotionBox>
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
