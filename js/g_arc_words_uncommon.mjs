import { g_arc_write } from "./g_arc_write.mjs";
import { folder_user_storage_function_path } from "./folder_user_storage_function_path.mjs";
import { folder_exists } from "./folder_exists.mjs";
import { folder_read_paths_async } from "./folder_read_paths_async.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { add_1 } from "./add_1.mjs";
import { g_arc_words_said } from "./g_arc_words_said.mjs";
import { list_add } from "./list_add.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { list_tally } from "./list_tally.mjs";
import { list_size } from "./list_size.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function g_arc_words_uncommon() {
  "Every word that has been said once and only once across every arc written so far, with the person who said it - the candidates for a word a young reader will not have.";
  "IT IS A REPORT AND NOT A GATE, deliberately. Whether a word is too hard is a question about English rather than about this repo, and answering it properly needs a list of the words a child of the settled reading age already has. There is no such list here, so a gate built on this would be ratcheting against a signal it cannot justify - and a check that fails for a reason nobody can state gets switched off rather than fixed.";
  "USED ONCE IS THE ONE THRESHOLD THAT IS NOT A CHOICE. Any other cut - fewer than three, fewer than five - is a number somebody picked, right for one size of corpus and quietly wrong for the next. The bottom of the distribution is where it is whatever the corpus does.";
  "IT SHARPENS AS MORE IS WRITTEN, which is why it reads every chapter rather than taking one. With a single chapter written, once-said catches roughly ten ordinary words for every hard one - laughed, smiling, waiting sit beside rite and unaccounted. With twenty chapters the ordinary words have all been said elsewhere and stop appearing, while a genuinely rare word still will not have been.";
  "COUNTS THE LOOKING AND HANDS THE COUNT BACK. Arcs live in storage and storage is not in the repo, so a machine that has written none answers nothing, and nothing is the right answer rather than a broken one.";
  let f = g_arc_write;
  let path = folder_user_storage_function_path(f);
  let exists = await folder_exists(path);
  let none = not(exists);
  let empty = {
    chapters: 0,
    people: 0,
    said: 0,
    words: 0,
    once: [],
  };
  if (none) {
    return empty;
  }
  let files = await folder_read_paths_async(path);
  let said = [];
  let homes = {};
  let chapters = 0;
  let people = 0;
  for (let file of files) {
    let chapter = await file_read_json(file);
    let chapter_code = property_get(chapter, "chapter_code");
    let written = property_get(chapter, "arcs");
    chapters = add_1(chapters);
    for (let entry of written) {
      people = add_1(people);
      let index = property_get(entry, "index");
      let arc = property_get(entry, "arc");
      let words = g_arc_words_said(arc);
      for (let word of words) {
        list_add(said, word);
        let home = property_or_null(homes, word);
        let first = equal(home, null);
        if (first) {
          homes[word] = {
            chapter_code,
            index,
          };
        }
      }
    }
  }
  let counts = list_tally(said);
  let once = [];
  let words = 0;
  for (let word of object_property_names(counts)) {
    words = add_1(words);
    let uses = property_get(counts, word);
    let alone = equal(uses, 1);
    if (alone) {
      let home = property_get(homes, word);
      let chapter_code = property_get(home, "chapter_code");
      let index = property_get(home, "index");
      list_add(once, {
        word,
        chapter_code,
        index,
      });
    }
  }
  let r = {
    chapters,
    people,
    said: list_size(said),
    words,
    once,
  };
  return r;
}
