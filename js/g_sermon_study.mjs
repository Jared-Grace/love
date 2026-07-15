import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { list_map } from "./list_map.mjs";
import { g_sermon_generate_chapter_passages_get } from "./g_sermon_generate_chapter_passages_get.mjs";
import { g_sermon_generate_download } from "./g_sermon_generate_download.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { g_sermon_study_passage } from "./g_sermon_study_passage.mjs";
export async function g_sermon_study(chapter_code) {
  let generated_passages =
    await g_sermon_generate_chapter_passages_get(chapter_code);
  let edited = await g_sermon_generate_download(chapter_code);
  let edited_passages = property_get(edited, "passages");
  let edited_by_verses = {};
  function index_edited(edited_passage) {
    let key = g_sermon_passage_verses_key(edited_passage);
    property_set(edited_by_verses, key, edited_passage);
  }
  each(edited_passages, index_edited);
  function lambda(generated_passage) {
    let key = g_sermon_passage_verses_key(generated_passage);
    let edited_passage = property_get(edited_by_verses, key);
    let study = g_sermon_study_passage(generated_passage, edited_passage);
    return study;
  }
  let passages = list_map(generated_passages, lambda);
  return {
    chapter_code,
    passages,
  };
}
