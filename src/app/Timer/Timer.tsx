import React from 'react'
import { NumberBox } from './TimeBox'
import { useState, useEffect } from 'react'


export const TimerContainer = ({targetDate} : {targetDate: Date}) => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    useEffect(() => {
        const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = new Date(targetDate).getTime() - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
        };

        const updateTimeLeft = () => {
        setTimeLeft(calculateTimeLeft());
        };

        const timer = setInterval(updateTimeLeft, 1000);
        updateTimeLeft(); // Initialize immediately

        return () => clearInterval(timer);
    }, [targetDate]);
    return (
     <div className="rounded-xl">
       <div className="grid grid-cols-2 gap-4 py-6 px-10 md:flex md:items-center md:justify-between md:mt-2  rounded-xl md:px-6 md:py-8 ">
            <NumberBox num={timeLeft.days} unit="Days" flip={true} />
            <span className=" hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50 ">:</span>
            <NumberBox num={timeLeft.hours} unit="Hours" flip={true} />
            <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50 ">:</span>
            <NumberBox num={timeLeft.minutes} unit="Minutes" flip={true}/>
            <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50 ">:</span>
            <NumberBox num={timeLeft.seconds} unit="Seconds" flip={true} />
        </div>
   
      </div>
    )
}