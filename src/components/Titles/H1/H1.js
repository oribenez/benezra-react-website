import React from 'react';
import classes from './H1.css';

const H1 = (props) => (
    <div className={classes.Wrapper} style={props.style}>
        <h1 className={classes.Title} style={{ color: props.color }}>{props.children}</h1>
        <div className={classes.Stripe} style={{ background: props.color }}></div>
    </div>
);

export default H1;