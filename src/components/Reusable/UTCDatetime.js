import { Typography } from '@mui/material';
import React from 'react';
import { getUTCDatetime } from '../../utilities/DatetimeUtils';

const UTCDatetime = () => {
  const utcFullDate = getUTCDatetime();
  const utcTimeValue = (
    <Typography
      variant="h3"
      component="h3"
      sx={{
        fontWeight: '800',
        fontSize: { xs: '10px', sm: '15px' },
        color: 'rgba(255, 255, 255, .7)',
        lineHeight: 3,
        paddingRight: '100px',
        fontFamily: 'revert-layer',
      }}
    >
      {utcFullDate}
    </Typography>
  );
  return utcTimeValue;
};

export default UTCDatetime;
