"use server";

import { readFile } from "fs/promises";
import path from "path";

export const readPdf = async () => {
  const fullPath = path.join(process.cwd(), "public", "./pdfs/NARESH_MERN.pdf");

  const buffer = await readFile(fullPath);

  return buffer;
};
