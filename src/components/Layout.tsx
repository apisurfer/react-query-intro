import { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import { Box, Center, Container } from "@chakra-ui/react";

export const Layout: FC = () => {
  return (
    <>
      <Center>
        <Container my={10}>
          <Box my={5}>
            <Link to="/" color="red">
              Examples
            </Link>
          </Box>
          <Outlet />
        </Container>
      </Center>
    </>
  );
};
