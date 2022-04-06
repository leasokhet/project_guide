import React from 'react';
import ListExcurtion from "./ListExcurtion";
import Excurtion from "./Excurtion";
import AboutPerson from "./AboutPerson";
import Buy from "./Buy";
import Pay from "./Pay";
import Bought from "./Bought";
import NoPage from "./NoPage";
import "../img.jpg"

const Body = () => {
    const value = 1
    switch (value) {
        case 1: return <ListExcurtion/>
        case 2: return <Excurtion/>
        case 3: return <AboutPerson/>
        case 4: return <Buy/>
        case 5: return <Pay/>
        case 6: return <Bought/>
        default: return <NoPage/>
    }
    // return (
    //     <div>
    //         <ListExcurtion/>
    //         {/*<Excurtion/>*/}
    //         {/*<AboutPerson/>*/}
    //         {/*<Buy/>*/}
    //         {/*<Pay/>*/}
    //         {/*<Bought/>*/}
    //         {/*<NoPage/>*/}
    //     </div>
    // );
};

export default Body;