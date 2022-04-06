import React from 'react';
import {excurse} from "./inform";

const Excurtion = () => {
    return (
        <div>
            <br/><br/><br/><br/>
            <img src={excurse.image} alt = "img"/>
            <h1>{excurse.name}</h1>
            <h5><i>{excurse.description}</i></h5>
            <h4><p>{excurse.info.city}</p>
                <p>{excurse.info.time}</p>
                <p>{excurse.info.price}</p>
                <p>{excurse.info.time}</p></h4>
            <h5>{excurse.text}</h5>
            <hr/>
            <table>
                <thead>
                <tr>
                    <th><img src={excurse.image} alt = "img"/></th>
                    <th>
                        <h4></h4>
                        <h5>{excurse.place}</h5>
                        <h6>
                            Участникам программ Маса и репатриантам до 1 года - 50% скидка <br/>
                            Уровень сложности материала: ${excurse.level}
                        </h6>
                        <hr/>
                        <h4><p>{excurse.info.city}</p>
                            <p>{excurse.info.time}</p>
                            <p>{excurse.info.price}</p>
                            <p>{excurse.info.time}</p></h4>
                        <button>Пойду</button>
                    </th>
                </tr>
                </thead>
            </table>
        </div>
    );
};

export default Excurtion;