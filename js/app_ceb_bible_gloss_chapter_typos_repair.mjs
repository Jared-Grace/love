import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_passage_words_text_first } from "./gloss_passage_words_text_first.mjs";
import { gloss_passage_typos_repair } from "./gloss_passage_typos_repair.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { file_write_json } from "./file_write_json.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { each } from "./each.mjs";
export async function app_ceb_bible_gloss_chapter_typos_repair(chapter_code) {
  "$plain chapter_code";
  "the code is a chapter's name, like JAS02, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "Puts the passage's own spelling back under every explanation in one authored Cebuano chapter that was misspelling the word it explains.";
  "One chapter at a time, and named by nothing but its code, so it can be asked for again exactly as it was run and the whole of what it did is in its own name and that code.";
  "The file is left untouched when nothing was misspelled, so running this over a chapter that is already right is not a change and does not read as one.";
  let fn = app_ceb_bible_gloss_generate;
  let path = local_function_path_json(chapter_code, fn);
  let chapter = await file_read_json(path);
  let passages = property_get(chapter, "passages");
  let fixes = [];
  function passage_repair(passage) {
    let repaired = gloss_passage_typos_repair(
      passage,
      gloss_passage_words_text_first,
    );
    list_add_multiple(fixes, repaired);
  }
  each(passages, passage_repair);
  let any = list_empty_not_is(fixes);
  if (any) {
    await file_write_json(path, chapter);
  }
  let r = {
    chapter_code,
    fixes,
  };
  return r;
}
