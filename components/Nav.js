import {Box, HStack, Image, Stack, Text} from "@chakra-ui/react";
import {useContext} from "react";

import {helpHttp} from "../helpers/helpHttp";
import UserContext from "../context/UserContext";

const Nav = () => {
  const data = useContext(UserContext);
  const {setUser, user} = data;

  const handlepoints = () => {
    const {post} = helpHttp();
    const url = "https://coding-challenge-api.aerolab.co/user/points";
    const options = {
      body: {amount: 1000},
    };

    post(url, options).then(() => {
      setUser({...user, points: user.points + 1000});
    });
  };

  return (
    <Box>
      <Stack
        alignItems={"center"}
        direction={"row"}
        fontSize={"xl"}
        justifyContent={"space-between"}
        px={8}
        py={4}
      >
        <Image alt="Aerolab Icon" src={"/aerolab-logo.svg"} width={"40px"} />
        <Stack alignItems={"center"} color={"blackAlpha.700"} direction={"row"}>
          <Text>{!user ? "Cargando" : user.name}</Text>
          <HStack
            bg={"blackAlpha.200"}
            borderRadius={20}
            cursor={"pointer"}
            px={3}
            py={2}
            onClick={handlepoints}
          >
            {" "}
            <Text>{!user ? "Cargando" : user.points}</Text>
            <Image alt="Coin" boxSize="30px" objectPosition={"0px 2px"} src={"/coin.svg"} />
          </HStack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Nav;
