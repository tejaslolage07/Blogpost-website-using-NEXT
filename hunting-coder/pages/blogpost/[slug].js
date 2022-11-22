import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

// The challenge is the following steps:
// 1. To find the file according to the Slug request.
// 2. Populate them inside the page.
const Slug = () => {
    const router = useRouter();
    const { Slug } = router.query;
    return (
        <div>
            <main className={styles.main}>
                <h1>The title of this page is {Slug}</h1>
                <hr />
                <div className={styles.blogItem}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
                    deleniti eveniet magni nulla sit accusantium laboriosam quaerat nemo
                    beatae, officia consequatur! Possimus laudantium est dolorem
                    architecto quibusdam quam sed excepturi nihil mollitia.
                </div>
            </main>
        </div>
    );
};

export default Slug;
