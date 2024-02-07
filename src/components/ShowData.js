import React from "react";
import "./ShowData.css";
import Map from "./Map";
import BarChart from "./BarChart";


export default function ShowData() {
  return (
    <>
    <div className="main">
      <div className="outer">
        {/* Here Heading is there */}
        <div className="lavel">
          <p>WSTF FRONT-END HACKTHON</p>
        </div>
        {/* User Data */}
        <div className="userdata">
          <div>
            <span className="allusers">All Users</span>
            <span className="details"> &nbsp;Detail ➾</span>
          </div>
        </div>
        {/* TOTAL AMOUNT */}
        <div class="totalamount">
          <h1>2,431,340</h1>
        </div>
        <div className="tableData">
          <div className="row1">
            <div className="row_img1">
              <img
                src="https://cdn0.iconfinder.com/data/icons/charts-and-graphics-2/48/10_pie_chart_graph_growth_presentation_decrease_increase_percentage-512.png"
                alt="logo"
              />
            </div>
            <div>
              <p>Total earning</p>
              <p>540,549</p>
            </div>
          </div>
          <div className="row1">
            <div className="row_img2">
              <img
                src="https://cdn1.iconfinder.com/data/icons/apple-watch-bold-line-6/70/258-512.png"
                alt="logo"
              />
            </div>
            <div>
              <p>Sales</p>
              <p>1,205,667</p>
            </div>
          </div>
          <div className="row1">
            <div className="row_img3">
              <img
                src="https://cdn4.iconfinder.com/data/icons/seo-and-marketing-icons-3-1/129/182-512.png"
                alt="logo"
              />
            </div>
            <div>
              <p>Purchase</p>
              <p>48,430,039</p>
            </div>
          </div>
        </div>
        {/* Circular Bar */}
        <div className="container">
          <div className="ui-widgets">
            <div className="ui-values">67%</div>
          </div>
          <div className="ui-labels activity">
            <p>22,652</p>
            <p>New users</p>
          </div>
          <div className="ui-widgets">
            <div className="ui-values">27%</div>
          </div>
          <div className="ui-labels activity">
            <p>92,980</p>
            <p>Active users</p>
          </div>
        </div>
      </div>
      <Map />
      <div className="bar">
        <BarChart/>
      </div>
    </div>
    </>
  );
}
