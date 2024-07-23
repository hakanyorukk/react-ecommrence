/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useCarts } from "../features/cart/useCarts";
import SideCart from "../features/cart/SideCart";

const StyledAppLayout = styled.div`
  grid-template-columns: 1fr auto;
  display: grid;
`;

const MainPage = styled.div`
  //grid-template-rows: 6rem auto 30rem;
`;

const Main = styled.main`
  height: 100vh;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled.div`
  grid-template-columns: 1fr;
  margin: 0 auto;
  padding: 4rem 4.8rem 6.4rem;

  gap: 3.2rem;
`;

function AppLayout() {
  const { isLoading, data, error } = useCarts();
  //console.log(data?.length);

  return (
    <>
      <StyledAppLayout>
        <MainPage>
          <Header />
          <Main>
            <Container>
              <Outlet />
            </Container>
            <Footer />
          </Main>
        </MainPage>
        {data?.length > 0 ? (
          <SideCart
            data={data}
            isOpen={data?.length > 0}
            isLoading={isLoading}
          />
        ) : (
          ""
        )}
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
