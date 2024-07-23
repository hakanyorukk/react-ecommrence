import styled from "styled-components";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import { useState } from "react";
import OrderButton from "../../ui/OrderButton";
import { useCreateOrder } from "./useCreateOrder";
import { useCarts } from "../cart/useCarts";
//import { useForm, handleSubmit } from "react-hook-form";
import { useDeleteAllCart } from "../cart/useDeleteCart";
import { useNavigate } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import toast from "react-hot-toast";
import FullPage from "../../ui/FullPage";
import { DotLoader } from "react-spinners";

const StyledCreateOrder = styled.div`
  background-color: var(--color-grey-100);
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 60%;
  margin: 5rem auto;
  border-radius: 2rem;

  h2 {
    padding: 2rem 4rem;
  }
  h3 {
    color: var(--color-green-700);
    padding: 1rem 4rem;
  }
`;

const StyledButton = styled.div`
  margin-bottom: 4rem;
  margin-right: 2rem;
  justify-content: flex-end;
  display: flex;
`;

function OrderForm() {
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAdress] = useState("");
  const { isAdding, createOrder } = useCreateOrder();
  const { isLoading, data, error } = useCarts();
  const { isDeleting, deleteAllCart } = useDeleteAllCart();
  const navigate = useNavigate();
  // console.log(data);
  const orderId = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;

  const title = data.map((i) => {
    return { title: i.title };
  });

  const totalProductsPrice = data
    ?.map((i) => i.totalPrice)
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);

  const image = data.map((i) => {
    return { image: i.image };
  });

  const quantity = data.map((i) => {
    return { quantity: i.quantity };
  });

  const productId = data.map((i) => {
    return { productId: i.productId };
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (data?.length > 0) {
      createOrder({
        titles: title,
        totalAllPrice: totalProductsPrice,
        images: image,
        quantaties: quantity,
        address: address,
        firstName: firstName,
        phone: phoneNumber,
        orderId: orderId,
        productId: productId,
      });
      if (isDeleting && isLoading && isAdding)
        return (
          <DotLoader
            size={65}
            color="var(--color-brand-600)"
            loading={true}
            speedMultiplier={1.5}
          />
        );
      navigateNewPage();
    } else {
      throw new Error(toast.error("Empty cart"));
    }
  }
  function navigateNewPage() {
    navigate("/account");
    deleteAllCart(data.map((i) => i.id));
  }

  //deleteAllCart(data.map((i) => i.id));

  return (
    <StyledCreateOrder>
      <h2>Ready to order? Let&apos;s go!</h2>
      <Form onSubmit={handleSubmit}>
        <FormRowVertical label="First Name:">
          <Input
            required
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></Input>
        </FormRowVertical>

        <FormRowVertical label="Phone Number:">
          <Input
            required
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></Input>
        </FormRowVertical>

        <FormRowVertical label="Adress:">
          <Input
            required
            type="text"
            value={address}
            onChange={(e) => setAdress(e.target.value)}
          ></Input>
        </FormRowVertical>
        <h3>Free shipping on all orders</h3>
        <StyledButton>
          <OrderButton
          // onClick={() => {
          //   createOrder({
          //     titles: title,
          //     totalAllPrice: totalProductsPrice,
          //     images: image,
          //     quantaties: quantity,
          //     address: address,
          //     firstName: firstName,
          //     phone: phoneNumber,
          //     orderId: orderId,
          //   });
          //   navigateNewPage();
          // }}
          >
            Order now {Math.round(totalProductsPrice)}$
          </OrderButton>
        </StyledButton>
      </Form>
    </StyledCreateOrder>
  );
}

export default OrderForm;
