import React from 'react'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Book = ({book}) => {
  return (
    <Card sx={{width:345}}>
      <CardActionArea>
        <CardMedia sx={{height:140}} title="">
            <Typography>title: {book.title}</Typography>
        </CardMedia>
        <CardContent>
            <Typography>author:{book.author}</Typography>
            <Typography>description: {book.description}</Typography>
        </CardContent>
        <CardActions>
          <Button>Details</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

export default Book