import React from 'react';
import classes from './index.module.css';
import { MediumText, Text } from '../../text';

const Category = ({Image,text,jobs}) => {
    return (
        <div className={classes.root}>
           <div>
           <img src={Image} alt="" />
           <MediumText content={text}/>
           <Text content={jobs}/>
           </div>
        </div>
    )
}

export default Category
