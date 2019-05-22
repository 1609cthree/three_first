import React, { Component } from 'react'
import { connect } from 'dva'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.options.autoSetClassName = true;
am4core.useTheme(am4themes_animated);

@connect(state => state.tab)
 class EventAnalysis extends Component {
  componentDidMount() {
    let chart = am4core.create("eventanalysis", am4charts.XYChart);

    chart.colors.step = 2;
    chart.maskBullets = false;

    // Add data
    chart.data = this.props.nationCity

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.dataFields.category = "category";
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 50;
    dateAxis.renderer.grid.template.disabled = true;
    dateAxis.renderer.fullWidthTooltip = true;

    let distanceAxis = chart.yAxes.push(new am4charts.ValueAxis());
    distanceAxis.title.text = "Distance";
    distanceAxis.renderer.grid.template.disabled = true;

    let durationAxis = chart.yAxes.push(new am4charts.DurationAxis());
    durationAxis.title.text = "Duration";
    durationAxis.baseUnit = "minute";
    durationAxis.renderer.grid.template.disabled = true;
    durationAxis.renderer.opposite = true;

    durationAxis.durationFormatter.durationFormat = "hh'h' mm'min'";

    let latitudeAxis = chart.yAxes.push(new am4charts.ValueAxis());
    latitudeAxis.renderer.grid.template.disabled = true;
    latitudeAxis.renderer.labels.template.disabled = true;

    // Create series
    let distanceSeries = chart.series.push(new am4charts.ColumnSeries());
    distanceSeries.id = "g1";
    distanceSeries.dataFields.valueY = "distance";
    distanceSeries.dataFields.dateX = "date";
    distanceSeries.yAxis = distanceAxis;
    distanceSeries.tooltipText = "{valueY} miles";
    distanceSeries.name = "Distance";
    distanceSeries.columns.template.fillOpacity = 0.7;

    let disatnceState = distanceSeries.columns.template.states.create("hover");
    disatnceState.properties.fillOpacity = 0.9;

    let durationSeries = chart.series.push(new am4charts.LineSeries());
    durationSeries.id = "g3";
    durationSeries.dataFields.valueY = "duration";
    durationSeries.dataFields.dateX = "date";
    durationSeries.yAxis = durationAxis;
    durationSeries.name = "Duration";
    durationSeries.strokeWidth = 2;
    durationSeries.tooltipText = "{valueY.formatDuration()}";

    let durationBullet = durationSeries.bullets.push(new am4charts.Bullet());
    let durationRectangle = durationBullet.createChild(am4core.Rectangle);
    durationBullet.horizontalCenter = "middle";
    durationBullet.verticalCenter = "middle";
    durationBullet.width = 7;
    durationBullet.height = 7;
    durationRectangle.width = 7;
    durationRectangle.height = 7;

    let durationState = durationBullet.states.create("hover");
    durationState.properties.scale = 1.2;

    let latitudeSeries = chart.series.push(new am4charts.LineSeries());
    latitudeSeries.id = "g2";
    latitudeSeries.dataFields.valueY = "latitude";
    latitudeSeries.dataFields.dateX = "date";
    latitudeSeries.yAxis = latitudeAxis;
    latitudeSeries.name = "Duration";
    latitudeSeries.strokeWidth = 2;
    latitudeSeries.tooltipText = "Latitude: {valueY} ({townName})";

    let latitudeBullet = latitudeSeries.bullets.push(new am4charts.CircleBullet());
    latitudeBullet.circle.fill = am4core.color("#fff");
    latitudeBullet.circle.strokeWidth = 2;
    latitudeBullet.circle.propertyFields.radius = "townSize";

    let latitudeState = latitudeBullet.states.create("hover");
    latitudeState.properties.scale = 1.2;

    let latitudeLabel = latitudeSeries.bullets.push(new am4charts.LabelBullet());
    latitudeLabel.label.text = "{townName2}";
    latitudeLabel.label.horizontalCenter = "left";
    latitudeLabel.label.dx = 14;

    // Add legend
    chart.legend = new am4charts.Legend();

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.fullWidthLineX = true;
    chart.cursor.xAxis = dateAxis;
    chart.cursor.lineX.strokeOpacity = 0;
    chart.cursor.lineX.fill = am4core.color("#000");
    chart.cursor.lineX.fillOpacity = 0.1;


    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div id="eventanalysis" style={{ width: "100%", height: "500px" }}></div>
    );
  }
}
export default EventAnalysis