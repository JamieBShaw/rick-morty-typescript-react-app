import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      textAlign: 'left',
      fontSize: 18,
      fontWeight: 'lighter',
      textShadow: '0px 0px white',
      paddingLeft: '10px',
      marginTop: '0px',
      paddingTop: '0px',
      fontFamily: 'Creepster, cursive',
    },
  })
);

export default useStyles;
