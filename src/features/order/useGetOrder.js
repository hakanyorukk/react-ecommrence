import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/apiOrders";

export function useGetOrder() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["order"],
    queryFn: () => getOrders(),
  });

  return { isLoading, data, error };
}
