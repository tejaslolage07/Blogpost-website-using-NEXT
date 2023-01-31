import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

// The challenge is the following steps:
// 1. To find the file according to the Slug request.
// 2. Populate them inside the page.
const Slug = () => {
    const [blog, setBlog] = useState();
    const router = useRouter();
    useEffect(() => {
        if(!router.isReady) return;
        const { Slug } = router.query;
        fetch(`http://localhost:3000/api/getblog?slug=${Slug}`).then((a) => {
            return a.json();
      })
      .then((parsed) => {
        setBlog(parsed);
      });
    }, [router.isReady]);

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

export default Slug;
