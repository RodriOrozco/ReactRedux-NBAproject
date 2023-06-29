import "./landingPage.scss";

import lebron from "../../../assets/lebron-dunk.png";
import jordan from "../../../assets/jordan-three.png";

import Login from "../../../components/Login/Login";

const LandingPage = () => {
  const spanClass = "landingPage__span heading-secondary";

  return (
    <section className="landingPage">
      <h1 className="landingPage__title heading-primary">
        WELCOME TO <span className={spanClass}>NBA</span> STATS
      </h1>
      <Login />
      <img className="landingPage__image--jordan" src={jordan} alt="" />
      <img className="landingPage__image--lebron" src={lebron} alt="" />
    </section>
  );
};

export default LandingPage;
