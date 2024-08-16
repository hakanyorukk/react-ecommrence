/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import { useCarts } from "../features/cart/useCarts";
import SideCart from "../features/cart/SideCart";
import { useEffect } from "react";

const StyledAppLayout = styled.div`
  grid-template-columns: 1fr auto;
  display: grid;
  // flex-direction: column;
  //height: 100vh;
`;

const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  flex: 1;
  margin: 4rem 10rem;
  display: flex;
  flex-direction: column;
  //border: 2px solid red;
`;

function AppLayout() {
  const { isLoading, data, error } = useCarts();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
          </Main>
          <Footer />
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
