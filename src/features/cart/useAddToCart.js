import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEditCart as addCartApi } from "../../services/apiProducts";
import toast from "react-hot-toast";

export function useAddToCart() {
  const queryClient = useQueryClient();

  //const settings = saveSettings(""); // Define the settings variable here

  // const settings = ""; // Define the settings variable here

  const { isLoading: isAdding, mutate: addCart } = useMutation({
    mutationFn: addCartApi,
    onSuccess: () => {
      toast.success("Successfully add to cart.");
      // toast.promise(saveSettings(settings), {
      //   loading: "Adding...",
      //   success: <b>Added the cart!</b>,
      //   error: <b>Could not added!</b>,
      // });

      //toast.promise(saveSettings(settings));
      queryClient.invalidateQueries({ queryKey: ["carts"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isAdding, addCart };
}
