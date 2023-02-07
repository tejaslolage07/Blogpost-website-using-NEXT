import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import * as fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";

const Blog = (props: any, all_count: any) => {
  const [blogs, setBlogs] = useState(props.all_blogs);
  const [count, setCount] = useState(2);

  const fetchData = async () => {
    let d = await fetch(`/api/blogs/?count=${count + 2}`);
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


// Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione in corporis, ab sequi, ipsa et repudiandae rerum nisi repellendus nam porro pariatur sapiente eveniet nulla debitis voluptas, aut incidunt dolore cupiditate ea modi blanditiis veniam. Facere nobis cum, placeat nesciunt cumque molestiae soluta ut autem obcaecati. Delectus facilis accusantium aspernatur sequi amet. Neque, maxime quisquam. Tempore dolorum veniam voluptatibus architecto ab odio nisi corrupti temporibus quis molestiae, cum aut quas dicta excepturi dolore nihil commodi hic soluta placeat quos, deleniti non! Autem quaerat temporibus velit nemo dolorem ducimus perferendis nisi vel ex pariatur inventore voluptatum voluptate, optio quam labore? Exercitationem sint praesentium officiis sed consequatur libero velit, non inventore quam molestias ex voluptatum adipisci et asperiores. Praesentium harum soluta blanditiis facilis voluptatem, eum corrupti qui vitae. Quisquam tempora error recusandae odio tenetur commodi facere nihil, quaerat, molestiae beatae deserunt ducimus vitae provident magni, in vero nisi optio fugit sed nulla. Recusandae, dolorum rem excepturi a repudiandae iusto ducimus cum aspernatur numquam pariatur? Fugiat ullam itaque, architecto ipsum explicabo iure vero tenetur consequatur culpa excepturi dolorem expedita! Exercitationem ipsum, cumque ab veritatis incidunt consequuntur cupiditate distinctio accusantium nemo vitae maxime quam similique aspernatur voluptatibus numquam sapiente labore quod aut dolor voluptates rerum. Deleniti repellat nihil ratione voluptate ipsam minima maxime ea quia tenetur totam soluta aliquam expedita temporibus non, veritatis quasi ipsum harum, corporis voluptatum. Velit tempore porro vitae incidunt dicta necessitatibus molestiae fugit. Nostrum, nisi itaque? Eos architecto nesciunt porro labore eaque voluptas iste pariatur quibusdam, corrupti odit officia ducimus mollitia officiis fugit, recusandae nobis quae ab? Quo nesciunt rem perferendis, sequi fugit, maxime reprehenderit, voluptate pariatur commodi dolorem iste a. Sequi qui excepturi, accusantium soluta perferendis quisquam voluptate nesciunt? Voluptatum ut laudantium ad corporis illo fuga nesciunt suscipit. Velit, officiis exercitationem, impedit omnis explicabo quas molestiae ea recusandae delectus molestias atque quia iure? Iste ea repellat maiores dolorem earum omnis quia aspernatur, sunt doloribus. Cupiditate ab porro et quod nesciunt quia obcaecati harum doloribus? Reprehenderit harum dolorem vitae fugit nihil eligendi obcaecati modi possimus cupiditate delectus consectetur hic deleniti ipsum magni, corporis cumque.