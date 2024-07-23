import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  deleteAllCart as deleteAllCartApi,
  deleteCart as deleteCartApi,
} from "../../services/apiProducts";
import toast from "react-hot-toast";

export function useDeleteCart() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCart } = useMutation({
    mutationFn: deleteCartApi,

    onSuccess: () => {
      toast.success("Product successfully deleted.");

      queryClient.invalidateQueries({ queryKey: ["carts"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCart };
}

//Be carefull about queryKey it must be same name with database table

export function useDeleteAllCart() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteAllCart } = useMutation({
    mutationFn: deleteAllCartApi,
    onSuccess: () => {
      toast.success("All Product successfully deleted.");

      queryClient.invalidateQueries({ queryKey: ["carts"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteAllCart };
}
