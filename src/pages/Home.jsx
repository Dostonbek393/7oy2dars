import { Container, Typography } from "@mui/material";
import { axiosInstance } from "../utils";
import ProductContainer from "../components/ProductContainer";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  const req = await axiosInstance("/product");
  return req.data;
};

export default function Home() {
  const { products } = useLoaderData();
  console.log(products);

  return (
    <section>
      <Container maxWidth="xl" sx={{ pb: 5 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Products
        </Typography>
      </Container>
      <ProductContainer />
    </section>
  );
}
