import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";

export default function ProductCart({ product }) {
  const { title, price, description, rating, thumbnail } = product;

  const renderStars = () => {
    return [...Array(5)].map((_, index) => {
      const starValue = index + 1;
      return (
        <span key={index}>
          {rating >= starValue ? (
            <BsStarFill className="text-yellow-500" />
          ) : rating >= starValue - 0.5 ? (
            <BsStarHalf className="text-yellow-500" />
          ) : (
            <BsStar className="text-yellow-500" />
          )}
        </span>
      );
    });
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        boxShadow: 3,
        transition: "all 0.3s ease",
        cursor: "pointer",
        "&:hover": { boxShadow: 6, transform: "scale(1.03)" },
      }}
    >
      <CardMedia
        component="img"
        image={thumbnail}
        alt={title}
        height="200"
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography
          variant="h6"
          sx={{ color: "#923799", textAlign: "center" }}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {description.slice(0, 60)}...
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", color: "#009688" }}
        >
          ${price}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1, mb: 2 }}>
          {renderStars()}
          <Typography variant="caption" sx={{ ml: 1 }}>
            {rating}
          </Typography>
        </Box>
        <Button
          variant="contained"
          size="small"
          sx={{ mr: 1, textTransform: "none" }}
        >
          Quick View
        </Button>
        <Button variant="outlined" size="small" sx={{ textTransform: "none" }}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}
