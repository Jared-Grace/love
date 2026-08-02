import { property_get } from "./property_get.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { path_join } from "./path_join.mjs";
import { not } from "./not.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_includes } from "./text_includes.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { g_sermon_write } from "./g_sermon_write.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
export async function g_sermon_glosses_for_word(word) {
  "$plain word";
  ("every written line, in every chapter, that says this word",
    "so a term already defined in an earlier book can be given a DIFFERENT facet here instead of the same sentence twice",
    "read the answer before glossing a term you may have glossed before");
  let folder = local_function_folder(g_sermon_write);
  let names = await folder_read_files(folder);
  let wanted = text_lower_to(word);
  let found = [];
  async function chapter_check(name) {
    let file_path = path_join([folder, name]);
    let chapter = await file_read_json(file_path);
    let chapter_code = property_get(chapter, "chapter_code");
    function passage_check(passage) {
      if (not("lines" in passage)) {
        return;
      }
      let key = g_sermon_passage_verses_key(passage);
      function line_check(line) {
        let text = property_get(line, "text");
        let input = text_lower_to(text);
        if (text_includes(input, wanted)) {
          found.push({
            chapter_code,
            key,
            text,
          });
        }
      }
      property_get(passage, "lines").forEach(line_check);
    }
    property_get(chapter, "passages").forEach(passage_check);
  }
  let v = names.map(chapter_check);
  await Promise.all(v);
  return found;
}
