import React, { Component } from "react";
import BasicSwitch from "./components/Switch";

import "./style/App.css";
import checkIcon from "./images/icon-check.svg";

class App extends Component {
  state = {
    sliderValue: 2,
    barLength: 50,
    pageViews: "100K",
    price: "$16.00",
    yearlyBilling: true,
  };

  sliderHandle = (e) => {
    this.setState({
      sliderValue: e.target.value,
      barLength: (e.target.value * 100) / 4,
    });
  };

  switchChange = () => {
    this.setState({ yearlyBilling: !this.state.yearlyBilling });
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
              <p className="billing right">Monthly Billing</p>
              <BasicSwitch
                checked={this.state.yearlyBilling}
                onChange={this.switchChange}
              />
              <p className="billing">
                Yeary Billing
                <span className="discount">-25%</span>
              </p>
            </div>
            <span className="line"></span>
            <div className="button_section">
              <ul>
                <li>
                  <img
                    className="icon"
                    src={checkIcon}
                    alt="check"
                  />
                  <p>Unlimited websites</p>
                </li>
                <li>
                  <img
                    className="icon"
                    src={checkIcon}
                    alt="check"
                  />
                  <p>100% data ownership</p>
                </li>
                <li>
                  <img
                    className="icon"
                    src={checkIcon}
                    alt="check"
                  />
                  <p>Email reports</p>
                </li>
              </ul>
              <button className="start_button">Start my trial</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
