import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { g_sermon_generate_chapter_passages_get } from "./g_sermon_generate_chapter_passages_get.mjs";
import { g_sermon_generate_download } from "./g_sermon_generate_download.mjs";
import { g_sermon_study_passage } from "./g_sermon_study_passage.mjs";
export async function g_sermon_study(chapter_code) {
  let generated_passages =
    await g_sermon_generate_chapter_passages_get(chapter_code);
  let edited = await g_sermon_generate_download(chapter_code);
  let edited_passages = property_get(edited, "passages");
  function lambda(generated_passage) {
    let verse_numbers = property_get(generated_passage, "verse_numbers");
    let edited_passage = list_find_property(
      edited_passages,
      "verse_numbers",
      verse_numbers,
    );
    let study = g_sermon_study_passage(generated_passage, edited_passage);
    return study;
  }
  let passages = list_map(generated_passages, lambda);
  return {
    chapter_code,
    passages,
  };
}
