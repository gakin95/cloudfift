import { makeStyles } from "@material-ui/core";
import Image from "../../images/bg.png";
import SearchContainer from "../../images/green.png";

const useStyles = makeStyles(() => ({
  root: {
    height: "130vh",
    width: "100%",
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    boxSizing:"border-box"
  },
  container:{
    padding: "2% 10%",
    boxSizing:"border-box"
  },
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftLists: {
    "& ul": {
      display: "flex",
      listStyleType: "none",
      "& li": {
        marginRight: "10px",
        "& a": {
          textDecoration: "none",
          color: "black",
        },
      },
    },
  },
  rightLists: {
    "& ul": {
      display: "flex",
      listStyleType: "none",
      "& li": {
        marginRight: "20px",
        "& a": {
          textDecoration: "none",
          color: "black",
        },
      },
    },
  },
  active: {
    background: "rgba(6, 148, 42, 0.2)",
    borderRadius: "20px",
    padding: ' 10px 30px',
    color: "06942A",
  },
  content:{
    height:'80vh',
    padding:"50px",
    boxSizing:"border-box"
  },
  job:{
    color:"#06942A"
  },
  inputContainer:{
    border:'1px solid #E5E5E5',
    height:'47px',
    width:'100%',
    boxSizing:"border-box",
    boxShadow:"0px 10px 30px rgba(6, 148, 42, 0.04)",
    borderRadius:"20px",
    display:"flex",
    
  },
  inputStyle:{
    backgroundColor: 'white',
      borderRight:'1px solid #E5E5E5',
      width:'60%',
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      '& input':{
        backgroundColor: 'transparent',
        'border': '0px solid',
        height: '100%',
        width: '100%',
        fontSize: '18px',
        color: '#CCC',
        '&:focus': {
            outline: 'none'
        }
      }
  },
  inputRight:{
    backgroundColor: 'white',
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    '& input':{
      'border': '0px solid',
      height: '100%',
      width: '50%',
      fontSize: '18px',
      color: '#CCC',
      '&:focus': {
          outline: 'none'
      }
    }
},
searchContainer:{
    height: "47px",
    width: "59px",
    backgroundImage: `url(${SearchContainer})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
},
images:{
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    flexWrap:'wrap',
    width:'80%'
}
}));

export default useStyles;
