// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../../lib/prisma.ts";

export default async function handler(req, res) {
  let data;
  let deviceId = req.query.deviceId;
  switch (req.method) {
    case "GET":
      data = await prisma.device.findUnique({
        where: {
          id: deviceId,
        },
      });
      break;
    case "PUT":
      //Update;
      data = req.body;
      if (data.availableDevices == 0) {
        data.isAvailable = false;
      }
      data = await prisma.device.update({
        where: {
          id: deviceId,
        },
        data: data,
      });
      break;
    case "DELETE":
      data = await prisma.device.delete({
        where: {
          id: deviceId,
        },
      });
      break;
  }

  res.status(200).json(data);
}
