import React from 'react';
import stl from './NewsItem.module.css';


const NewsItem = (props) => {
    return (
        <div className={stl.news}>
            <div className={stl.news_caption}>
                {props.caption}
            </div>
            <div className={stl.news_content}>
                {props.text}
            </div>
            <a  className={stl.news_content_link} href='#'>Читать дальше</a>
        </div>
    );
}

export default NewsItem;