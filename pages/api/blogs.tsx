import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";

type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  var data = await fs.promises.readdir(`blogdata`);
  let c: string = req.query.count as string;
  data = data.slice(0, parseInt(c));
  var all_blogs: any = [];
  var myfile;
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile(`blogdata/` + item, "utf-8");
    all_blogs.push(JSON.parse(myfile));
  }
  res.status(200).json(all_blogs);
}
