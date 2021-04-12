import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
}));

export default function ExamplePagination() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/* <Typography>Page: {page}</Typography> */}
            <Pagination count={10} variant="outlined" color="primary" defaultPage={1} showFirstButton showLastButton />
        </div>
    );
}