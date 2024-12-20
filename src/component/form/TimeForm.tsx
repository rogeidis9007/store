import React from 'react';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';

const format = 'hh:mm';

const TimeForm: React.FC = () => <TimePicker defaultValue={dayjs('11:30', format)} format={format} showNow={false}/>;

export default TimeForm;