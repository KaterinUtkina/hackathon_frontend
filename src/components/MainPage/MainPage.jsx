import React from 'react';
import stl from './MainPage.module.css';
import HackathonCard from "../HackathonCard/HackathonCard";
import background_hexagon_1 from '../image/hackathon_card/hexagon-1.png';
import background_hexagon_2 from '../image/hackathon_card/hexagon-gradient-2.png';
import background_hexagon_2_2 from '../image/hackathon_card/hexagon-2.png';
import background_hexagon_3 from '../image/hackathon_card/hexagon-gradient-3.png';


const MainPage = (props) => {
    return (
        <div className={stl.main_page}>
            <img src={background_hexagon_1} className={stl.background_hexagon_1} alt=""/>
            {props.hackathonCards.map(hackathonCard => {
                return (
                    <HackathonCard hackathonCard={hackathonCard}/>
                )
            })}
            <img src={background_hexagon_2} className={stl.background_hexagon_2} alt=""/>
            <img src={background_hexagon_2_2} className={stl.background_hexagon_2_2}/>
            <img src={background_hexagon_3} className={stl.background_hexagon_3}/>
        </div>
    );
}

export default MainPage;