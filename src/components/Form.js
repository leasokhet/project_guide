import React from 'react';
import Calc from "./Calc";

const Form = () => {
    return (
        <div>
            <form>
                <input type={"text"} placeholder={"Имя"} id={"name"}/><br/>
                <input type={"text"} placeholder={"Телефон"} id={"phone"}/><br/>
                <input type={"text"} placeholder={"Email"} id={"email"}/><br/>
                <h5>Количество (до 10)<Calc/></h5>
            </form>
        </div>
    );
};

export default Form;