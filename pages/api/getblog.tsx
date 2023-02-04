// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// // http://localhost:3000/api/getblog?slug=how-to-learn-javascript -> Valid slug
// // http://localhost:3000/api/getblog?slug=piahoashaoshao -> Invalid slug
// import type { NextApiRequest, NextApiResponse } from 'next'
// import * as fs from "fs"

// type Data = {}

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
// //   fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, data)=>{
// //     if(err){
// //         res.status(500).json({error: 'No such blog found'})
// //     }
// //     console.log(req.query.slug);
// //     res.status(200).json(JSON.parse(data));
// //   })

//   // fs.promises.readdir(`blogdata`, (err, data)=>{
//   //   console.log(data);
//   //   var all_blogs: any = [];
//   //   data.forEach((item)=>{
//     //       console.log(item);
//     //       fs.readFile(('getblog/' + item), (result)=>{
//       //           all_blogs.push(result);
//       //       })
//       //   })
//       //   res.status(200).json(all_blogs);
//       // })

/*
  var all_blogs: any = [];
  var data = await fs.promises.readdir(`blogdata`)
  var myfile;
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    console.log(item);
    myfile = await fs.promises.readFile((`blogdata/`+ item), "utf-8");
    all_blogs.push(JSON.parse(myfile));
    // console.log(myfile);
  }
  res.status(200).json(all_blogs);
}
// The above code did not work for some reason.
*/

import * as fs from 'fs';
export default function handler(req:any, res:any){
  fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (err, data) => {
    if(err){
      res.status(500).json({error:"No such blog found."})
    }
    console.log(req.query.slug)
    res.status(200).json(JSON.parse(data))
  })
}