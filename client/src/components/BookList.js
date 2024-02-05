import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Book from "./Book";

const BookList = () => {
  const GET_BOOKS = gql`
    query {
      books {
        id
        title
        author
        description
      }
    }
  `;
  const { isLoding, error, data } = useQuery(GET_BOOKS);

  if (isLoding) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Box>
      <Grid
        container
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        columnSpacing={3}
        rowSpacing={3}
      >
        {data
          ? data.books.map((book) => (
              <Grid key={book.id} item >
                <Book key={book.id} book={book} />
              </Grid>
            ))
          : ""}
      </Grid>
    </Box>
  );
};

export default BookList;
