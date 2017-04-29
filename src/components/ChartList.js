import React, {Component} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import ChartButton from './ChartButton.js';

class ChartList extends Component {
    render() {
        let r = "";
        if (typeof this.props.chartData === "string") {
            if (this.props.chartData !== "") {
                r = (
                    <span className="error">{this.props.chartData}</span>
                )
            }
        } else {
            console.log(this.props.chartData.charts);
            r = (
                <div className="padleft padright">
                    <h2>{this.props.chartData.info.id} - {this.props.chartData.info.name}</h2>

                    <Tabs>
                        <TabList>
                            <Tab>General</Tab>
                            <Tab>SIDs</Tab>
                            <Tab>STARs</Tab>
                            <Tab>Intermediates</Tab>
                            <Tab>Approaches</Tab>
                        </TabList>

                        <TabPanel>
                            {(typeof this.props.chartData.charts.General === "object") ? this.props.chartData.charts.General.map((chart, i) => {
                                return <ChartButton key={i} chartName={chart.chartname} chartUrl={chart.proxy} chartId={chart.id} onChartOpen={this.props.onChartOpen} />
                            }) : "No charts available" }
                        </TabPanel>
                        <TabPanel>
                            {(typeof this.props.chartData.charts.SID === "object") ? this.props.chartData.charts.SID.map((chart, i) => {
                                return <ChartButton key={i} chartName={chart.chartname} chartUrl={chart.proxy} chartId={chart.id} onChartOpen={this.props.onChartOpen} />
                            }) : "No charts available" }
                        </TabPanel>
                        <TabPanel>
                            {(typeof this.props.chartData.charts.STAR === "object") ? this.props.chartData.charts.STAR.map((chart, i) => {
                                return <ChartButton key={i} chartName={chart.chartname} chartUrl={chart.proxy} chartId={chart.id} onChartOpen={this.props.onChartOpen} />
                            }) : "No charts available" }
                        </TabPanel>
                        <TabPanel>
                            {(typeof this.props.chartData.charts.Intermediate === "object") ? this.props.chartData.charts.Intermediate.map((chart, i) => {
                                return <ChartButton key={i} chartName={chart.chartname} chartUrl={chart.proxy} chartId={chart.id} onChartOpen={this.props.onChartOpen} />
                            }) : "No charts available" }
                        </TabPanel>
                        <TabPanel>
                            {(typeof this.props.chartData.charts.Approach === "object") ? this.props.chartData.charts.Approach.map((chart, i) => {
                                return <ChartButton key={i} chartName={chart.chartname} chartUrl={chart.proxy} chartId={chart.id} onChartOpen={this.props.onChartOpen} />
                            }) : "No charts available" }
                        </TabPanel>
                    </Tabs>
                </div>
            )
        }


        return (
            <div className="padtop align-left">
                {r}
            </div>
        );
    }
}

export default ChartList;