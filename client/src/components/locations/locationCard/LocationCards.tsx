import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';
import useStyles from './Styles';

interface IProps {
  id?: number;
  name: string;
  type?: string;
  dimension: string;
  residents?: [string];
  url?: string;
  created?: string;
  backgroundToggle?: boolean;
}

const LocationCards: React.FC<IProps> = ({
  name,
  dimension,
  backgroundToggle,
}: IProps) => {
  const classes = useStyles();

  return (
    <Card
      variant="elevation"
      className={classes.root}
      style={
        backgroundToggle
          ? { backgroundColor: '#43B4CA' }
          : { backgroundColor: '#FFFFFF' }
      }
    >
      <CardContent className={classes.text}>
        <h4>{name}</h4>
        <h4>{dimension}</h4>
      </CardContent>
    </Card>
  );
};

export default LocationCards;
