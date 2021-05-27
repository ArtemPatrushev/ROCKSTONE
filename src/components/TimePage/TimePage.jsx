import { useEffect, useState } from 'react';

import { format } from 'date-fns';

import style from './TimePage.module.scss';

const TimePage = () => {

    const [time, setTime] = useState(format(new Date(), 'HH:mm:ss'));

    useEffect(() => {
        const timer = setInterval(() => setTime(format(new Date(), 'HH:mm:ss')), 1000);
        return () => clearInterval(timer);
    });

    return (
        <div className={style.timePageWrapper}>
            <div className={style.timeBox}>
                <p className={style.timeBox__time}>
                    {time}
                </p>
            </div>
        </div>
    );
};

export default TimePage;
