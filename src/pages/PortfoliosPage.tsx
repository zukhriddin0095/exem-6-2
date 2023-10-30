import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./style.scss";
import { ENDPOINT } from "../constants";
import { toast } from "react-toastify";
import request from "../server";
import ExpriencesType from "../types/expriences";
import Skill from "../types/skill";
import ProtfoliosType from "../types/portfolio";
import EducationType from "../types/education";
import Loading from "../loading/Loading";
import userType from "../types/usertype";
import ContactUs from "../contact/ContactUs";
const PortfoliosPage = () => {
  const location = useLocation();

  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [expriences, setExpriences] = useState<ExpriencesType[] | null>(null);
  const [user, setUser] = useState<userType | null>(null);
  const [skills, setSkills] = useState<Skill[] | null>(null);
  const [portfolios, setPortfolios] = useState<ProtfoliosType[] | null>(null);
  const [education, setEducation] = useState<EducationType[] | null>(null);

  console.log(loading, userId);

  async function getUser() {
    setLoading(true);
    try {
      const { data } = await request.get(
        "users/653ec7a5431aba00182b8ee2" || `users/${userId}`
      );
      setUser(data);
    } catch (err) {
      toast.error("Serverda xatolik yuz berdi");
    } finally {
      console.log("muvaffaqiyatli bajarildi");
      setLoading(false);
    }
  }

  console.log(user);

  async function getExpriences() {
    setLoading(true);
    try {
      const {
        data: { data },
      } = await request.get(
        `experiences?user=653ec7a5431aba00182b8ee2` ||
          `experiences?user=${userId}`
      );
      setExpriences(data);
    } catch (err) {
      toast.error("serverda hatolik");
    } finally {
      console.log("success");
      setLoading(false);
    }
  }

  async function getSkills() {
    setLoading(true);
    try {
      const {
        data: { data },
      } = await request.get(
        `skills?user=653ec7a5431aba00182b8ee2` || `skills?user=${userId}`
      );
      setSkills(data);
    } catch (err) {
      toast.error("serverda hatolik");
    } finally {
      console.log("success");
      setLoading(false);
    }
  }

  async function getPortfolios() {
    setLoading(true);
    try {
      const {
        data: { data },
      } = await request.get(
        `portfolios?user=653ec7a5431aba00182b8ee2` ||
          `portfolios?user=${userId}`
      );
      setPortfolios(data);
    } catch (err) {
      toast.error("serverda hatolik");
    } finally {
      console.log("success");
      setLoading(false);
    }
  }

  async function getEducation() {
    setLoading(true);
    try {
      const {
        data: { data },
      } = await request.get(
        `education?user=653ec7a5431aba00182b8ee2` || `education?user=${userId}`
      );
      setEducation(data);
    } catch (err) {
      toast.error("serverda hatolik");
    } finally {
      console.log("success");
      setLoading(false);
    }
  }

  useEffect(() => {
    getExpriences();
    getUser();
    getSkills();
    getPortfolios();
    getEducation();
    setUserId(location.search.split("?")[1]);
  }, [location.pathname, userId]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Start Bootstrap</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
              alt=""
            />
          </span>
        </a>
        <button
          onClick={handleToggle}
          className={toggle ? "navbar-toggler" : "navbar-toggler collapsed"}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={
            toggle
              ? "collapse navbar-collapse show"
              : "collapse navbar-collapse"
          }
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#interests">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#awards">
                Portfolios
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {loading ? (
        <Loading />
      ) : (
        <div className="container-fluid p-0">
          <section
            className="resume-section p-3 p-lg-5 d-flex d-column"
            id="about"
          >
            <div className="my-auto">
              <h1 className="Name__">
                {user?.firstName}{" "}
                <span className="text-primary">{user?.lastName}</span>
              </h1>
              <div className="subheading mb-5">
                {user?.address}, · {user?.phoneNumber} ·{" "}
                <a href={`mailto:${user?.email}`}>{user?.email}</a>
              </div>
              <p className="mb-5">
                I am experienced in leveraging agile frameworks to provide a
                robust synopsis for high-level overviews. Iterative approaches
                to corporate strategy foster collaborative thinking to further
                the overall value proposition.
              </p>
              <ul className="list-inline list-social-icons mb-0">
                <li className="list-inline-item">
                  <a href="#">
                    <span className="fa-stack fa-lg">
                      <i className="bx bxl-facebook-circle"></i>
                      <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="fa-stack fa-lg">
                      <i className="bx bxl-twitter"></i>
                      <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="fa-stack fa-lg">
                      <i className="bx bxl-linkedin-square"></i>
                      <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="fa-stack fa-lg">
                      <i className="bx bxl-github"></i>
                      <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section
            className="resume-section p-3 p-lg-5 d-flex flex-column"
            id="experience"
          >
            <div className="my-auto">
              <h2 className="mb-5">Experience</h2>

              {expriences?.map((ex) => (
                <div
                  key={ex._id}
                  className="resume-item d-flex flex-column flex-md-row mb-5"
                >
                  <div className="resume-content mr-auto">
                    <h3 className="mb-0">{ex.workName}</h3>
                    <div className="subheading mb-3">{ex.companyName}</div>
                    <p>
                      Bring to the table win-win survival strategies to ensure
                      proactive domination. At the end of the day, going
                      forward, a new normal that has evolved from generation X
                      is on the runway heading towards a streamlined cloud
                      solution. User generated content in real-time will have
                      multiple touchpoints for offshoring.
                    </p>
                  </div>
                  <div className="resume-date text-md-right">
                    <span className="text-primary">
                      {ex.startDate.split("T")[0]} - Present
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            className="resume-section p-3 p-lg-5 d-flex flex-column"
            id="education"
          >
            <div className="my-auto">
              <h2 className="mb-5">Education</h2>

              {education?.map((edu) => (
                <div
                  key={edu._id}
                  className="resume-item d-flex flex-column flex-md-row mb-5"
                >
                  <div className="resume-content mr-auto">
                    <h3 className="mb-0">{edu.name}</h3>
                    <div className="subheading mb-3">{edu.level}</div>
                    <div>Computer Science - Web Development Track</div>
                    <p>GPA: 3.23</p>
                  </div>
                  <div className="resume-date text-md-right">
                    <span className="text-primary">
                      {edu.startDate.split("T")[0]} -{" "}
                      {edu.endDate.split("T")[0]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            className="resume-section p-3 p-lg-5 d-flex flex-column"
            id="skills"
          >
            <div className="my-auto">
              <h2 className="mb-5">Skills</h2>

              <div className="subheading mb-3">
                Programming Languages &amp; Tools
              </div>
              <ul className="list-inline list-icons">
                <li className="list-inline-item">
                  <i className="bx bxl-html5"></i>
                </li>
                <li className="list-inline-item">
                  <i className="bx bxl-css3"></i>
                </li>
                <li className="list-inline-item">
                  <i className="bx bxl-javascript"></i>
                </li>
                <li className="list-inline-item">
                  <i className="bx bxl-sass"></i>
                </li>
                <li className="list-inline-item">
                  <i className="bx bxl-bootstrap"></i>
                </li>
                <li className="list-inline-item">
                  <i className="bx bxl-react"></i>
                </li>
                <li className="list-inline-item">
                  <i className="bx bxl-typescript"></i>
                </li>
              </ul>

              <div className="subheading mb-3">Workflow</div>
              {skills?.map((skill) => (
                <ul className="fa-ul mb-0">
                  <li>
                    <i className="bx bx-check"></i> {skill.name},{" "}
                    {skill.percent} %
                  </li>
                </ul>
              ))}
            </div>
          </section>

          <section
            className="resume-section p-3 p-lg-5 d-flex flex-column"
            id="interests"
          >
            {/* <div className="my-auto">
              <h2 className="mb-5">Interests</h2>
              <p>
                Apart from being a web developer, I enjoy most of my time being
                outdoors. In the winter, I am an avid skiier and novice ice
                climber. During the warmer months here in Colorado, I enjoy
                mountain biking, free climbing, and kayaking.
              </p>
              <p className="mb-0">
                When forced indoors, I follow a number of sci-fi and fantasy
                genre movies and television shows, I am an aspiring chef, and I
                spend a large amount of my free time exploring the latest
                technolgy advancements in the front-end web development world.
              </p>
            </div> */}
            <ContactUs userId={userId} />
          </section>

          <section
            className="resume-section p-3 p-lg-5 d-flex flex-column"
            id="awards"
          >
            <div className="my-auto">
              <h2 className="mb-5">Portfolios</h2>
              {portfolios?.map((port) => (
                <ul className="fa-ul mb-0 port">
                  <li>
                    <img
                      src={`${ENDPOINT}upload/${port?.photo?._id}.${
                        port?.photo?.name.split(".")[1]
                      }`}
                      alt="asdad"
                    />
                    <h3>
                      <i className="bx bxl-github"></i> {port.name}
                    </h3>
                    <a href={port.url}>
                      <i className="bx bxl-github"></i>
                      {port.url}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
          </section>
        </div>
      )}
    </Fragment>
  );
};
export default PortfoliosPage;
