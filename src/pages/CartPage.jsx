import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../app/feature/cartSlice";
import { FaTrash } from "react-icons/fa";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";

function CartPage() {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);

  const handleRemove = (id) => {
    dispatch(deleteCart(id));
  };

  const totalPrice = cart.reduce((sum, product) => {
    const discounted =
      product.price - (product.price * product.discountPercentage) / 100;
    return sum + discounted * product.amount;
  }, 0);

  return (
    <div style={{ padding: "24px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "28px",
        }}
      >
        <Typography
          variant="h4"
          color="primary"
          style={{ fontWeight: "bold", cursor: "pointer" }}
        >
          Your Cart
        </Typography>
        <Typography
          variant="h5"
          color="success.main"
          style={{ fontWeight: "bold", cursor: "pointer" }}
        >
          Total: ${totalPrice.toFixed(2)}
        </Typography>
      </div>

      {cart.length === 0 ? (
        <Typography variant="body1"></Typography>
      ) : (
        <Grid container spacing={3}>
          {cart.map((product) => (
            <Grid item xs={12} key={product.id}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  boxShadow: 3,
                  borderRadius: 3,
                  backgroundColor: "#e0f7fa",
                  cursor: "pointer",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  style={{
                    height: "112px",
                    width: "112px",
                    objectFit: "contain",
                    margin: "8px",
                  }}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6" color="primary" fontWeight="bold">
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="success.main"
                    fontWeight="bold"
                  >
                    $
                    {(
                      (product.price -
                        (product.price * product.discountPercentage) / 100) *
                      product.amount
                    ).toFixed(2)}
                  </Typography>
                </CardContent>
                <Button
                  onClick={() => handleRemove(product.id)}
                  sx={{
                    color: "error.main",
                    "&:hover": { color: "error.dark" },
                    padding: 1,
                  }}
                >
                  <FaTrash className="w-6 h-6 cursor-pointer" />
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default CartPage;
