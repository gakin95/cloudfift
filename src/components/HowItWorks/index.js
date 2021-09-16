import { Grid, Container } from "@material-ui/core";
import classes from "./index.module.css";
import { BoldText, Text, MediumText } from "../common/text";
import Bullet from "../../images/bullet.png";

const HowItWorks = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} className={classes.left}></Grid>
      <Grid item xs={12} sm={6}>
        <Container>
          <BoldText>How it works</BoldText>
          <Text content="Getajob helps you find the right job easily. Getajob helps you find the right job easily. Getajob helps you find the right job easily." />
          <div>
          <div className={classes.bullet}>
            <img src={Bullet} alt="" />
            <div>
              <MediumText content="Search Jobs" />
            </div>
          </div>
          <Text content="We have jobs in the most popular industries and with top companies. Plus, you can create alerts so you never miss a job opportunity."/>
          </div>
          <div>
          <div className={classes.bullet}>
            <img src={Bullet} alt="" />
            <div>
              <MediumText content="Create a Profile and Get Noticed" />
            </div>
          </div>
          <Text content="Create a profile to showcase your skills and experience so recruiters can find you. Upload your CV so you can apply for jobs quickly and easily."/>
          </div>
          <div>
          <div className={classes.bullet}>
            <img src={Bullet} alt="" />
            <div>
              <MediumText content="Apply for jobs" />
            </div>
          </div>
          <Text content="Find the training you need to improve your skills, or visit our Career Center for tips and advice to build your career."/>
          </div>
          
        </Container>
      </Grid>
    </Grid>
  );
};

export default HowItWorks;
