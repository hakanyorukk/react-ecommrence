import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
//import ProtectedRoute from "./ui/ProtectedRoute";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Login from "./pages/Login";
import Products from "./pages/Products";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Product from "./pages/Product";
import { Toaster } from "react-hot-toast";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import ProtectedRoute from "./ui/ProtectedRoute";
import Order from "./pages/Order";

//Protected layout for order pages, account,

// For products and product detail no need proteceted layout

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 0 } },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="products" />} />
              <Route path="products" element={<Products />} />
              <Route path="products/:productId" element={<Product />} />
              <Route path="cart" element={<Cart />} />
              <Route
                path="account"
                element={
                  <ProtectedRoute>
                    <Account />
                  </ProtectedRoute>
                }
              />
              <Route
                path="order"
                element={
                  <ProtectedRoute>
                    <Order />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>

        <Toaster
          position="left-bottom"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: "20px",
              maxWidth: "500px",
              padding: "25px",
              backgroundColor: "var(--color-grey-700)",
              color: "var(--color-grey-50)",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
