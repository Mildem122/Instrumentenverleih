// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "../../../../lib/prisma.ts";

export default async function handler(req, res) {
  let data = null;
  let query = req.query.playingTechniqueText.toLowerCase();
  let playingTechniqueText = query.charAt(0).toUpperCase() + query.slice(1);
  switch (req.method) {
    case "GET":
      let playingTechnique = await prisma.playingTechnique.findMany({
        where: {
          playingTechniqueText: playingTechniqueText,
        },
      });
      let playingTechniqueId = playingTechnique[0]?.id;
      if (playingTechniqueId === undefined) {
        break;
      }
      data = await prisma.instrument.findMany({
        where: {
          playingTechniqueId: playingTechniqueId,
        },
      });
      if (data.length === 0) {
        data = null;
      }
      break;
  }

  res.status(200).json(data);
}
