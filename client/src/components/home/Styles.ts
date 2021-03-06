import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: '10px',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },

    title: {
      flexGrow: 1,
    },
    image: {
      width: '100%',
      height: '75%',
      marginTop: '55px',
      zIndex: -1,
    },
  })
);
