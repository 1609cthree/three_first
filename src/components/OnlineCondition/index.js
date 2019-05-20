import React, { Component } from 'react'

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
 class EventAnalysis extends Component {
  componentDidMount() {

     
      // Themes end

      // Create chart instance
      let chart = am4core.create("onlineCondition", am4charts.XYChart);

      // Add data
      chart.data = [{
        "date": "2012-07-27",
        "value": 13
      }, {
        "date": "2012-07-28",
        "value": 11
      }, {
        "date": "2012-07-29",
        "value": 15
      }, {
        "date": "2012-07-30",
        "value": 16
      }, {
        "date": "2012-07-31",
        "value": 18
      }, {
        "date": "2012-08-01",
        "value": 13
      }, {
        "date": "2012-08-02",
        "value": 22
      }, {
        "date": "2012-08-03",
        "value": 23
      }, {
        "date": "2012-08-04",
        "value": 20
      }, {
        "date": "2012-08-05",
        "value": 17
      }, {
        "date": "2012-08-06",
        "value": 16
      }, {
        "date": "2012-08-07",
        "value": 18
      }, {
        "date": "2012-08-08",
        "value": 21
      }, {
        "date": "2012-08-09",
        "value": 26
      }, {
        "date": "2012-08-10",
        "value": 24
      }, {
        "date": "2012-08-11",
        "value": 29
      }, {
        "date": "2012-08-12",
        "value": 32
      }, {
        "date": "2012-08-13",
        "value": 18
      }, {
        "date": "2012-08-14",
        "value": 24
      }, {
        "date": "2012-08-15",
        "value": 22
      }, {
        "date": "2012-08-16",
        "value": 18
      }, {
        "date": "2012-08-17",
        "value": 19
      }, {
        "date": "2012-08-18",
        "value": 14
      }, {
        "date": "2012-08-19",
        "value": 15
      }, {
        "date": "2012-08-20",
        "value": 12
      }, {
        "date": "2012-08-21",
        "value": 8
      }, {
        "date": "2012-08-22",
        "value": 9
      }, {
        "date": "2012-08-23",
        "value": 8
      }, {
        "date": "2012-08-24",
        "value": 7
      }, {
        "date": "2012-08-25",
        "value": 5
      }, {
        "date": "2012-08-26",
        "value": 11
      }, {
        "date": "2012-08-27",
        "value": 13
      }, {
        "date": "2012-08-28",
        "value": 18
      }, {
        "date": "2012-08-29",
        "value": 20
      }, {
        "date": "2012-08-30",
        "value": 29
      }, {
        "date": "2012-08-31",
        "value": 33
      }, {
        "date": "2012-09-01",
        "value": 42
      }, {
        "date": "2012-09-02",
        "value": 35
      }, {
        "date": "2012-09-03",
        "value": 31
      }, {
        "date": "2012-09-04",
        "value": 47
      }, {
        "date": "2012-09-05",
        "value": 52
      }, {
        "date": "2012-09-06",
        "value": 46
      }, {
        "date": "2012-09-07",
        "value": 41
      }, {
        "date": "2012-09-08",
        "value": 43
      }, {
        "date": "2012-09-09",
        "value": 40
      }, {
        "date": "2012-09-10",
        "value": 39
      }, {
        "date": "2012-09-11",
        "value": 34
      }, {
        "date": "2012-09-12",
        "value": 29
      }, {
        "date": "2012-09-13",
        "value": 34
      }, {
        "date": "2012-09-14",
        "value": 37
      }, {
        "date": "2012-09-15",
        "value": 42
      }, {
        "date": "2012-09-16",
        "value": 49
      }, {
        "date": "2012-09-17",
        "value": 46
      }, {
        "date": "2012-09-18",
        "value": 47
      }, {
        "date": "2012-09-19",
        "value": 55
      }, {
        "date": "2012-09-20",
        "value": 59
      }, {
        "date": "2012-09-21",
        "value": 58
      }, {
        "date": "2012-09-22",
        "value": 57
      }, {
        "date": "2012-09-23",
        "value": 61
      }, {
        "date": "2012-09-24",
        "value": 59
      }, {
        "date": "2012-09-25",
        "value": 67
      }, {
        "date": "2012-09-26",
        "value": 65
      }, {
        "date": "2012-09-27",
        "value": 61
      }, {
        "date": "2012-09-28",
        "value": 66
      }, {
        "date": "2012-09-29",
        "value": 69
      }, {
        "date": "2012-09-30",
        "value": 71
      }, {
        "date": "2012-10-01",
        "value": 67
      }, {
        "date": "2012-10-02",
        "value": 63
      }, {
        "date": "2012-10-03",
        "value": 46
      }, {
        "date": "2012-10-04",
        "value": 32
      }];

      // Set input format for the dates
      chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

      // Create axes
      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      chart.yAxes.push(new am4charts.ValueAxis());

      // Create series
      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = "value";
      series.dataFields.dateX = "date";
      series.tooltipText = "{value}"
      series.strokeWidth = 2;
      series.minBulletDistance = 15;

      // Drop-shaped tooltips
      series.tooltip.background.cornerRadius = 20;
      series.tooltip.background.strokeOpacity = 0;
      series.tooltip.pointerOrientation = "vertical";
      series.tooltip.label.minWidth = 40;
      series.tooltip.label.minHeight = 40;
      series.tooltip.label.textAlign = "middle";
      series.tooltip.label.textValign = "middle";

      // Make bullets grow on hover
      let bullet = series.bullets.push(new am4charts.CircleBullet());
      bullet.circle.strokeWidth = 2;
      bullet.circle.radius = 4;
      bullet.circle.fill = am4core.color("#fff");

      let bullethover = bullet.states.create("hover");
      bullethover.properties.scale = 1.3;

      // Make a panning cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = "panXY";
      chart.cursor.xAxis = dateAxis;
      chart.cursor.snapToSeries = series;

      // Create vertical scrollbar and place it before the value axis
      chart.scrollbarY = new am4core.Scrollbar();
      chart.scrollbarY.parent = chart.leftAxesContainer;
      chart.scrollbarY.toBack();

      // Create a horizontal scrollbar with previe and place it underneath the date axis
      chart.scrollbarX = new am4charts.XYChartScrollbar();
      chart.scrollbarX.series.push(series);
      chart.scrollbarX.parent = chart.bottomAxesContainer;

      chart.events.on("ready", function () {
        dateAxis.zoom({start:0, end:1});
      });
    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div id="onlineCondition" style={{ width: "100%", height: "500px" }}></div>
    );
  }
}
export default EventAnalysis