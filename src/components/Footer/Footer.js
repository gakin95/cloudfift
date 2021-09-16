import { Grid } from "@material-ui/core";
import classes from './footer.module.css';
import {Text, MediumText} from '../common/text';
import FaceBookIcon from '../../images/Facebook.png';
import InstagramIcon from '../../images/Instagram.png';
import TwitterIcon from '../../images/Twitter.png';
import LinkedInIcon from '../../images/LinkedIn.png';
import BrandLogo from '../../images/men.svg';

const Footer = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6} sm={6} md={3}>
            <MediumText content="Informaation"/>
            <img src={BrandLogo} alt="" />
            <Text content=" Getajobng provides a full online service for anyone looking for a new job. We're not a recruitment agency, we're a job site."/>
            </Grid>
            <Grid item xs={6} sm={6} md={2}>
                <MediumText content="Informaation"/>
                <Text content="About us"/>
                <Text content="Contact Us"/>
                <Text content="Terms & Condition"/>
            </Grid>
            <Grid item xs={6} sm={6} md={2}>
                <MediumText content="Job Seekers"/>
                <Text content="Create Account"/>
                <Text content="Job List"/>
                <Text content="FAQ"/>
            </Grid>
            <Grid item xs={6} sm={6} md={2}>
                <MediumText content="Employers"/>
                <Text content="Create Account"/>
                <Text content="Post a Job"/>
                <Text content="FAQ"/>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
                <MediumText content="Social Media:"/>
                <div className={classes.icons}>
                    <img src={InstagramIcon} alt="" />
                    <img src={TwitterIcon} alt="" />
                    <img src={FaceBookIcon} alt="" />
                    <img src={LinkedInIcon} alt="" />
                </div>
            </Grid>
        </Grid>
    )
}

export default Footer
