import React, { Component } from "react";

import "./style/App.css";
import checkIcon from "./images/icon-check.svg";

class App extends Component {
  state = {
    sliderValue: 2,
    barLength: 50,
    pageViews: "100K",
    price: "$16.00",
  };

  sliderHandle = (e) => {
    this.setState({
      sliderValue: e.target.value,
      barLength: (e.target.value * 100) / 4,
    });
    // console.log(e.target.value, barLength);
  };

  render() {
    return (
      <section className="main">
        <div className="wrapper">
          <div className="hero">
            <div className="hero_img"></div>
            <h1>Simple, traffic-based pricing</h1>
            <p>Sign-up for our 30-day trial.</p>
            <p>No credit card required.</p>
          </div>

          <div className="component_box">
            <p className="pageviews">
              <span>{this.state.pageViews}</span> pageviews
            </p>
            <p className="price">
              <span className="big">{this.state.price}</span>/ month
            </p>
            <input
              value={this.state.sliderValue}
              onChange={this.sliderHandle}
              className="slider"
              type="range"
              id="range"
              min="0"
              max="4"
              step="1"
              style={{ backgroundSize: `${this.state.barLength}%, 100%` }}
            />
            <div className="radio_wrapper">
              <p className="billing">Monthly Billing</p>
              <div className="radio_checkbox"></div>
              <p className="billing">
                Yeary Billing <span className="discount">25% discount</span>{" "}
              </p>
            </div>
            <span className="line"></span>
            <div className="button_section">
              <ul>
                <li>
                  <img
                    src={checkIcon}
                    alt="check"
                  />
                  <p>Unlimited websites</p>
                </li>
                <li>
                  <img
                    src={checkIcon}
                    alt="check"
                  />
                  <p>100% data ownership</p>
                </li>
                <li>
                  <img
                    src={checkIcon}
                    alt="check"
                  />
                  <p>Email reports</p>
                </li>
              </ul>
              <button>Start my trial</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
