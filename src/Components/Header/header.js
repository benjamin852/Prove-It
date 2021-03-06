import React, { Component } from "react";

import "./header.css";
import Banner from "../Banner/banner";
import Intro from "../Intro/intro";
import TabView from "../TabView/tabView";
import Work from "../Working/works";
import Team from "../Team/team";
import Metaverse from "../Metaverse/metaverse";
import NewsLetter from "../NewsLetter/newsLetter";

class Header extends Component {
  state = {
    currentTab: 0
  };
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-md bg-color navbar-dark mb-1">
          <div class="nav-item ml-2 mt-2">
            <a class="nav-link text-white" href="#">
              <img
                class="logo display"
                src={require("../../Assets/Logo/home-button.png")}
                alt="home"
              />
            </a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse flex-row-reverse"
            id="collapsibleNavbar"
          >
            <ul class="navbar-nav" style={{ fontSize: 22 }}>
              <li class="nav-item">
                <a
                  class="nav-link text-white link-style mr-5"
                  onClick={() => this.setState({ currentTab: 0 })}
                  href="#tab"
                >
                  Create
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-white link-style mr-5"
                  onClick={() => this.setState({ currentTab: 1 })}
                  href="#tab"
                >
                  Verify
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white link-style mr-5" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white link-style mr-5" href="#team">
                  Team
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-white link-style mr-5"
                  href="#newsletter"
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div class="container" id="banner">
          <Banner />
        </div>
        <div class="container" id="tab">
          <TabView currentTab={this.state.currentTab} />
        </div>
        <div class="container-fluid" id="about">
          <Intro />
          <div class="container mt-5 mb-5" id="work">
            <Work />
          </div>
        </div>
        <div class="container" id="team">
          <Team />
        </div>
        <div class="container" id="metaverse">
          <Metaverse />
        </div>
        <div class="container" id="newsletter">
          <NewsLetter />
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
