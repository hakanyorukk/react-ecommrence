import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEditCart as addCartApi } from "../../services/apiProducts";
import toast from "react-hot-toast";

export function useAddToCart() {
  const queryClient = useQueryClient();

  const { isLoading, mutate: addCart } = useMutation({
    mutationFn: addCartApi,
    onSuccess: () => {
      toast.success("Successfully add to cart.");
      queryClient.invalidateQueries({ queryKey: ["carts"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isLoading, addCart };
}
