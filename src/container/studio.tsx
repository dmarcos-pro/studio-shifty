import React from "react";
import content from '@contentJson';

// CSS 
import common from '@scss/common.module.scss'
import article from '@scss/article.module.scss'

const Studio = () => {
    return (
        <div className={`${article.studio}`}>
            <section>
                <aside className={`${common.container}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: content.about.story.title }} />
                    <div dangerouslySetInnerHTML={{ __html: content.about.story.content }} />
                </aside>
            </section>
            <section>
                <aside className={`${common.container}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: content.about.vision.title }} />
                    <div dangerouslySetInnerHTML={{ __html: content.about.vision.content }} />
                </aside>
            </section>
        </div>
    )
};

export default Studio;