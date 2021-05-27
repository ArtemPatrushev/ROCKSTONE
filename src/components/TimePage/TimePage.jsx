import style from './TimePage.module.scss';
// import moment from 'moment';
import { format } from 'date-fns'
import { useEffect, useState } from 'react';


const TimePage = () => {

    const [time, setTime] = useState(format(new Date(), "HH:mm:ss"));

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(format(new Date(), "HH:mm:ss"));
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);

    const currentTime = format(new Date(), "HH:mm:ss");

    return (
        <div className={style.timePageWrapper}>
            <div className={style.timeBox}>
                <p className={style.timeBox__time}>
                    {currentTime}
                </p>
            </div>
        </div>
    );
};

export default TimePage;