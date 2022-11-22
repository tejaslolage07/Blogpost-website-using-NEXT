import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

// Challenges to complete:
// 1. Collect all file data from the blogdata directory.
// 2. Iterate through them and display them.

const blog = () => {
  return (
    <main className={styles.main}>
      <div className={styles.blogs}>
        <h1>Popular blogs:</h1>
        <div className={styles.blogItem}>
          <Link href={"/blogpost/learn-javascript"}>
            <h2>How to learn JavaScript in 2022?</h2>
          </Link>
          <p>JavaScript is widely used for designing logic for the web.</p>
        </div>
        <div className={styles.blogItem}>
          <Link href={"/blogpost/learn-javascript"}>
            <h2>How to learn JavaScript in 2022?</h2>
          </Link>
          <p>JavaScript is widely used for designing logic for the web.</p>
        </div>
        <div className={styles.blogItem}>
          <Link href={"/blogpost/learn-javascript"}>
            <h2>How to learn JavaScript in 2022?</h2>
          </Link>
          <p>JavaScript is widely used for designing logic for the web.</p>
        </div>
      </div>
    </main>
  );
};

export default blog;
