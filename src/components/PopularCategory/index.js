import { useState } from 'react';
import { Grid } from "@material-ui/core";
import classes from './category.module.css'
import { BoldText  } from "../common/text";
import Card from '../common/cards/category';
import Gas from '../../images/gas.svg';
import Arts from '../../images/arts.svg';
import Data from '../../images/Data.svg';
import Laptop from '../../images/gas.svg';
import Education from '../../images/education.svg';
import HealthCare from '../../images/Healthcare.svg';
import Accounting from '../../images/Accounting.svg';
import Security from '../../images/Security.svg';

const PopularCategory = () => {
    const [data] = useState([
        {
            image:Gas,
            text:"Oil and Gas",
            jobs:"(20 new jobs )"
        },
        {
            image:HealthCare,
            text:"Healthcare",
            jobs:"(10 new jobs )"
        },
        {
            image:Education,
            text:"Education",
            jobs:"(10 new jobs )"
        },
        {
            image:Accounting,
            text:"Accounting",
            jobs:"(10 new jobs )"
        },
        {
            image:Arts,
            text:"Design, Art and Multimedia",
            jobs:"(20 new jobs )"
        },
        {
            image:Laptop,
            text:"Technology",
            jobs:"(10 new jobs )"
        },
        {
            image:Security,
            text:"Security",
            jobs:"(20 new jobs )"
        },
        {
            image:Data,
            text:"Data Analyst",
            jobs:"(20 new jobs )"
        },
    ])
    return (
        <div className={classes.root}>
             <BoldText className={classes.bold}>Popular Category</BoldText>
             <Grid container spacing={2}>
                 {data.map((item,i) => <Grid item xs={12} sm={6} md={3} key={i}>
                 <Card Image={item.image} text={item.text} jobs={item.jobs}/>
                 </Grid>)}
             </Grid>
        </div>
    )
}

export default PopularCategory
