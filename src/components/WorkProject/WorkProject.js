import React from 'react';
import classes from './WorkProject.css';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

const WorkProject = (props) => {

    let htmlOrder = (
        <div className={classes.WorkProjectWrapper} style={props.style}>
            <img src={props.img} alt={props.title} className={classes.WorkProjectImg} />
            <aside className={classes.WorkProjectContent}>
                <h2>{props.title}</h2>
                <p>{props.children}</p>
            </aside>
        </div>
    );

    if (props.rtl === true) {
        htmlOrder = (
            <div className={classes.WorkProjectWrapper} style={props.style}>
                <aside className={classes.WorkProjectContent}>
                    <h2>{props.title}</h2>
                    <p>{props.children}</p>
                </aside>
                <img src={props.img} alt={props.title} className={classes.WorkProjectImg} />
            </div>
        );
    }

    return (
        <Auxiliary>
            {htmlOrder}
        </Auxiliary>
    );
};

export default WorkProject;