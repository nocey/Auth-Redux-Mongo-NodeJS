import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      marginBottom:10,
    },
    media: {
      height: 200, 
      minHeight: 250,
    },
  });
const Moviecard = () => {
    const style = useStyles();
    return (
        <div>
            <Card className={style.root}>
                <CardActionArea>
                    <CardMedia title='deneme' image='https://picsum.photos/200/300' className={style.media}></CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Movie Name
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                           Add Favorite
                        </Button>
                    </CardActions>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default Moviecard
