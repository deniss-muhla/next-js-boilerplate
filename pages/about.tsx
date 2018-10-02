import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import createStyles from '@material-ui/core/styles/createStyles';
import { withStyles, Theme, WithStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            textAlign: 'center',
            paddingTop: theme.spacing.unit * 20
        }
    });

function About(props: WithStyles<typeof styles>) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Typography variant={'headline'} gutterBottom>
                Material-UI
            </Typography>
            <Typography variant={'title'} gutterBottom>
                about page
            </Typography>
            <Typography gutterBottom>
                <Link href="/">
                    <a>Go to the main page</a>
                </Link>
            </Typography>
            <Button variant="contained" color="primary">
                Do nothing button
            </Button>
        </div>
    );
}

export default withStyles(styles)(About);
