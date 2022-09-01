import { Card, CardContent, CardMedia } from "@mui/material";
import React from "react";
import BookThumbnail from "../atoms/BookThumbnail";
import Progress from "../atoms/Progress";
import TypographyComponent from "../atoms/Typography";

interface BookCardProps {
  bookImage?: string;
  title?: string;
  subtitle?: string;
  readingTime?: string;
}

const BookCard: React.FC<BookCardProps> = (props) => {
  const { bookImage, title, subtitle, readingTime } = props;

  return (
    <Card>
      <CardMedia image={bookImage} />
      <CardContent>
        <BookThumbnail src={bookImage} />
        <TypographyComponent>{title}</TypographyComponent>
        <TypographyComponent>{subtitle}</TypographyComponent>
        <TypographyComponent>{readingTime}</TypographyComponent>
        <Progress />
      </CardContent>
    </Card>
  );
};

export default BookCard;
