import { not } from "./not.mjs";
import { fn_name } from "./fn_name.mjs";
import { storage_function_path } from "./storage_function_path.mjs";
import { g_sermon_edited_store_name } from "./g_sermon_edited_store_name.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { text_word_roots } from "./text_word_roots.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
export async function g_sermon_words_unjoined() {
  "Every pair of roots in the written sermons where one root is the whole beginning of the other - the shape a word takes when it should have joined its own family and did not.";
  "Believe and belief, judge and judgment, righteous and righteousness, great and greater: each pair is one word the reader would see as one word and the measure sees as two. Reading them off the sermons themselves is the point. A list of odd words written from memory only knows what somebody happened to think of, and the first such list here was missing wife within a minute of being looked at; the corpus knows which words it actually uses.";
  "Not every pair is a fault. Man and many begin the same and are not the same word, so this REPORTS rather than repairs - what to do with a pair is a judgment, and a wrong join is worse than a missing one.";
  "The two stores are both read, the written one and the edited one, because a word only ever seen in an approved line is exactly as much a word of this corpus as one in a draft.";
  let dir1 = storage_function_path(fn_name("g_sermon_write"), "");
  let dir2 = storage_function_path(g_sermon_edited_store_name(), "");
  let dirs = [dir1, dir2];
  let roots = [];
  for (let dir of dirs) {
    let files = await folder_read_files(dir);
    for (let file of files) {
      let file_path = path_join([dir, file]);
      let chapter = await file_read_json(file_path);
      let passages = property_get_or(chapter, "passages", []);
      for (let passage of passages) {
        let scripture = property_get_or(passage, "scripture", "");
        text_word_roots(scripture).forEach(function root_add(root) {
          list_add(roots, root);
        });
        let lines = property_get_or(passage, "lines", []);
        for (let line of lines) {
          let said = property_get_or(line, "text", "");
          text_word_roots(said).forEach(function root_add_line(root) {
            list_add(roots, root);
          });
        }
      }
    }
  }
  let named = list_unique(roots);
  let sorted = list_sort_text(named);
  let pairs = [];
  let index = 0;
  while (greater_than(sorted.length, index)) {
    let shorter = sorted[index];
    let ahead = add(index, 1);
    while (
      greater_than(shorter.length, 2) &&
      greater_than(sorted.length, ahead)
    ) {
      let longer = sorted[ahead];
      if (not(longer.startsWith(shorter))) {
        break;
      }
      let grew = subtract(longer.length, shorter.length);
      if (greater_than(5, grew)) {
        list_add(pairs, {
          shorter,
          longer,
        });
      }
      ahead = add(ahead, 1);
    }
    index = add(index, 1);
  }
  return {
    roots: named.length,
    pairs,
  };
}
