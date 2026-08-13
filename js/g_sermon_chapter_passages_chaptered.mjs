import { g_sermon_chapter_passages } from "./g_sermon_chapter_passages.mjs";
import { object_copy } from "./object_copy.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
export async function g_sermon_chapter_passages_chaptered(chapter_code) {
  "one written chapter's passages, each carrying the chapter it came from";
  "A PASSAGE DOES NOT KNOW ITS OWN CHAPTER as it is stored, because the store is a file per chapter and the chapter is the file name. That is enough while one chapter is read at a time and stops being enough the moment two are handed over together: a leader arc draws on the nearest chapters behind it, and Romans 7 verse 1 and Romans 8 verse 1 are both written [1]. Nineteen of sixty passages collided that way, and the arc's answer named a passage nothing could resolve.";
  "SO THE CHAPTER TRAVELS WITH THE PASSAGE rather than beside the list. A list of passages is filtered, sorted and concatenated on its way to a prompt, and anything held alongside it is lost at the first of those; a property on the passage survives all three.";
  "COPIED, so a caller reading the same chapter twice cannot be handed passages another caller has already written a chapter onto.";
  let passages = await g_sermon_chapter_passages(chapter_code);
  let chaptered = [];
  for (let passage of passages) {
    let copied = object_copy(passage);
    property_set(copied, "chapter", chapter_code);
    list_add(chaptered, copied);
  }
  return chaptered;
}
