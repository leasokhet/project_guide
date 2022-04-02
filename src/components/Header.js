import React from 'react';
import Search from "./Search";
import Date from "./Date";
import Place from "./Place";
import Level from "./Level";
import Language from "./Language";

const Header = () => {
    return (
        <table className={"header"}>
            <thead align={"left"}>
                <tr>
                    <th>Поиск</th>
                    <th>Дата</th>
                    <th>Место</th>
                    <th>Уровень</th>
                    <th>Язык</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><Search/></td>
                    <td><Date/></td>
                    <td><Place/></td>
                    <td><Level/></td>
                    <td><Language/></td>
                </tr>
            </tbody>
        </table>
    );
};

export default Header;