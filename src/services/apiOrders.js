import supabase from "./supabase";

export async function createOrder(newOrder) {
  const { data, error } = await supabase
    .from("order")
    .insert([{ ...newOrder }])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Product could not be added to the cart.");
  }

  return data;
}

export async function getOrders() {
  const { data: order, error } = await supabase.from("order").select("*");
  if (error) {
    console.log(error);
    throw new Error("Orders could not be loaded");
  }
  return order;
}
