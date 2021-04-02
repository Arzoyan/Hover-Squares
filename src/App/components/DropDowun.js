import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';

const { Option } = Select;

const DropDowun = (props) => {
    const { options, onChange } = props;

    return (
        <Select style={{ width: 220 }} onChange={onChange}>
            {options.map(level => (
                <Option key={level.label} value={level.value}>{level.label}</Option>
            ))}
        </Select>
    )
}

export default DropDowun;
