import React from 'react';
import Ticket from "./Ticket";

const Bought = () => {
    return (
        <div>
            <br/><br/><br/><br/>
            <h1>Поздравляем, вам понравится</h1>
            <Ticket/>
            <button>Сохранить</button>
            <button>Поделиться</button>
        </div>
    );
};

export default Bought;