import React from 'react';
import CountUp from 'react-countup';
import TrackVisibility from "react-on-screen";

const Data = [
    {
        countNum : 1934,
        countTitle: 'Foundation',
        description: 'Skål International was born in Paris',
    },
    {
        countNum : 15,
        countTitle: 'Clubs',
        description: 'More than 326 Clubs around the world',
    },
    {
        countNum : 14,
        countTitle: 'Cities',
        description: 'Clubs and members of more than 102 countries',
    },
    {
        countNum : 1300,
        countTitle: 'Members',
        description: 'More than 12855 travel and tourism professionals connected',
    },
];
const CounterUpTwo = ({textALign, counterStyle, column}) => {
    return (
        <div className="row">
            {Data.map((data, index) => (
                <div className={`${column}`} key={index}>
                    <div className={`count-box ${counterStyle} ${textALign}`}>
                        <TrackVisibility once>
                            {({ isVisible }) => isVisible && 
                                <div className="count-number" style={{color: "#65A8DE"}}>{isVisible ? <CountUp end={data.countNum} /> : 0}</div>}
                        </TrackVisibility>
                        <h5 className="title" style={{color: "#65A8DE"}}>{data.countTitle}</h5>
                        <p className="description">{data.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default CounterUpTwo;