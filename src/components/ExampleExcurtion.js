import React from 'react';
import {excurse} from "./inform";
import '../style.css'
import pic from "../img.jpg"

const ExampleExcurtion = () => {
    return (
        <div>
        <table className={"excursion"}>
            <thead>
            <tr>
                <th><img src={excurse.image} alt={"img"}/></th>
                <th className={"excursion-name"}>{excurse.name}</th>
                <th className={"excursion-date"}>{excurse.date}</th>
                <th className={"excursion-info"}>
                    <p>{excurse.info.city}</p>
                    <p>{excurse.info.time}</p>
                    <p>{excurse.info.price } </p>
                    <p>{excurse.info.time}</p>
                </th>
            </tr>
            </thead>
            <tbody>
           <tr>
               <td></td>
            <td className={"excursion-desc"}>{excurse.description}</td>
            <td className={"excursion-level"}>{excurse.level}</td>
            <td><button className={"excursion-button"}>Подробнее</button></td></tr>
            <tr><td></td>
            <td className={"excursion-guide"}>{excurse.guide}</td></tr>
            </tbody>
        </table>
        </div>
    );
};

export default ExampleExcurtion;