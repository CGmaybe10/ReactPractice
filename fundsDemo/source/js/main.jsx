import React from 'react';
import ReactDOM from 'react-dom';
import fundsStyle from '../css/fundsStyle.less';
import fundsData from '../bean/fundsBean.json';

let mPlateData;
let testData;

class MainComponent extends React.Component {
    constructor(props) {
        super(props);

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
            </div>
        );
    }
}

ReactDOM.render(<MainComponent />, document.getElementById('root'));