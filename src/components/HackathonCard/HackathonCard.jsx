import React from 'react';
import stl from './HackathonCard.module.css';
import data from '../image/hackathon_card/date-1.png';
import location from '../image/hackathon_card/location-1.png';
import reward from '../image/hackathon_card/reward-1.png';


const HackathonCard = (props) => {
    return (
        <div className={stl.hackathon_card} style={{
            background: props.hackathonCard.background
        }}>
            <img src={props.hackathonCard.background_image} className={stl.background_hexagon_1} alt=""/>
            <img src={props.hackathonCard.challenge_logo} className={stl.challenge_logo} alt=""/>
            <div className={stl.hackathon_card_flex_container}>
                <div className={stl.hackathon_card_content}>
                    <h2 className={stl.hackathon_card_content_caption}>{props.hackathonCard.caption}</h2>
                    <div className={stl.hackathon_card_content_text}>
                        {props.hackathonCard.text}
                    </div>
                    <div className={stl.hackathon_card_content_info}>
                        <img src={data} className={stl.hackathon_card_content_info_icon} alt="data_icon"/>
                        <p className={`${stl.hackathon_card_content_info_text} ${stl.hackathon_card_content_info_text_width}`}>{props.hackathonCard.info_text.data}</p>
                    </div>
                    <div className={stl.hackathon_card_content_info}>
                        <img src={location} className={stl.hackathon_card_content_info_icon} alt="data_location"/>
                        <p className={stl.hackathon_card_content_info_text}>{props.hackathonCard.info_text.location}</p>
                    </div>
                    <div className={stl.hackathon_card_content_info}>
                        <img src={reward} className={stl.hackathon_card_content_info_icon} alt="data_reward"/>
                        <p className={stl.hackathon_card_content_info_text}>{props.hackathonCard.info_text.reward}</p>
                    </div>
                </div>
                <a href="#" className={stl.hackathon_card_button}>
                    Подробнее
                </a>
            </div>

            <img src={props.hackathonCard.illustration} className={stl.hackathon_card_illustration} alt="illustration"/>

        </div>
    );
}

export default HackathonCard;