import React from 'react';
import * as echarts from 'echarts';
import outLess from '../css/ChartTest.less';

class ChartTestComponent extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // var test = echarts.init(document.getElementById('echart'));
        var test = echarts.init(this.echartEle);
        test.setOption({
            series: {
                type: 'pie',
                data: [
                    { name: 'A', value: 1 },
                    { name: 'B', value: 1 },
                    { name: 'C', value: 1 },
                    { name: 'D', value: 1 }
                ]
            }
        });
    }

    render() {
        return (
            <div>
                <h1>chart title</h1>
                <div ref={echartEle => this.echartEle = echartEle} className={outLess.chartStyle}></div>
            </div>
        );
    }
}

export { ChartTestComponent };