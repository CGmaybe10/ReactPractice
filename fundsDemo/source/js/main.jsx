import React from 'react';
import ReactDOM from 'react-dom';
import fundsStyle from '../css/fundsStyle.less';
import fundsData from '../bean/fundsBean.json';

let newTabData;

class MainComponent extends React.Component {
    constructor(props) {
        super(props);

        let newData = this.concertDataFormat(fundsData.fundsPlate);
        newTabData = newData.map((item => {
            let lastTD = item[1] !== undefined ? fundsStyle.fundsPlateItemStyle : null;

            return (
                <tbody>
                    <tr >
                        <td className={fundsStyle.fundsPlateItemStyle}>
                            <p className={fundsStyle.fundsPlateItemName}>{item[0].plateName}</p>
                            <p className={fundsStyle.fundsPlateItemContent}>{item[0].plateZDF}</p>
                        </td>
                        <td className={lastTD}>
                            <p className={fundsStyle.fundsPlateItemName}>{item[1] !== undefined ? item[1].plateName : ""}</p>
                            <p className={fundsStyle.fundsPlateItemContent}>{item[1] !== undefined ? item[1].plateZDF : ""}</p>
                        </td>
                    </tr>
                </tbody>
            );
        }
        ));
    }

    concertDataFormat(originData, row, cl) {
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
                <table className={fundsStyle.fundsPlateContentStyle}>{newTabData}</table>
                <h4 className={fundsStyle.fundsTitleStyle}>今日资金流向</h4>
            </div>
        );
    }
}

ReactDOM.render(<MainComponent />, document.getElementById('root'));