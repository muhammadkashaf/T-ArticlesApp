import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import useArticles from '../../Hooks/useArticles';
import { Fragment } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'flex',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}));

export default function ListItems() {
    const classes = useStyles();
    const { response } = useArticles();
    return (
        <List className={classes.root}>
            {response && response.map(({ media, abstract, byline, title, updated, id }) => {
                return (
                    <Fragment key={id}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={media.length ? media[0]['media-metadata'][0].url : null} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={title}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            {abstract}
                                        </Typography>

                                        <div className={classes.row}>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                color="textPrimary">
                                                {byline}
                                            </Typography>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                color="textPrimary">
                                                {updated}
                                            </Typography>
                                        </div>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>

                        <Divider variant="inset" component="li" />
                    </Fragment>
                )
            })}
        </List>
    );
}