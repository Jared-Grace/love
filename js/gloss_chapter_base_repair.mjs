import { gloss_passage_base_repair } from "./gloss_passage_base_repair.mjs";
import { bible_interlinear_chapters } from "./bible_interlinear_chapters.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
import { add } from "./add.mjs";
export async function gloss_chapter_base_repair(chapter_code, fn) {
  "Bring one authored gloss chapter back in line with the base text, after the base text itself has changed.";
  "The stored wording of each verse and the list of words explained were both copied from the text as it stood when the chapter was authored, so a correction to that text leaves them behind: the file goes on carrying words the base does not carry, and goes on publishing them. This rewrites the wording and drops the stranded explanations, and leaves every explanation of a word the base still carries exactly as it was authored.";
  let chapters = await bible_interlinear_chapters();
  let verses_base = property_get(chapters, chapter_code);
  let path = local_function_path_json(chapter_code, fn);
  let chapter = await file_read_json(path);
  let passages = property_get(chapter, "passages");
  let removed = 0;
  function passage_read(passage) {
    let count = gloss_passage_base_repair(passage, verses_base);
    removed = add(removed, count);
  }
  each(passages, passage_read);
  let contents = json_format_to(chapter);
  await file_overwrite_uncached(path, contents);
  let r = {
    chapter_code,
    path,
    removed,
  };
  return r;
}
