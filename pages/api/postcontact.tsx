import * as fs from "fs";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    var data: any = await fs.promises.readdir("contactdata");
    fs.promises.writeFile(
      `contactdata/${++data.length}.json`,
      JSON.stringify(req.body)
    );
    res.status(200).json(["done"]);
  } else {
    res.status(200).json(["all_blogs"]);
  }
}
