import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, CircularProgress } from '@material-ui/core';

import './styles.css';
import ArtistModal from '../ArtistModal/ArtistModal';
import { api, headers } from '../../config';
import ErrorAlert from '../ErrorAlert/ErrorAlert';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 275,
      backgroundSize: 'cover'
    },
});

function Artists({data}) {
    const classes = useStyles();
    const [loading, setLoading] = React.useState(false)
    const [isOpen, setIsOpen] = React.useState(false);
    const [currentArtist, setCurrentArtist] = React.useState({});
    const [error, setError] = React.useState(false)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setError(false);
    };

    const handleOpenModal = (id) => {
        setLoading(true);
        fetch(`${api.ARTIST_API}/${id}`, { headers })
        .then((res) => res.json())
        .then((res) => {
            setLoading(false);
            setCurrentArtist(res);
            setTimeout(() => setIsOpen(true))
        })
        .catch(() => {
            setLoading(false);
            setError(true)
        })
    }

    return (
        <div className="artists__container">
            <Grid container spacing={5}> 
                {data.map(artist => (
                    <Grid item sm={6} xs={12} md={6} lg={4} key={artist.id}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={artist.picture_medium}
                                    title={artist.name}
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {artist.name}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" onClick={() => handleOpenModal(artist.id)}>
                                    More About {artist.name}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {loading && (<div className="spinner__container"><CircularProgress /></div>)}
            <ArtistModal 
                open={isOpen}
                handleClose={() => setIsOpen(false)}
                data={currentArtist}
            >
            </ArtistModal>
            <ErrorAlert open={error} handleClose={() => handleClose()}/>
        </div>
    )
}

export default Artists
