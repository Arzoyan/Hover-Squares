import React from 'react';

export const createSquaer = (N) => {
    let data = [];

    for (let i = 0; i < N; i++) {
        data[i] = [];
        for (let j = 0; j < N; j++) {
            data[i][j] = { value: false, i, j };
        }
    }
    return data;
};


export const DrowSquaer = (props) => {
    const { items, onchange } = props;
    return (
        <div
            style={{ width: 700 }}>
            {
                items.map(item => {
                    return (
                        <div
                            key={JSON.stringify(item)}
                            style={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            {
                                item.map(element => {
                                    return (
                                        <div
                                            name={element.index}
                                            onMouseEnter={(e) => {
                                                onchange(element.i, element.j)
                                            }}
                                            style={{
                                                width: `calc((70vw - 50px) / 10)`,
                                                height: `calc((35vw - 50px) / 10)`, margin: 4,
                                                border: "1px solid red",
                                                backgroundColor: element.value ? "#000" : "#FFF"
                                            }}
                                            key={JSON.stringify(element)} />
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}
