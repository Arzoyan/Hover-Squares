import React, { useLayoutEffect, useState } from 'react';
import { GET_Data } from '../Api/Api';
import DropDowun from './components/DropDowun';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { createSquaer, DrowSquaer } from './components/DrowSquaer';
import "./HomePage.scss";


const HomePage = () => {
    const [levelOfSquear, setLevelOfSquear] = useState();
    const [itemList, setItemList] = useState();
    const [levelList, setLevelList] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);


    useLayoutEffect(() => {
        (async () => {
            let result = await GET_Data();
            let levels = [{ label: "select mode", value: 0 }];
            for (let key in result) {
                levels.push({ label: key.split("Mode", 1), value: result[key].field })
            }
            setLevelList(levels);
        })()
    }, []);


    return (
        <div>
            <div>
                <DropDowun
                    options={levelList}
                    onChange={(item) => setLevelOfSquear(item)}
                />
                <Button type="primary" onClick={() => { setItemList(createSquaer(levelOfSquear)) }}>Start</Button>
            </div>
            <div style={{ display: 'flex' }}>
                {itemList ? <DrowSquaer
                    items={itemList || []}
                    itemCounter={levelOfSquear}
                    onchange={(i, j) => {
                        let data = [...itemList];
                        data[i][j] = { ...data[i][j], value: !data[i][j].value };
                        let newItems = [];
                        for (let i = 0; i < data.length; i++) {
                            for (let j = 0; j < data[i].length; j++) {
                                if (data[i][j].value) {
                                    newItems.push(`Row ${data[i][j].i + 1} Col ${data[i][j].j + 1}`)
                                }
                            }
                        }
                        setSelectedItems(newItems);
                        setItemList(data);
                    }}
                /> : null}
                <div className={"selected-items"} >
                    <h2> Hover squares </h2>
                    {
                        selectedItems.map(item => {
                            return (<span
                                className={"selected-item"}
                                key={item}
                            >
                                {item}
                            </span>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage;
