import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const DateFormatter = (date) => {
  const day = date.split("T");
  const hour = day[1].split(".");

  return {day: day[0], hour: hour[0]};
};

const History = ({isOpen, onClose, data}) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="2px">Redeem History</DrawerHeader>
        <DrawerBody px={2}>
          <Stack direction={"column-reverse"}>
            {data &&
              data.map((el) => (
                <Box key={el.createDate} borderBottomWidth="1px">
                  <Stack alignItems={"center"} direction={"row"}>
                    <Image alt={el.name} src={el.img.url} width={"40%"} />
                    <Stack spacing={0}>
                      <Text lineHeight={1} pb={1}>
                        {el.name}
                      </Text>
                      <Text>{DateFormatter(el.createDate).day}</Text>
                      <Text>{DateFormatter(el.createDate).hour}</Text>
                    </Stack>
                  </Stack>
                </Box>
              ))}
            <Box />
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default History;
