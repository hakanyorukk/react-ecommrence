import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createOrder as createOrderApi } from "../../services/apiOrders";

export function useCreateOrder() {
  const queryClient = useQueryClient();

  const { isLoading: isAdding, mutate: createOrder } = useMutation({
    mutationFn: createOrderApi,
    onSuccess: () => {
      toast.success("Order successfully created.");
      queryClient.invalidateQueries({ queryKey: ["order"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isAdding, createOrder };
}
