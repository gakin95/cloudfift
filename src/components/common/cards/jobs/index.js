import React from 'react';
import classes from './index.module.css';
import Location from '../../../../images/locationicon.png';
import { MediumText, Text } from '../../text';

const Job = ({image,title,company,type,location,active}) => {
    return (
        <>
            <div div className={classes.root}>
                <div className={classes.typeContainer}>
                <a className={`${classes.link} ${classes.type}`} href="/">{type}</a>
                </div>
                <div className={classes.position}>
                    <img src={image} alt="" />
                    <MediumText content={title}/>
                </div>
                <div>
                <div className={classes.brand}>
                <MediumText content={company}/>
                </div>
                <div className={classes.footer}>
                    <div className={classes.flex}>
                        <img src={Location} alt="" />
                        <Text content={location}/>
                    </div>
                    <a className={`${classes.link} ${active ? classes.active : ''}`} href="/" >Apply Now</a>
                </div>
                </div>
            </div>
        </>
    )
}

export default Job
