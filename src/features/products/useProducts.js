import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../../services/apiProducts";

function useProducts() {
  const [searchParams] = useSearchParams();

  const categorizedValue = searchParams.get("category") || "all";
  //console.log(categorizedValue);
  const searchedValue = searchParams.get("search") || "all";
  // console.log(searchedValue);

  //Categories
  const category =
    !categorizedValue || categorizedValue === "all"
      ? null
      : { field: "category", value: categorizedValue };
  console.log(category);

  //Seacr
  const search =
    !searchedValue || searchedValue === "null"
      ? null
      : { field: "search", value: searchedValue };
  console.log(search);

  // const filter =
  //   !filteredValue || filteredValue === "All"
  //     ? null
  //     : { field: "status", value: filteredValue };

  //Pagination
  // const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  //Query
  const { isLoading, data: products } = useQuery({
    queryKey: ["products", category, search],
    queryFn: () => getProducts({ category, search }),
  });

  return { products, isLoading };
}

export default useProducts;
