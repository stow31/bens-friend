import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    
  },
});


function LinearDeterminate(props) {
  const classes = useStyles();
  let progressRate = Number(props.progressRate);
  let progress = Number(props.progress)
  let setProgress = props.setProgress

  useInterval(() => {
    setProgress( (oldProgress) => {
      return Math.min(oldProgress - progressRate, 100);
    })
  }, 100);

  return (
    <div className={classes.root}>
      <LinearProgress variant="determinate" value={progress} />
    </div>
  );
}

export default LinearDeterminate