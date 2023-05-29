// pages/api/journal-entry/create.js
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { userId, date, morning, evening } = req.body;
    try {
      const newEntry = await prisma.journalEntry.create({
        data: {
          userId,
          date,
          morning: {
            create: morning,
          },
          evening: {
            create: evening,
          },
        },
      });
      res.status(200).json(newEntry);
    } catch (error) {
      res.status(500).json({ error: "Failed to create journal entry" });
    }
  }
}
