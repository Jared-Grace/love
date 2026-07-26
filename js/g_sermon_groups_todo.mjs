import { g_sermon_chapter_codes_all } from "./g_sermon_chapter_codes_all.mjs";
import { bible_data_path } from "./bible_data_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { list_add } from "./list_add.mjs";
export async function g_sermon_groups_todo() {
  "the resume work-list for passage grouping: split every sermon-ed chapter into {done, todo} by whether bible/<book>/<chapter>/groups.json exists. NOTE a todo chapter may still be mid-writing (partial) — verify ALL its verses are written (its passages reach the chapter's last verse) before grouping; the sermon loop leaves active fronts partial (e.g. JUD01 was only 6 verses)";
  let codes = await g_sermon_chapter_codes_all();
  let grouped = [];
  let pending = [];
  for (let code of codes) {
    let path = bible_data_path(code, "groups");
    let exists = await file_exists(path);
    if (exists) {
      list_add(grouped, code);
    } else {
      list_add(pending, code);
    }
  }
  let r = { done: grouped, todo: pending };
  return r;
}
