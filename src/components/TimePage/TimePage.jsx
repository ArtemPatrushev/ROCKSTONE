import reactDom from 'react-dom';
import style from './TimePage.module.css';


const TimePage = (props) => {
    console.log(props.date);
    return (
        <div className={style.timePageWrapper}>
            <div className={style.timeBox}>
                <p className={style.time}>asdas</p>
            </div>
        </div>
    );
};

// function tick() {
//     return(
//         <TimePage date={new Date()} />,
//         document.getElementById('root')
//     );
// }

// setInterval(tick, 1000);

export default TimePage;