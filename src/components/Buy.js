import React from 'react';
import ExampleExcurtion from "./ExampleExcurtion";
import Form from "./Form";

const Buy = () => {
    return (
        <div>
            <br/><br/><br/><br/>
            <h1>Записаться и оплатить</h1>
            <ExampleExcurtion/>
            <table><thead><tr><th><Form/></th><th><h5>Внимание!</h5> <br/><h6>Спасибо за внимание.</h6></th></tr></thead></table>
            <button>Оплатить</button>
            <p>Нажимая “Оплатить”, я соглашаюсь с <u>правилами приватности.</u></p>
        </div>
    );
};

export default Buy;