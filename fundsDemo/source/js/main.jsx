import React from 'react';
import ReactDOM from 'react-dom';
import fundsStyle from '../css/fundsStyle.less';
import fundsData from '../bean/fundsBean.json';
import echarts from 'echarts';

let mPlateData;
let testData;
let mFundsFlowOption;

class MainComponent extends React.Component {
    constructor(props) {
        super(props);

        this.initData();
    }

    initData() {
        let tempPlateData = this.concertDataFormat(fundsData.fundsPlate);
        mPlateData = tempPlateData.map((item, index) => {
            let hideStyle = item[1] !== undefined ? fundsStyle.fundsPlateItemStyle : null;
            return (
                <tr key={index}>
                    <td className={fundsStyle.fundsPlateItemStyle}>
                        <p className={fundsStyle.fundsPlateItemName}>{item[0].plateName}</p>
                        <p className={fundsStyle.fundsPlateItemContent}>{item[0].plateZDF}</p>
                    </td>
                    <td className={hideStyle}>
                        <p className={fundsStyle.fundsPlateItemName}>{item[1] !== undefined ? item[1].plateName : ""}</p>
                        <p className={fundsStyle.fundsPlateItemContent}>{item[1] !== undefined ? item[1].plateZDF : ""}</p>
                    </td>
                </tr>
            );
        }
        );

        testData = fundsData.fundsPlate.map((item, index) => {
            return (
                <li key={index} className={fundsStyle.ListItemStyle}>
                    <div>
                        <span className={fundsStyle.ListItemTitle}> {item.plateName}</span>
                        <span className={fundsStyle.ListItemContent}>  {item.plateZDF}</span>
                    </div>
                </li>
            );
        });

        mFundsFlowOption = {
            title: {
                text: '今日资金',
                textStyle: {
                    color: '#bfbfbf',
                    fontSize: 16,
                    fontWeight: 'bold',
                },
                left: 'center',
                top: 'center',
            },
            legend: {
                show: false,
            },
            series: {
                type: 'pie',
                radius: ['50%', '70%'],
                label: {
                    show: true,
                    position: 'outside',
                },
                data: [
                    {
                        name: '散户流入',
                        value: '40',
                        label: {
                            formatter: '{NameStyle|{b}}\n{percentStyle|{d}%}\n{valueStyle|{c}万}',
                            rich: {
                                NameStyle: {
                                    textSize: 12,
                                    color: '#2e2e3f',
                                    lineHeight: 20,
                                    align: 'right',
                                },
                                percentStyle: {
                                    fontSize: 14,
                                    lineHeight: 20,
                                    align: 'right',
                                },
                                valueStyle: {
                                    fontSize: 12,
                                    color: '#2e2e3f',
                                    lineHeight: 20,
                                    align: 'right',
                                }
                            }
                        },
                        itemStyle: {
                            color: '#fd4a46'
                        }
                    },
                    {
                        name: '散户流出',
                        value: '10',
                        label: {
                            formatter: '{NameStyle|{b}}\n{percentStyle|{d}%}\n{valueStyle|{c}万}',
                            rich: {
                                NameStyle: {
                                    textSize: 12,
                                    color: '#2e2e3f',
                                    lineHeight: 20,
                                    align: 'right',
                                },
                                percentStyle: {
                                    fontSize: 14,
                                    lineHeight: 20,
                                    align: 'right',
                                },
                                valueStyle: {
                                    fontSize: 12,
                                    color: '#2e2e3f',
                                    lineHeight: 20,
                                    align: 'right',
                                }
                            }
                        },
                        itemStyle: {
                            color: '#08c560'
                        }
                    },
                    {
                        name: '主力流出',
                        value: '23',
                        label: {
                            formatter: '{NameStyle|{b}}\n{percentStyle|{d}%}\n{valueStyle|{c}万}',
                            rich: {
                                NameStyle: {
                                    fontSize: 12,
                                    color: '#2e2e3f',
                                    lineHeight: 20,
                                    align: 'left',
                                },
                                valueStyle: {
                                    fontSize: 14,
                                    color: '#2e2e3f',
                                    lineHeight: 20,
                                    align: 'left',
                                },
                                percentStyle: {
                                    fontSize: 12,
                                    lineHeight: 20,
                                    align: 'left',
                                }
                            }
                        },
                        itemStyle: {
                            color: '#069e4e'
                        }
                    },
                    {
                        name: '主力流入',
                        value: '25',
                        label: {
                            formatter: '{NameStyle|{b}}\n{percentStyle|{d}%}\n{valueStyle|{c}万}',
                            rich: {
                                NameStyle: {
                                    fontSize: 12,
                                    color: '#2e2e3f',
                                    lineHeight: 20,
                                    align: 'left',
                                },
                                percentStyle: {
                                    fontSize: 14,
                                    lineHeight: 20,
                                    align: 'left',
                                },
                                valueStyle: {
                                    fontSize: 12,
                                    color: '#2e2e3f',
                                    lineHeight: 20,
                                    align: 'left',
                                }
                            }
                        },
                        itemStyle: {
                            color: '#f34a55'
                        }
                    },
                ]
            }
        }
    }

    /* 将一维数组转换为二维数组，每个二维数组里有两个数据 */
    concertDataFormat(originData) {
        let k = 0;
        let newData = new Array();
        for (let i = 0; i < originData.length / 2; i++) {
            newData[i] = new Array();
            for (let j = 0; j < 2; j++) {
                if (k < originData.length) {
                    newData[i][j] = originData[k];
                }
                k++;
            }
        }

        return newData;
    }

    componentDidMount() {
        let flowDirctionChart = echarts.init(this.fundsFlowPie);
        flowDirctionChart.setOption(mFundsFlowOption);
    }

    render() {
        return (
            <div>
                <h4 className={fundsStyle.fundsTitleStyle}>所属板块</h4>
                <table className={fundsStyle.fundsPlateContentStyle}>
                    <tbody>
                        {mPlateData}
                    </tbody>
                </table>
                <ul className={fundsStyle.ListStyle}>{testData}</ul>
                <h4 className={fundsStyle.fundsTitleStyle}>今日资金流向</h4>
                <div className={fundsStyle.fundsFlowDirectionPie} ref={flowPie => this.fundsFlowPie = flowPie}>asfdasdf</div>
            </div>
        );
    }
}

ReactDOM.render(<MainComponent />, document.getElementById('root'));