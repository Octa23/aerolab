import {Box, Button, Center, Divider, Image, Stack, Text} from "@chakra-ui/react";
import {useState, useContext} from "react";

import UserContext from "../context/UserContext";
import {helpHttp} from "../helpers/helpHttp";

const ProductItem = ({item}) => {
  const data = useContext(UserContext);
  const {setUser, user} = data;
  const [hover, sethover] = useState(false);
  const handleredeem = () => {
    const {post} = helpHttp();
    const url = "https://coding-challenge-api.aerolab.co/redeem";
    const options = {
      body: {productId: item._id},
    };

    post(url, options).then(() => {
      setUser({...user, points: user.points - item.cost});
    });
  };

  return (
    <Box
      bgColor={"white"}
      boxShadow={"md"}
      position={"relative"}
      onMouseEnter={() => {
        sethover(true);
      }}
      onMouseLeave={() => {
        sethover(false);
      }}
    >
      {hover && item.cost <= user.points && (
        <Box backgroundColor="rgba(21,219,255, .8)" h={"100%"} position={"absolute"} width={"100%"}>
          <Stack alignItems={"center"} position={"relative"} top={"30%"}>
            <Stack direction={"row"} fontSize={"4xl"}>
              <Text color={"white"}>{item.cost}</Text>
              <Image
                alignSelf={"end"}
                alt="Coin"
                height={"45px"}
                src={"/coin.svg"}
                width={"40px"}
              />
            </Stack>
            <Button
              borderRadius={99}
              fontSize={"xl"}
              height={"50px"}
              width={"85%"}
              onClick={handleredeem}
            >
              Redeem now
            </Button>
          </Stack>
        </Box>
      )}
      <Image margin={"auto"} p={2} src={item.img.url} width={"100%"} />
      {user && item.cost <= user.points && !hover ? (
        <Image
          cursor={"pointer"}
          position={"absolute"}
          right={"10px"}
          src="/buy-blue.svg"
          top={"10px"}
          onClick={handleredeem}
        />
      ) : user && item.cost <= user.points && hover ? (
        <Image
          cursor={"pointer"}
          position={"absolute"}
          right={"5px"}
          src="/buy-white.svg"
          top={"7px"}
        />
      ) : (
        <Stack
          alignItems={"end"}
          bg={"blackAlpha.600"}
          borderRadius={20}
          color={"white"}
          direction={"row"}
          fontSize={"sm"}
          p={2}
          position={"absolute"}
          right={"10px"}
          top={"10px"}
        >
          <Text>You need {user && item.cost - user.points}</Text>
          <Image src="/coin.svg" width={5} />
        </Stack>
      )}
      <Stack pb={5} px={7}>
        {!hover || item.cost >= user.points ? <Divider /> : null}
        <Stack spacing={0}>
          <Text color={"blackAlpha.600"}>{item.category}</Text>
          <Text>{item.name}</Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProductItem;
