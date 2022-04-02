import React from 'react';

const Level = () => {
    return (
        <div className={"level"}>
            <select name="level">
                <option value="Турист">Турист</option>
                <option value="Опытный">Опытный</option>
                <option value="Местный">Местный</option>
            </select>
        </div>
    );
};

export default Level;