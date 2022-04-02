import React from 'react';
import '../style.css'

const Search = () => {
    return (
        <form>
            <input className={"search"} type="text" name="text" placeholder= "Название, гид, другое..."  onChange={()=>{}}/>
            <input type="submit" name="submit" className="submit" value="Искать!"/>
        </form>
    );
};

export default Search;