import React from 'react';
import { Waypoint } from 'react-waypoint';

interface IProps {
  length: number;
  data?: Array<any>;
  handleWaypoint: () => void;
  itemCount: number;
}

export const OnWaypoint: React.FC<IProps> = ({
  length,
  handleWaypoint,
  itemCount,
}: IProps) => {
  return (
    <div>
      {length <= itemCount && (
        <Waypoint
          onEnter={() => {
            handleWaypoint();
          }}
        ></Waypoint>
      )}
    </div>
  );
};
