import { Grid } from "@material-ui/core";
import classes from './customers.module.css';
import { BoldText,Text,MediumText } from "../common/text";
import Image from '../../images/Logos.svg';

const Customer = () => {
    return (
       <Grid container spacing={2} className={classes.root}>
           <Grid item xs={12} sm={6}>
               <BoldText>Over  1000+  jobs from top companies in our network</BoldText>
               <Text content="Every day we index millions of jobs directly from employer websites. We’re committed to accurate, high-quality jobs so you won’t find old, duplicated, or spammy listings here."/>
               <Text content="Organize and automate your job search while at home or on the go. We’ll deliver new, relevant jobs of interest straight to your inbox."/>
               <div className={classes.mediumContainer}>
                <MediumText content="Learn More" className={classes.medium}/>
               </div>
           </Grid>
           <Grid item xs={12} sm={6}>
            <img src={Image} alt="" />
           </Grid>
       </Grid>
    )
}

export default Customer
