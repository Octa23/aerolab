import {Button, Divider, Icon, Image, SimpleGrid, Stack, Text} from "@chakra-ui/react";
import React, {useState, useEffect} from "react";

import {helpHttp} from "../helpers/helpHttp";

import ProductItem from "./ProducItem";

const url = "https://coding-challenge-api.aerolab.co/products";

const ProductList = () => {
  let {get, post, put, del} = helpHttp();
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const handlepage = () => {
    {
      page === 1 ? setPage(2) : setPage(1);
    }
  };

  useEffect(() => {
    get(url).then((response) => {
      setItems(response);
    });
  }, []);
  const Totalitems = items.length;

  // console.log(items);

  return (
    <>
      <Stack direction={"row"} py={5}>
        <Stack alignItems={"center"} direction={"row"} spacing={5} width={"100%"}>
          <Text color={"blackAlpha.600"} fontWeight={700}>
            {page === 1 ? Totalitems / 2 : Totalitems} of {Totalitems} products
          </Text>

          <Divider borderColor={"blackAlpha.300"} height={6} orientation="vertical" />
          <Text color={"blackAlpha.500"}>Sort by:</Text>
          <Button borderRadius={15} color={"blackAlpha.500"} height={9}>
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
        {items.map((item, index) =>
          index + 1 <= Totalitems / 2 && page === 1 ? (
            <ProductItem key={item.id} item={item} />
          ) : (
            page === 2 && index + 1 > Totalitems / 2 && <ProductItem key={item.id} item={item} />
          ),
        )}
      </SimpleGrid>
      <Stack direction={"row"} pb={4} pt={10}>
        <Stack justifyContent={"space-between"} alignItems={"center"} direction={"row"} spacing={5} width={"100%"}>
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
