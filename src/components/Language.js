import React from 'react';

const Language = () => {
    return (
        <div>
            <form className={"lang"}>
                <input type="radio" id="All" name="language" value="ВСЕ"/>ВСЕ
                <input type="radio" id="RU" name="language" value="RU"/>RU
                <input type="radio" id="EN" name="language" value="EN"/>EN
                <input type="radio" id="FR" name="language" value="FR"/>FR
            </form>
        </div>
    );
};

export default Language;