import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/apiProducts";

function useCategories() {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });
  return { categories, isLoading };
}

export default useCategories;
