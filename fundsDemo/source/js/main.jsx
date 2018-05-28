import React from 'react';
import ReactDOM from 'react-dom';
import fundsStyle from '../css/fundsStyle.less';
import fundsData from '../bean/fundsBean.json';

let data;
let tableData;
let newData;
let newTabData;

class MainComponent extends React.Component {
    constructor(props) {
        super(props);

        console.log("size = " + fundsData.fundsPlate.length);
        data = [0, 1, 2, 3, 4, 5, 6, 7];
        tableData = data.map((item) =>
            <li className={fundsStyle.fundsPlateItemStyle} key={item.toString()}>
                <div>
                    <p className={fundsStyle.fundsPlateItemName}>{fundsData.fundsPlate[item].plateName}</p>
                    <p className={fundsStyle.fundsPlateItemZDF}>{fundsData.fundsPlate[item].plateZDF}</p>
                </div>
            </li>
        );

        let newDat = this.concertDataFormat(fundsData.fundsPlate);

        newTabData = newDat.map((item => {
            // console.log("new size = " + newDat.length + " cur data = " + item[0].plateName);

            return (<tbody>
                <tr className={fundsStyle.fundsPlateItemStyle}>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>);
        }
        ));
    }

    concertDataFormat(originData, row, cl) {
        let k = 0;
        let newFormat = new Array();
        for (let i = 0; i < originData.length / 2; i++) {
            for (let j = 0; j < 2; j++) {
                newFormat[i] = new Array();
                if (k < originData.length) {
                    newFormat[i][j] = originData[k];
                    // console.log("index = " + k + " name = " + originData[k].plateName + " zdf = " + originData[k].plateZDF);
                    console.log("current data row = " + i + " clown = " + j + "  data = " + newFormat[i][j].plateName);
                }
                k++;
            }
        }

        console.log("new size = " + newFormat.length);

        for (let m = 0; m < newFormat.length; m++) {
            console.log("m = " + m);
            let test = newFormat[m];
            console.log("index " + m + " inner size = " + test.length);
            // for(let j = 0;j < test.length; j++){
            //     console.log("testcxzxz = " + test[j].plateName);
            // }

            // console.log("testcxzxz = " + test[0].plateName);
        }

        return newFormat;
    }

    render() {
        return (
            <div>
                <h4 className={fundsStyle.fundsTitleStyle}>所属板块</h4>
                <ul>{tableData}</ul>
                <h4 className={fundsStyle.fundsTitleStyle}>今日资金流向</h4>

                <table className={fundsStyle.fundsPlateContentStyle}>{newTabData}</table>
            </div>
        );
    }
}

ReactDOM.render(<MainComponent />, document.getElementById('root'));