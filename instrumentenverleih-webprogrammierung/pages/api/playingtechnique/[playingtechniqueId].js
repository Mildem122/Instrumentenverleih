// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../../lib/prisma.ts";

export default async function handler(req, res) {
  let data;
  let playingtechniqueId = req.query.playingtechniqueId;
  switch (req.method) {
    case "GET":
      data = await prisma.playingTechnique.findUnique({
        where: {
          id: playingtechniqueId,
        },
      });
      break;
    case "PUT":
      //Update;
      data = req.body;
      data = await prisma.playingTechnique.update({
        where: {
          id: playingtechniqueId,
        },
        data: data,
      });
      break;
    case "DELETE":
      data = await prisma.playingTechnique.delete({
        where: {
          id: playingtechniqueId,
        },
      });
      break;
  }

  res.status(200).json(data);
}
