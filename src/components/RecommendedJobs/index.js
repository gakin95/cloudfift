import { useState } from "react";
import { Grid } from "@material-ui/core";
import { BoldText } from "../common/text";
import Card from "../common/cards/jobs";
import PayStackIcon from "../../images/paystack.png";
import Access from "../../images/access.png";
import Google from "../../images/google.png";
import HrManager from "../../images/hrmanager.png";
import Next from '../../images/next.png';
import Prev from '../../images/prev.png';
import classes from './index.module.css'
const RecommendedJobs = () => {
  const [data] = useState([
    {
      image: PayStackIcon,
      title: "QA Engineer",
      company: "Paystack",
      type: "Full time",
      location: "Lagos, Nigeria",
      active: false,
    },
    {
      image: Google,
      title: "Product Analyst",
      company: "Google",
      type: "Part time",
      location: "Lagos, Nigeria",
      active: true,
    },
    {
      image: HrManager,
      title: "Hr Manager",
      company: "Flutterwave",
      type: "Remote",
      location: "Lagos, Nigeria",
      active: false,
    },
    {
      image: Access,
      title: "Hr Manager",
      company: "Access bank",
      type: "Full time",
      location: "Lagos, Nigeria",
      active: false,
    },
  ]);
  return (
    <div>
      <div className={classes.text}>
      <BoldText>Recommended Jobs</BoldText>
      </div>
      <Grid container spacing={2}>
        {data.map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Card
              image={item.image}
              title={item.title}
              company={item.company}
              type={item.type}
              location={item.location}
              active={item.active}
            />
          </Grid>
        ))}
         <Grid xs={12} className={classes.change}>
                <div>
                <img src={Prev} alt="" />
                <img src={Next} alt="" />
                </div>
            </Grid>
      </Grid>
    </div>
  );
};

export default RecommendedJobs;
