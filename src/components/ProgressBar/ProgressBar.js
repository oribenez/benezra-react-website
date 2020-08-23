import React from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import classes from './ProgressBar.css';
const ProgressBar = (props) => (
    <Auxiliary>
        <div className={classes.Wrapper}>
            <div className={classes.Label}>{props.label}</div>
            <div className={classes.Bucket}>
                <div className={classes.Filler} style={{ width: props.fill }}> {props.fill}&nbsp;</div>
            </div>
        </div>
    </Auxiliary>
);

export default ProgressBar;