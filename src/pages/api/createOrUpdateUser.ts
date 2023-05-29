import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { supabaseId, fullName, email } = req.body;
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }
  if (!supabaseId || !fullName || !email) {
    return res.status(400).json({
      success: false,
      error: "Missing supabaseId, fullName, or email",
    });
  }

  try {
    // Check if the user already exists in the database
    const existingUser = await prisma.user.findUnique({
      where: { supabaseId },
    });

    if (!existingUser) {
      // Create a new User entry in the database
      const user = await prisma.user.upsert({
        where: { supabaseId: supabaseId },
        update: { name: fullName, email: email },
        create: {
          supabaseId: supabaseId,
          name: fullName,
          email: email,
        },
      });

      console.log("New user created with ID:", user.id);
    }

    res.status(200).json({ success: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
}
