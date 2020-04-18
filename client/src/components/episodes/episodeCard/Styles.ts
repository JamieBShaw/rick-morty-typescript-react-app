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
    text: {
      textAlign: 'left',
      fontSize: 18,
      fontWeight: 'lighter',
      textShadow: '0px 0px white',
    },
  })
);

export default useStyles;
