import { Container, Typography } from "@mui/material";
import { axiosInstace } from "../utils";
import ProductContainer from "../components/ProductContainer";

export const loader = async () => {
  const req = await axiosInstace("/product");
  return req.data;
};

export default function Home() {
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
