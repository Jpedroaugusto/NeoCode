import "./translate.scss";
import { useTranslation } from "react-i18next";
import React, { Component,useState } from "react";
import Switch from "react-switch";

class MaterialDesignSwitch extends Component {
  constructor() {
    super({});
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked: boolean) {
    this.setState({ checked });
  }
  


  render() {
    return (
      <div className="translate">
        <label htmlFor="small-radius-switch">
          <Switch
            checked={this.state.checked}
            onChange={this.handleChange}
            handleDiameter={28}
            offColor="#C0C0C0"
            onColor="#C0C0C0"
            offHandleColor="#0ff"
            onHandleColor="#08f"
            height={40}
            width={70}
            borderRadius={6}
            activeBoxShadow="0px 0px 1px 2px #fffc35"
            uncheckedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <img
                  style={{ width: 20, filter: "grayscale(80%)" }}
                  src="/images/svg/us.svg"
                />
              </div>
            }
            checkedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <img
                  style={{ width: 20, filter: "grayscale(80%)" }}
                  src="/images/svg/br.svg"
                />
              </div>
            }
            uncheckedHandleIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <img style={{ width: 28 }} src="/images/svg/br.svg" />
              </div>
            }
            checkedHandleIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <img style={{ width: 28 }} src="/images/svg/us.svg" />
              </div>
            }
            className="react-switch"
            id="small-radius-switch"
          />
        </label>
      </div>
    );
  }
}


export function Translate() {
  const [checked, setChecked] = useState(false);

  const translate = (checked) => {
    setChecked(checked);
    alert('oi')
  }

  return (
    <div className="translate">
      <MaterialDesignSwitch checked={checked} onChange={translate}/>
    </div>
  );
}
