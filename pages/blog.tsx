import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import * as fs from "fs";

// Challenges to complete:
// 1. Collect all file data from the blogdata directory.
// 2. Iterate through them and display them.

const Blog = (props: any) => {
  const [blogs, setBlogs] = useState(props.all_blogs);
  // useEffect is used to populate the webpage using JavaScript. But this time, the content will be populated using getServerSideProps (Server-Side-Rendering)
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parsed) => {
  //       setBlogs(parsed);
  //     });
  // }, []);
  return (
    <main className={styles.main}>
      <div className={styles.blogs}>
        <h1>Popular blogs:</h1>
        {blogs.map((blogItem: any) => {
          return (
            <div key={blogItem.slug} className={styles.blogItem}>
              <Link href={`/blogpost/${blogItem.slug}`}>
                <h2>{blogItem.title}</h2>
              </Link>
              <p className={styles.blogItemPara}>
                {blogItem.metadesc.substr(0, 200)}...
              </p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

// // Using getServerSideProps(), server-side-rendering is possible. To have a look, go to http://localhost:3000/blog and inspect element to see all the content being served through HTML.
// export async function getServerSideProps(context: any) {
//   let data = await fetch("http://localhost:3000/api/blogs");
//   let all_blogs = await data.json();
//   return {
//     props: { all_blogs },
//   };
// }

export async function getStaticProps(context: any) {
  var all_blogs: any = [];
  var data = await fs.promises.readdir(`blogdata`);
  var myfile;
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    // console.log(item);
    myfile = await fs.promises.readFile(`blogdata/` + item, "utf-8");
    all_blogs.push(JSON.parse(myfile));
  }
  return {
    props: { all_blogs },
  };
}

export default Blog;
