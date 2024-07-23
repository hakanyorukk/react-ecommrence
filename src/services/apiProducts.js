//const API_URL = "https://api.escuelajs.co/api/v1";
import toast from "react-hot-toast";
import supabase from "./supabase";

//const API_URL = "https://fakestoreapi.com";

//'https://dummyjson.com/products/search?q=phone'

const API_URL = "https://dummyjson.com";

export async function getProducts({ category, search }) {
  if (category || !search) {
    const res = await fetch(
      `${API_URL}/products${category ? `/category/${category.value}` : ""}`
    );
    if (!res.ok) throw Error("Failed getting products");
    const data = await res.json();
    console.log(data);

    return data;
  }

  if (search || !category) {
    const res = await fetch(
      `${API_URL}/products${search ? `/search?q=${search.value}` : ""}`
    );
    if (!res.ok) throw Error("Filed getting search results.");
    const data = await res.json();
    return data;
  }
}

export async function getCategories() {
  const res = await fetch(`${API_URL}/products/categories`);
  if (!res.ok) throw Error("Failed getting categories");
  const data = await res.json();
  //console.log(data);
  return data;
}
//'https://dummyjson.com/products/1'
export async function getSingleProduct(id) {
  const res = await fetch(`${API_URL}/products/${id}`);
  if (!res.ok) throw Error("Failed getting single product by matching id.");
  const data = await res.json();

  return data;
}
//{
//   productId: id,
//   image,
//   price,
//   shippingInformation,
//   title,
// }
export async function addEditCart(newCart) {
  //MQkxRn5fYIMK1FCn
  // 1. Create Product
  let query = supabase.from("cart");

  //A create
  query = query.insert([{ ...newCart }]);
  const { data, error } = await query.select();

  if (error) {
    console.log(error);
    throw new Error("Product could not be added to the cart.");
  }
  return data;
}

export async function getCarts() {
  let { data: cart, error } = await supabase
    .from("cart")
    .select("id,price,title,productId,image,quantity,totalPrice,stock");

  if (error) {
    console.log(error);
    throw new Error("Carts could not be loaded");
  }
  return cart;
}

export async function deleteCart(id) {
  const { data, error } = await supabase.from("cart").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Products could not be deleted from the cart.");
  }

  return data;
}

export async function deleteAllCart(ids) {
  const { data, error } = await supabase.from("cart").delete().in("id", ids);

  if (error) {
    console.log(error);
    throw new Error("All Products could not be deleted from the cart.");
  }

  return data;
}
