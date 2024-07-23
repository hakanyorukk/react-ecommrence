import { useQuery } from "@tanstack/react-query";
import { getCarts } from "../../services/apiProducts";

export function useCarts() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["carts"],
    queryFn: () => getCarts(),
  });

  return { isLoading, data, error };
}
