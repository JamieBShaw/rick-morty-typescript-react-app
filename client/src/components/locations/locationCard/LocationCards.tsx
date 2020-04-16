import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import useStyles from './Styles';

interface IProps {
  id?: number;
  name: string;
  type?: string;
  dimension: string;
  residents?: [string];
  url?: string;
  created?: string;
  backgroundToggle: boolean;
}

const LocationCards: React.FC<IProps> = ({
  name,
  dimension,
  backgroundToggle,
}: IProps) => {
  const classes = useStyles();

  return (
    <Card
      variant="outlined"
      className={classes.root}
      style={
        backgroundToggle
          ? { backgroundColor: '#43B4CA' }
          : { backgroundColor: '#FFFFFF' }
      }
    >
      <CardMedia
        className={classes.media}
        image={
          '/home/jamie/Projects/GitProjects/rick-morty-typscriprt-react-app/client/public/static/rick-and-morty-collection-folder-icon-rick-and-morty-003-256x256-png-icon.jpg'
        }
      />
      <CardContent className={classes.text}>
        <h4>{name}</h4>
        <h4>{dimension}</h4>
      </CardContent>
    </Card>
  );
};

export default LocationCards;
