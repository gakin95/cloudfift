import { Grid } from "@material-ui/core";
import Location from "../../images/locationicon.png";
import Search from "../../images/search.png";
import BrandLogo from "../../images/brandlogo.png";
import PayStack from "../../images/paystack1.svg";
import Google from "../../images/google1.svg";
import KPMG from "../../images/kpmg1.svg";
import { BoldText, Text } from "../common/text";
import useStyles from "./styles";
const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
      <div className={classes.nav}>
        <div>
          <img src={BrandLogo} alt="" className={classes.logo} />
        </div>
        <div className={classes.leftLists}>
          <ul>
            <li>
              <a href="/">Companies</a>
            </li>
            <li>
              <a href="/">Candidates</a>
            </li>
            <li>
              <a href="/">Assesments</a>
            </li>
            <li>
              <a href="/">Post a job</a>
            </li>
            <li>
              <a href="/">Carrer advice</a>
            </li>
          </ul>
        </div>
        <div className={classes.rightLists}>
          <ul>
            <li>
              <a href="/">Sign up</a>
            </li>
            <li>
              <a href="/" className={classes.active}>
                Login in
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Grid container spacing={1}>
        <Grid xs={12} sm={6} className={classes.content}>
          <div>
          <BoldText>
          <p>
            Find a <span className={classes.job}>job</span> easily
          </p>
        </BoldText>
        <Text content="With verified, up-to-date job listings directly from employer websites, we create a premium experience for job seekers, employers, and data seekers alike." />
          </div>
          <div className={classes.inputContainer}>
            <div className={classes.inputStyle}>
            <input type="text" placeholder="Enter keywords, skill, interest"/>
            </div>
            <div className={classes.inputRight}>
              <img src={Location} alt="" />
            <input type="text" placeholder="Location"/>
            <div className={classes.searchContainer}>
              <img src={Search} alt="" />
            </div>
            </div>
          </div>
          <div>
            <p><b>Trusted by:</b></p>
            <div className={classes.images}>
              <div>
              <img src={PayStack} alt="" />
              </div>
              <div>
              <img src={Google} alt="" />
              </div>
              <div>
              <img src={KPMG} alt="" />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      </div>
    </div>
  );
};

export default Header;

{/* <div className={classes.container}>
  <div className={classes.findJob}>
    <div className={classes.headerContent}>
      <div className={classes.leftHeader}>
        <div>
          <img src={BrandLogo} alt="" className={classes.logo} />
        </div>
      </div>
      <div className={classes.left}>
        
        <div>
          lorem
        </div>
      </div>
    </div>
  </div>
  <div>
    <div className={classes.headerImgContainer}>
      <div className={classes.headerImg}>
        <img src={HeaderImg} alt="" />
      </div>
    </div>
  </div>
</div> */}
