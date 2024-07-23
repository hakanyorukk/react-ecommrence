import { useQuery } from "@tanstack/react-query";
import { getSingleProduct } from "../../services/apiProducts";
import { useParams } from "react-router-dom";

function useProduct(id) {
  const { productId } = useParams();

  const { isLoading, data: product } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getSingleProduct(productId || id),
  });

  return { isLoading, product };
}

export default useProduct;
