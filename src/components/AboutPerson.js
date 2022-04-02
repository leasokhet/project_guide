import React from 'react';
import {guide1} from "./inform";
import ExampleExcurtion from "./ExampleExcurtion";

const AboutPerson = () => {
    return (
        <div>
            <br/><br/><br/><br/>
            <table>
                <thead>
                <tr>
                    <th><img src = {guide1.image} alt = "imgtyhjgsrtfg"/></th>
                    <th><h1>{guide1.name}</h1>
                        <h5>Лицензированный гид (верифицирован israguru.com)</h5>
                        <h2>Кто я</h2>
                        <h5>{guide1.infor}</h5>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td> </td>
                    <td>
                        <h2>Ближайшие экскурсии:</h2>
                        <ExampleExcurtion/>
                        <ExampleExcurtion/>
                        <ExampleExcurtion/>
                        <h2>Я могу</h2>
                        <h5>{guide1.ican}</h5>
                        <h2>Связаться со мной</h2>
                        <h5>{guide1.connect}</h5>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AboutPerson;