import { g_sermon_generate_chapter_get } from "../../../love/public/src/g_sermon_generate_chapter_get.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function g_sermon_generate_chapter_passages_get(chapter_code) {
  let chapter = await g_sermon_generate_chapter_get(chapter_code);
  let passages = object_property_get(chapter, "passages");
  return passages;
}
