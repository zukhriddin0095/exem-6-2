import { Fragment, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";

import "./style.scss";
import { ENDPOINT, USER_ID } from "../constants";
import { toast } from "react-toastify";
import request from "../server";
import ExpriencesType from "../types/expriences";
import userType from "../types/usertype";
import Skill from "../types/skill";
import ProtfoliosType from "../types/portfolio";
import EducationType from "../types/education";
import Loading from "../loading/Loading";
const PortfoliosPage = () => {
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [expriences, setExpriences] = useState<ExpriencesType[] | null>(null);
  const [user, setUser] = useState<userType[] | null>(null);
  const [skills, setSkills] = useState<Skill[] | null>(null);
  const [portfolios, setPortfolios] = useState<ProtfoliosType[] | null>(null);
  const [education, setEducation] = useState<EducationType[] | null>(null);
  

  console.log(loading, userId);
  
  async function getUser() {
    const userId = Cookies.get(USER_ID);
    if (userId !== undefined) {
      setUserId(userId);
    }
    setLoading(true);
    try {
      const { data } = await request.get(`users/${userId}`);
      setUser(data);
    } catch (err) {
      toast.error("serverda hatolik");
    } finally {
      console.log("success");
      setLoading(false);
    }
  }

  async function getExpriences() {
    const userId = Cookies.get(USER_ID);
    if (userId !== undefined) {
      setUserId(userId);
    }
    setLoading(true);
    try {
      const {
        data: { data },
      } = await request.get(`experiences`, {
        params: {
          user: userId,
          // page: page,
          // limit: LIMIT,
        },
      });
      setExpriences(data);
    } catch (err) {
      toast.error("serverda hatolik");
    } finally {
      console.log("success");
      setLoading(false);
    }
  }

  async function getSkills() {
    const userId = Cookies.get(USER_ID);
    if (userId !== undefined) {
      setUserId(userId);
    }
    setLoading(true);
    try {
      const {
        data: { data },
      } = await request.get(`skills`, {
        params: {
          user: userId,
          // page: page,
          // limit: LIMIT,
        },
      });
      setSkills(data);
    } catch (err) {
      toast.error("serverda hatolik");
    } finally {
      console.log("success");
      setLoading(false);
    }
  }

  async function getPortfolios() {
    const userId = Cookies.get(USER_ID);
    if (userId !== undefined) {
      setUserId(userId);
    }
    setLoading(true);
    try {
      const {
        data: { data },
      } = await request.get(`portfolios`, {
        params: {
          user: userId,
          // page: page,
          // limit: LIMIT,
        },
      });
      setPortfolios(data);
    } catch (err) {
      toast.error("serverda hatolik");
    } finally {
      console.log("success");
      setLoading(false);
    }
  }

  async function getEducation() {
    const userId = Cookies.get(USER_ID);
    if (userId !== undefined) {
      setUserId(userId);
    }
    setLoading(true);
    try {
      const {
        data: { data },
      } = await request.get(`education`, {
        params: {
          user: userId,
          // page: page,
          // limit: LIMIT,
        },
      });
      setEducation(data);
    } catch (err) {
      toast.error("serverda hatolik");
    } finally {
      console.log("success");
      setLoading(false);
    }
  }

  // Smooth scrolling using React
  const smoothScroll = (target: HTMLElement) => {
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  };

  const handleScrollClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")?.substring(1);
    const target = document.getElementById(targetId || "");
    if (target) {
      smoothScroll(target);
    }
  };

  useEffect(() => {
    // Handle click events for smooth scrolling
    document
      .querySelectorAll<HTMLAnchorElement>(
        'a.js-scroll-trigger[href*="#"]:not([href="#"])'
      )
      .forEach((link) => {
        link.addEventListener("click", handleScrollClick);
      });
    // Handle click events for smooth scrolling
    //fetching
    getExpriences();
    getUser();
    getSkills();
    getPortfolios();
    getEducation();
    //fetching
  }, [location.pathname]);
  // Smooth scrolling using React

  // toggle

  const handleToggle = () => {
    setToggle(!toggle);
  };

  // toggle

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
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                Interests
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
                {user?.address}, · {user?.phoneNumber} ·
                <a href="mailto:name@email.com">{user?.email}</a>
              </div>
              <p className="mb-5">
                I am experienced in leveraging agile frameworks to provide a
                robust synopsis for high level overviews. Iterative approaches
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
            <div className="my-auto">
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
            </div>
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
