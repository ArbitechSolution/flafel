import React, { useState } from "react";
import "./StakeNMS.css";
import Button from "@mui/material/Button";
import { InputGroup, FormControl } from "react-bootstrap";
function StakeNMS() {
  const [textColor, setTextColor] = useState("darkgray");
  return (
    <div className="container container2">
      <div
        className="row"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="col-md-10 boxes11 ">
          <div className="row">
            <div className="col-md-5">
              <h5 className="idea text-start">Single Stake (3,3)</h5>
              <p className="nmsspan">Around 7 Hours, 47 Mins to Next Rebase</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mt-4">
              <h4 className="nmsidea">APY</h4>
              <p className="nmsspan1">97,193,577,570.2%</p>
            </div>
            <div className="col-md-4 mt-4">
              <h4 className="nmsidea">TVL</h4>
              <p className="nmsspan1">$16,081,514</p>
            </div>
            <div className="col-md-4 mt-4">
              <h4 className="nmsidea">Current Index</h4>
              <p className="nmsspan1">2.43 NMS</p>
            </div>
          </div>
          <div className="row buttoncol4">
            <div
              className="col-4"
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                paddingTop: "20px",
              }}
            >
              <Button
                size="large"
                onClick={() => {
                  setTextColor(textColor === "darkgray" ? "white" : "darkgray");
                }}
                style={{ color: "darkgray" }}
              >
                Stake
              </Button>
              <Button size="large" style={{ color: "darkgray" }}>
                Unstake
              </Button>
            </div>
          </div>
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              lineHeight: "100%",
            }}
          >
            <div className="col-md-8">
              <InputGroup className="mb-3">
                <FormControl
                  // style={{backgroundColor: "rgb(108,117,125)", border: "1px solid rgb(108,117,125)", color: "white"}}
                  className="formcontrol"
                  placeholder="0.0"
                  type="Number"
                />
                <button className="btn btn-secondary" id="button-addon2">
                  MAX
                </button>
              </InputGroup>
            </div>
            <div className="col-md-4">
              <div className="d-grid gap-2">
                <button className="btn btn-secondary" id="btn44">
                  <b>Approve</b>
                </button>
              </div>
            </div>
            {/* <div className="">
              <div className="d-grid gap-2">
                <button className="btn btn-secondary" id="btn1">
                  <b>Approve</b>
                </button>
              </div>
            </div> */}
            <div className="col-md-10">
              <p
                style={{
                  color: "darkgray",
                  lineHeight: "130%",
                  fontSize: "14px",
                }}
              >
                Note: The "Approve" transaction is only needed when
                staking/unstaking for the first time; subsequent
                staking/unstaking onlyrequires you to perform the "Stake" or
                "Unstake" transaction.
              </p>
            </div>
          </div>
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="col-md-12" id="Balanceview">
              <p>Your Balance</p>
              <p>0 NMS</p>
            </div>
          </div>
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="col-md-12" id="Balanceview">
              <p>Your Staked Balance</p>
              <p>0 SNMS</p>
            </div>
          </div>
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="col-md-12" id="Balanceview">
              <p>Next Reward Amount</p>
              <p>0 SNMS</p>
            </div>
          </div>
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="col-md-12" id="Balanceview">
              <p>Next Reward Yield</p>
              <p>1.8966%</p>
            </div>
          </div>
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="col-md-12" id="Balanceview">
              <p>ROI (5-Day Rate)</p>
              <p>32.5562%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StakeNMS;
