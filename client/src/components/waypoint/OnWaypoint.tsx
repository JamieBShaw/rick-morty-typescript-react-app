import React from 'react';
import { Waypoint } from 'react-waypoint';

interface IProps {
  length: number;
  data: Array<any>;
  handleWaypoint: () => void;
}

export const OnWaypoint: React.FC<IProps> = ({
  length,
  data,
  handleWaypoint,
}: IProps) => {
  console.log('LENGTH: ' + length);
  console.log('DATALENGTH ' + data.length);
  return (
    <div>
      {length <= 30 && (
        <Waypoint
          onEnter={() => {
            handleWaypoint();
          }}
        ></Waypoint>
      )}
    </div>
  );
};
