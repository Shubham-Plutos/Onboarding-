import React from "react";
import "./home.scss";
import cashback from "../assets/cashback.svg";
import working from "../assets/working.svg";
import { investors } from "../investors";
import contact from "../assets/contact.svg";
import linkedIn from "../assets/linkin.svg"
import RespBack from "../assets/responsoveBack.svg"

const Home = () => {
  return (
    <div className="Home">
      <div className="top">
        <div className="responsiveBack">
          <img src={RespBack} alt="" />
        </div>
        <div className="text">
          <section className="heading">About plutos ONE</section>
          <div className="para">
            Named after the Greek God of Wealth, plutos ONE is is the answer to
            the question: What if Banking was fun?
          </div>
        </div>
      </div>
      <div className="motive">
        <div className="heading">
          We strive to make the Banking Experience a pleasure for every Indian
        </div>
        <div className="points">
          <section className="point">
            <h1>Who We Are</h1>
            <p>
              We are a diverse set of thinkers and doers committed to making
              Fintech accessible and useful for everyone.
            </p>
          </section>
          <section className="point">
            <h1>Our Vision</h1>
            <p>
              To deliver to every Indian a world-class financial experience by
              offering a comprehensive suite of services via their Banks
            </p>
          </section>
          <section className="point">
            <h1>Our Mission</h1>
            <p>
              To help Customers connect better with their Banks to get maximum
              value out of the relationship
            </p>
          </section>
        </div>
      </div>
      <div className="cashback">
        <div className="left">
          <section className="heading">Digital Partners for Banks</section>
          <section className="para">
            <p>
              plutos ONE works with the leading banks of the country to offer a
              full suite of digital services to their customers. plutos ONE
              offers a plug-and-play model for banks to deploy digital services
              instantly. With plutos ONE, users get rewarded for everything they
              do - shop, pay bills, make investments - every click is an
              opportunity to win.
            </p>
            <p>
              plutos ONE brings the merchants, the services, the deals, the
              technology and the products. We offer turnkey solutions for banks
              to create greater engagement with their customers. And we offer
              customers a one-stop solution for all their finance and commerce
              needs.
            </p>
          </section>
        </div>
        <div className="right">
          <img src={cashback} alt="" />
        </div>
      </div>
      <div className="working">
        <div className="left">
          <img src={working} alt="" />
        </div>
        <div className="right">
          <section className="head">
            <h1>Stats Speak For Themselves</h1>
          </section>
          <section className="blocks">
            <section>
              <span id="num">10M+</span>
              <span id="content">Users</span>
            </section>
            <section>
              <span id="num">10M+</span>
              <span id="content">Users</span>
            </section>
            <section>
              <span id="num">10M+</span>
              <span id="content">Users</span>
            </section>
          </section>
        </div>
      </div>
      <div className="investor">
        <div className="heading">
          <h1>Our Investors</h1>
        </div>
        <div className="peoples">
          {investors.map((investor, index) => (
            <div className="block" key={index} >
              <img src={investor.profilePic} alt="" className="prof"/>
              <section className="first" ><span className="name">{investor.name}</span> <span className="link"><img src={linkedIn} alt="" /></span></section>
              <section className="second"><span>Desg. Here</span></section>
            </div>
          ))}
        </div>
      </div>
      <div className="contactUs">
        <div className="heading">
          <h1>Contact Us</h1>
        </div>
        <div className="content">
          <div className="left">
            <span>How can you contact plutos ONE Customer support?</span>
            <p>
              To get in touch with us, chose the medium according to your
              convenience:
            </p>
            <div>
              <span id="bold">Email id:</span>{" "}
              <span id="con">care@plutos.one</span>
            </div>
            <div>
              <span id="bold">Whatsapp No:</span>{" "}
              <span id="con">+91-9953364151</span>
            </div>
            <div>
              <span id="bold">Address:</span>{" "}
              <span id="con">
                plutos ONE – B-8,9 Third Floor Sector 1 – Noida 201301 – UP
                India
              </span>
            </div>
            <div className="space"></div>
            <span id="marginedh4">How to Partner with plutos ONE</span>
            <div id="bold2">
              <span id="bold" className="bold2">
                For Bank & Partnership Alliances
              </span>
            </div>
            <div id="bold2">
              <span id="bold" className="bold2">
                Rohit Mahajan-
              </span>{" "}
              <span id="con">rohit@plutos.one</span>
            </div>
            <div id="bold2">
              <span id="bold" className="bold2">
              For Merchant Alliances contact:
              </span>
            </div>
            <div id="bold2">
              <span id="bold" className="bold2">
              Ayushi Mahajan 
              </span>{" "}
              <span id="con"> ayushi@plutos.one</span>
            </div>
          </div>
          <div className="right">
            <img src={contact} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
