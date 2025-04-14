import { Box } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import ProductCart from "./ProductCart";

export default function ProductContainer() {
  const { products } = useLoaderData();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        },
        gap: 4,
        px: 15,
        pb: 4,
      }}
    >
      {products.map((product) => (
        <ProductCart key={product.id} product={product} />
      ))}
    </Box>
  );
}
