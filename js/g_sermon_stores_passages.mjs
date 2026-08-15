import { g_sermon_stores_chapters } from "./g_sermon_stores_chapters.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { list_add } from "./list_add.mjs";
export async function g_sermon_stores_passages() {
  "Every written passage in both sermon stores, flat, each one still carrying the chapter and the verses it came from.";
  "Both stores are read, the written one and the edited one, because an approved passage is as much of this corpus as a draft.";
  "It hands back the passage whole - its scripture and its lines together - rather than one part of it, because that is what lets a reading that needs the two BESIDE each other have them. A reader wanting only the words can drop the rest; a reader given only the words cannot get the pairing back.";
  "Where those stores are, and the walk through their files, is asked of the one reading that answers it rather than written out here a second time.";
  let chapters = await g_sermon_stores_chapters();
  let passages_all = [];
  for (let chapter of chapters) {
    let chapter_code = property_get_or(chapter, "chapter_code", "");
    let passages = property_get_or(chapter, "passages", []);
    for (let passage of passages) {
      let placed = {
        chapter_code,
        verse_numbers: property_get_or(passage, "verse_numbers", []),
        scripture: property_get_or(passage, "scripture", ""),
        lines: property_get_or(passage, "lines", []),
      };
      list_add(passages_all, placed);
    }
  }
  return passages_all;
}
