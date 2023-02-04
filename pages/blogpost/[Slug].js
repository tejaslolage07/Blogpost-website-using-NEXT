import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

// The challenge is the following steps:
// 1. To find the file according to the Slug request.
// 2. Populate them inside the page.

// Typescript requires the function name to start with capital letters. But then, the file name should also have Slug and not slug.\
// Same goes for 'Slug' anywhere in the file.

const Slug = (props) => {
    const [blog, setBlog] = useState(props.my_blog);
    return (
        <div>
            <main className={styles.main}>
                <h1>{blog && blog.title}</h1>
                <hr />
                <div className={styles.blogItem}>
                    {blog && blog.content}
                </div>
            </main>
        </div>
    );
};

export async function getServerSideProps(context) {
    // const router = useRouter();  // No need of using router as the context object directly contains the slug we want.
    // const { Slug } = router.query;
    const { Slug } = context.query; // context object has a lot of things in it. query is the one containing our slug.
    let data = await fetch(`http://localhost:3000/api/getblog?slug=${Slug}`);
    let my_blog = await data.json();
    return {
        props: { my_blog },
    };
}

export default Slug;
