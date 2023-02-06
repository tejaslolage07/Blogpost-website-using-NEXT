import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import * as fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";

const Blog = (props: any, all_count: any) => {
  const [blogs, setBlogs] = useState(props.all_blogs);
  const [count, setCount] = useState(2);

  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`);
    setCount(count + 2);
    let data = await d.json();
    setBlogs(data);
  };
  return (
    <main className={styles.main}>
      <div className={styles.blogs}>
        <h1>Popular blogs:</h1>
      </div>
      <InfiniteScroll
        dataLength={blogs.length} //This is important field to render the next data
        next={fetchData}
        hasMore={props.all_count !== blogs.length}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {blogs.map((blogItem: any) => {
          return (
            <div key={blogItem.slug} className={styles.blogItem}>
              <Link href={`/blogpost/${blogItem.slug}`}>
                <h2>{blogItem.title}</h2>
              </Link>
              <p className={styles.blogItemPara}>
                {blogItem.metadesc.substr(0, 200)}...
              </p>
              <Link href={`/blogpost/${blogItem.slug}`}>
                <button className={styles.btn}>Read more</button>
              </Link>
            </div>
          );
        })}
      </InfiniteScroll>
    </main>
  );
};

export async function getStaticProps(context: any) {
  var all_blogs: any = [];
  var data = await fs.promises.readdir(`blogdata`);
  let all_count = data.length;
  var myfile;
  for (let index = 0; index < 2; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile(`blogdata/` + item, "utf-8");
    all_blogs.push(JSON.parse(myfile));
  }
  return {
    props: { all_blogs, all_count },
  };
}

export default Blog;
