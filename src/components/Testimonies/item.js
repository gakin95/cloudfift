import { useState } from 'react';
import { Grid } from "@material-ui/core";
import { BoldText, Text, MediumText } from "../common/text";
import classes from "./testimonies.module.css";
import Testimony1 from '../../images/testimony1.png';
import Testimony2 from '../../images/headerimg.png';
import Next from '../../images/next.png';
import Prev from '../../images/prev.png';

const Item = () => {
    const [data] = useState([
        {
            image: Testimony1,
            msg: "The platform is really convenient to reach out to companies & I have managed to secure 2 interviews already! I can also track my application status instead of wondering whether the company has seen or shortlisted me",
            name:"Irma Black",
            title:"HR Manager at MasterCard"
        },
        {
            image: Testimony2,
            msg: "The platform is really convenient to reach out to companies & I have managed to secure 2 interviews already! I can also track my application status instead of wondering whether the company has seen or shortlisted me",
            name:"Hammed Johnson",
            title:"HR Manager at Facebook"
        }
    ])
    const [index, setIndex] = useState(0);
    const handleNext = () => {
        if (index === data.length - 1) return;
        setIndex(prev => prev + 1)
    }
    const handlePrev = () => {
        if (index === 0) return;
        setIndex(prev => prev - 1)
    }
    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid xs={12} sm={6} md={4}>
            <div className={classes.boldTextContainer}>
                <BoldText className={classes.boldText}>What are our customers saying</BoldText>
            </div>
            </Grid>
            <Grid xs={12} className={classes.change}>
                <div>
                <img src={Prev} alt="" onClick={handlePrev}/>
                <img src={Next} alt="" onClick={handleNext}/>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <img className={classes.img} src={data[index].image} alt="" />
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
                <div className={classes.bgImg}/>
               <div className={classes.textContainer}>
               <Text content={data[index].msg}/>
               </div>
                <div>
                <MediumText content={data[index].name}/>
                <MediumText content={data[index].title} className={classes.mediumTxt}/>
                </div>
            </Grid>
        </Grid>
    )
}

export default Item
