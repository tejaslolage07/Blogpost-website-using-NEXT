import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import { TypePredicateKind } from "typescript";
import * as fs from 'fs';

// The challenge is the following steps:
// 1. To find the file according to the Slug request.
// 2. Populate them inside the page.

// Typescript requires the function name to start with capital letters. But then, the file name should also have Slug and not slug.\
// Same goes for 'Slug' anywhere in the file.

const Slug = (props) => {
    function createMarkup(content) {
        return { __html: content }
    }
    const [blog, setBlog] = useState(props.my_blog);
    return (
        <div>
            <main className={styles.main}>
                <h1>{blog && blog.title}</h1>
                <hr />
                {blog && <div className={styles.blogItem} dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
            </main>
        </div>
    );
};

// getStaticPaths() helps the getStaticProps() function to identify paths where the static data is located. (ex. JSON files)
export async function getStaticPaths() {
    return {
        paths: [
            { params: { Slug: "how-to-learn-flask" } }, // (Could be generated dynamically instead of hardcoding.)
            { params: { Slug: "how-to-learn-javascript" } },
            { params: { Slug: "how-to-learn-nextjs" } },
        ],
        fallback: true
    };
}

// Below function is for static-site-generation. The client side javascript need not send an api call and wait for the content to be delivered.
// The getStaticProps function is useful for pre-generation of a static HTML site before even the api is active.
// This helps to achieve very fast load times by using CDNs and is used when the content does not change rapidly (ex. web-blog, etc.)
export async function getStaticProps(context) {
    const { Slug } = context.params;
    let my_blog = await fs.promises.readFile(`blogdata/${Slug}.json`, 'utf-8');
    return {
        props: { my_blog: JSON.parse(my_blog) },
    };
}

// Below function is for server-side-rendering purpose. The getServerSideProps() function helps the client by directly shipping the requested 
// content in the form of an HTML page rather than the client talking to api through javascript and populating the content without HTML.
// This helps in SEO. Used in web-pages where the data changes rapidly. (ex. Social media websites, live television.)
// export async function getServerSideProps(context) {
//     // const router = useRouter();  // No need of using router as the context object directly contains the slug we want.
//     // const { Slug } = router.query;
//     const { Slug } = context.query; // context object has a lot of things in it. query is the one containing our slug.
//     let data = await fetch(`http://localhost:3000/api/getblog?slug=${Slug}`);
//     let my_blog = await data.json();
//     return {
//         props: { my_blog },
//     };
// }

export default Slug;
