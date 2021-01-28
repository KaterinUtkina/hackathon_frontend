import React from 'react';
import stl from './Aside.module.css';
import NewsItem from "../NewsItem/NewsItem";
import aside_caption_img_2020 from '../image/aside_img/marathon-2020.svg';
import aside_caption_img_marathon from '../image/aside_img/marathon-hexagon.jpg';
import aside_caption_img_line from  '../image/aside_img/marathon-lines.svg';
import aside_caption_img_hexagon2 from  '../image/aside_img/hexagon-gradient-2.png';
import aside_caption_img_three_hexagons3 from  '../image/aside_img/three-hexagons.png';
import aside_caption_img_hexagon3 from  '../image/aside_img/hexagon-3.png';

const Aside = (props) => {
    return (
        <aside className={stl.aside}>
            <div className={stl.aside_caption}>
                <img src={aside_caption_img_marathon} className={stl.aside_caption_img_marathon} alt=""/>
                <h3>
                    Марафон <br/> ИТ-соревнований
                </h3>
                <img src={aside_caption_img_2020} className={stl.aside_caption_img_2020} alt=""/>
                <img src={aside_caption_img_line} className={stl.aside_caption_img_line} alt=""/>
                <div className={stl.aside_caption_wrapper}>
                    <img src={aside_caption_img_hexagon2} className={stl.aside_caption_img_hexagon2} alt=""/>
                    <p className={stl.aside_caption_content}>
                        Роснефть приглашает разработчиков и аналитиков принять участие в одном из трех соревнований
                    </p>
                    <div className={stl.aside_caption_line_down}/>
                </div>
            </div>
            <img src={aside_caption_img_three_hexagons3} className={stl.aside_caption_img_three_hexagons3} alt=""/>
            <div className={stl.aside_news}>
                <p className={stl.aside_news_hashtag}>#ПульсМарафон</p>
                {props.aside.news.map(newsItem => {
                    return (
                        <NewsItem caption={newsItem.caption} text={newsItem.text}/>
                    )
                })}
            </div>
            <img src={aside_caption_img_hexagon3} className={stl.aside_caption_img_hexagon3} alt=""/>
            <div className={stl.aside_news_button}>
                <a href='#' className={stl.aside_news_button_link}>
                    Ко всем новостям
                </a>
                <a href='#' className={stl.aside_news_button_link_hover}>
                    Перейти к мероприятиям
                </a>
            </div>
            <div className={stl.aside_mail}>
                По всем вопросам: <br/>
                <span>
                    rd.knpk@bnipi.rosneft.ru
                </span>
            </div>
            <div className={stl.aside_social_network}>
                <a href='#' className={stl.aside_social_network_vk}/>
                <a href='#' className={stl.aside_social_network_facebook}/>
                <a href='#' className={stl.aside_social_network_instagram}/>
            </div>
        </aside>

    );
}

export default Aside;