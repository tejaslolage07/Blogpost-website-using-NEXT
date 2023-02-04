import * as fs from "fs";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    // If the request being sent is POST, this will execute.

    // Here, the way different contact files are generated is being handled smartly. First, we get the contents of contactdata folder. Then, we just give the name of next generated file as no. of files already present + 1. 
    // Although this approaches has its own flaws i.e if one json file could not be generated due to any reason, the file generator would fail and files could get overwritten.

    // Better solution for this would be to use a firm database on the backend and write data through MERN stack or something like that.
    var data: any = await fs.promises.readdir("contactdata");
    fs.promises.writeFile(`contactdata/${++data.length}.json`, JSON.stringify(req.body));
    res.status(200).json(["done"]);
    // console.log()
  } else {
    // else this will execute.
    res.status(200).json(["all_blogs"]);
  }
}
