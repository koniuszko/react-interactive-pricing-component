import React, { Component } from "react";
import BasicSwitch from "./components/Switch";

import "./style/App.css";
import checkIcon from "./images/icon-check.svg";

class App extends Component {
  state = {
    sliderValue: 2,
    barLength: 50,
    pageViews: "100K",
    price: 16,
    yearlyBilling: true,
    discount: 0.75,
    width: window.innerWidth,
  };

  list = ["Unlimited websites", "100% data ownership", "Email reports"];

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  sliderHandle = (e) => {
    switch (e.target.value) {
      case "0":
        this.setState({
          sliderValue: 0,
          barLength: 0,
          pageViews: "10K",
          price: 8,
        });
        break;
      case "1":
        this.setState({
          sliderValue: 1,
          barLength: 25,
          pageViews: "50K",
          price: 12,
        });
        break;
      case "2":
        this.setState({
          sliderValue: 2,
          barLength: 50,
          pageViews: "100K",
          price: 16,
        });
        break;
      case "3":
        this.setState({
          sliderValue: 3,
          barLength: 75,
          pageViews: "500K",
          price: 24,
        });
        break;
      case "4":
        this.setState({
          sliderValue: 4,
          barLength: 100,
          pageViews: "1M",
          price: 36,
        });
        break;
      default:
        this.setState({
          sliderValue: 2,
          barLength: 50,
          pageViews: "100K",
          price: 16,
        });
    }
  };

  switchChange = () => {
    this.setState({ yearlyBilling: !this.state.yearlyBilling });
  };

  priceCount = () => {
    return this.state.yearlyBilling
      ? "$" +
          (
            Math.round(this.state.price * this.state.discount * 100) / 100
          ).toFixed(2)
      : "$" + (Math.round(this.state.price * 100) / 100).toFixed(2);
  };

  render() {
    return (
      <section className="main">
        <div className="wrapper">
          <div className="hero">
            <div className="hero_img"></div>
            <h1>Simple, traffic-based pricing</h1>
            <div className="subtitle">
              <p>Sign-up for our 30-day trial.</p>
              <p>No credit card required.</p>
            </div>
          </div>
          <div className="component_box">
            <div className="upper_component">
              <p className="pageviews">
                <span>{this.state.pageViews}</span> pageviews
              </p>
              <p className="price">
                <span className="big">{this.priceCount()}</span>/ month
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
                style={{
                  backgroundSize: this.state.barLength + "% 100%, 100% 100%",
                }}
              />
              <div className="radio_wrapper">
                <p className="billing right">Monthly Billing</p>
                <BasicSwitch
                  checked={this.state.yearlyBilling}
                  onChange={this.switchChange}
                />
                <p className="billing">
                  Yeary Billing
                  <span className="discount">
                    {this.state.width < 1200 ? "-25%" : "25% discount"}
                  </span>
                </p>
              </div>
            </div>
            <span className="line"></span>
            <div className="lower_component">
              <div className="button_section">
                <ul>
                  {this.list.map((item) => {
                    return (
                      <li key={item}>
                        <img
                          className="icon"
                          src={checkIcon}
                          alt="check"
                        />
                        <p>{item}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <button className="start_button">Start my trial</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
