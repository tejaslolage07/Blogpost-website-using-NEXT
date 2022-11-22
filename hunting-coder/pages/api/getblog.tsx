// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/getblog?slug=how-to-learn-javascript -> Valid slug
// http://localhost:3000/api/getblog?slug=piahoashaoshao -> Invalid slug
import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from "fs"

type Data = {
  error: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
//   fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, data)=>{
//     if(err){
//         res.status(500).json({error: 'No such blog found'})
//     }
//     console.log(req.query.slug);
//     res.status(200).json(JSON.parse(data));
//   })
  fs.readdir(`blogdata`, (err, data)=>{
    console.log(data);
    res.status(200).json(data);
  })
}

