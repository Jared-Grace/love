import { g_sermon_generate_chapter_get } from "../../../love/public/src/g_sermon_generate_chapter_get.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function g_sermon_generate_chapter_passages_get(chapter_code) {
  let chapter = await g_sermon_generate_chapter_get(chapter_code);
  let passages = property_get(chapter, "passages");
  return passages;
}
