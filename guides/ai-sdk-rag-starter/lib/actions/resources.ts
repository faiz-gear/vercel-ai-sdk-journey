"use server";

import {
  insertResourceSchema,
  NewResourceParams,
  resources,
} from "@/lib/db/schema/resources";
import { embeddings as embeddingsTable } from "./../db/schema/embeddings";
import { generateEmbeddings } from "./../ai/embedding";
import { db } from "../db";

export const createResource = async (input: NewResourceParams) => {
  try {
    const { content } = insertResourceSchema.parse(input);
    console.log("parsed content:", content)

    const [resource] = await db
      .insert(resources)
      .values({ content })
      .returning();

    const embeddings = await generateEmbeddings(content);
    console.log("embeddings:", embeddings)
    await db.insert(embeddingsTable).values(embeddings.map((embedding) => ({
      resourceId: resource.id,
      ...embedding,
    })));

    return "Resource successfully created and embedded.";
  } catch (e) {
    if (e instanceof Error) {
      return e.message.length > 0 ? e.message : "Error, please try again.";
    }
  }
};
