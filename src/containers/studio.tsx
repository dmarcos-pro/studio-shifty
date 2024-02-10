import React from "react";
import data from '../content.json';

// CSS 
import common from '@scss/common.module.scss';
import article from '@scss/article.module.scss';


const Studio = () => {
    // const studioItem = data.navigation.find(item => item.id === 'studio');
    return (
        <div className={`${article.studio}`}>
            <section>
                <aside className={`${common.container}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: data.about_us.story.title }} />
                    <div dangerouslySetInnerHTML={{ __html: data.about_us.story.content }} />
                </aside>
            </section>
            <section>
                <aside className={`${common.container}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: data.about_us.vision.title }} />
                    <div dangerouslySetInnerHTML={{ __html: data.about_us.vision.content }} />
                </aside>
            </section>
        </div>
    )
};

export default Studio;