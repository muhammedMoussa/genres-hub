import React from 'react'
import PropTypes from 'prop-types'
import { Dialog, DialogContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AlbumIcon from '@material-ui/icons/Album';
import LinkIcon from '@material-ui/icons/Link';
import CancelIcon from '@material-ui/icons/Cancel';

import './styles.css';
const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '95%',
    }
  }));
  
const ArtistModal = ({
    open, 
    handleClose, 
    children, 
    size, 
    fullWidth, 
    width,
    data
  }) => {
    const classes = useStyles();

    return (
        <Dialog
          fullWidth={fullWidth}
          maxWidth={size}
          open={open}
          onClose={handleClose}
          className="artist__modal"
        >
          <DialogContent
            style={{
              maxWidth: width,
              overflowX: 'auto',
            }}
          >
            <div>{children}</div>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" src={data.picture_small}>
                        </Avatar>
                    }
                    title={data.name}
                />
                <CardActions disableSpacing>
                    <IconButton title="Number of fans">
                        <span style={{margin: '0 10px'}}>{data.nb_fan}</span> <FavoriteIcon />
                    </IconButton>

                    <IconButton title="Number of albums">
                        <span style={{margin: '0 10px'}}>{data.nb_album}</span> <AlbumIcon />
                    </IconButton>

                    <IconButton title="Artist profile" href={data.link} target="_blank">
                        <LinkIcon />
                    </IconButton>

                    <IconButton title="Close" onClick={() => handleClose()}>
                        <CancelIcon />
                    </IconButton>

                    {/* @TODO: IMPLEMENT THIS FEATURE */}
                    {/* <IconButton title="Share" href={data.share}>
                        <ShareIcon />
                    </IconButton> */}
    
                </CardActions>
                </Card>
            {/* <Button onClick={() => handleClose()} className="exit__Btn" type="Button">X</Button> */}
          </DialogContent>
        </Dialog>
      )
}

ArtistModal.propTypes = {
    open: PropTypes.bool,
    fullWidth: PropTypes.bool,
    handleClose: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    size: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
  
ArtistModal.defaultProps = {
    size: 'md',
    width: 'inherit',
}

export default ArtistModal
  