import React, {Component} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

class ChartList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let r = "";
        if (typeof this.props.chartData === "string") {
            if (this.props.chartData !== "") {
                r = (
                    <span className="error">{this.props.chartData}</span>
                )
            }
        } else {
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
                            {this.props.chartData.charts.General.map((chart) => {
                                console.log(chart);
                                return (<a href="#" key="{chart.id}">{chart.name}</a>);
                            })}
                        </TabPanel>
                        <TabPanel>
                            SIDs
                        </TabPanel>
                        <TabPanel>
                            STARs
                        </TabPanel>
                        <TabPanel>
                            Intermediates
                        </TabPanel>
                        <TabPanel>
                            Approaches
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