import React, { Component } from 'react'
import { connect } from 'dva'
import HeadScreen from '@/components/HeadScreen/index'
import AnalysisChart from '@/components/AnalysisChart/index'

import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

@connect(state => state)

class CorrelationAnalyze extends Component {

    render() {
        return (
            <div>
                <HeadScreen />
                <AnalysisChart />
            </div>
        );
    }
}

export default CorrelationAnalyze;

