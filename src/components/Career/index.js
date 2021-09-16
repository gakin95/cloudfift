import classes from './career.module.css';
import { Grid } from "@material-ui/core";
import { BoldText, Text } from '../common/text'

const Career = () => {
    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12} sm={6} className={classes.content}>
                <div>
                <BoldText className={classes.text}>
                    <p>Get a Job you actually like</p>
                </BoldText>
                <div className={classes.smallText}>
                <Text className={classes.text} content="Create an account and start applying"/>
                </div>
                </div>
                <div>
                    <button>Get Started</button>
                </div>
            </Grid>
        </Grid>
    )
}

export default Career
