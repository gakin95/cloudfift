import { Container } from "@material-ui/core";
import Header from "./components/Header";
import RecommendedJobs from "./components/RecommendedJobs";
import HowItWorks from "./components/HowItWorks";
import PopularCategory from "./components/PopularCategory";
import Customer from "./components/Customers";
import Testimonies from "./components/Testimonies";
import Career from "./components/Career";
import Footer from "./components/Footer";
import Spacer from "./components/common/spacer";

const  App = () => {
  return (
    <div>
      <Header/>
      <Spacer />
      <Container>
      <RecommendedJobs/>
      <Spacer />
      <HowItWorks/>
      <Spacer />
      <PopularCategory/>
      <Spacer />
      <Customer/>
      <Spacer />
      <Testimonies/>
      <Spacer />
      <Career/>
      <Spacer />
      <Footer/>
      <Spacer />
      </Container>
    </div>
  );
}

export default App;
