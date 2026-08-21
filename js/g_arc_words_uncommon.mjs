import { list_join_space } from "./list_join_space.mjs";
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
  "The two shapes a word a young reader will not have shows up in, taken over every arc written so far, each one carrying the person who said it - a word said once in the whole corpus, and a word said several times by one person and by nobody else.";
  "IT IS A REPORT AND NOT A GATE, deliberately. Whether a word is too hard is a question about English rather than about this repo, and answering it properly needs a list of the words a child of the settled reading age already has. There is no such list here, so a gate built on this would be ratcheting against a signal it cannot justify - and a check that fails for a reason nobody can state gets switched off rather than fixed.";
  "USED ONCE IS THE ONE THRESHOLD THAT IS NOT A CHOICE. Any other cut - fewer than three, fewer than five - is a number somebody picked, right for one size of corpus and quietly wrong for the next. The bottom of the distribution is where it is whatever the corpus does.";
  "ONCE-SAID CANNOT SEE A WORD SOMEBODY REPEATS, and that is most of the hard ones. A person's trouble is the thing they keep coming back to, so the word for it is said in the line that opens the arc and again every time the trouble is answered - rites was said three times by the dyer, was the hardest word in the chapter, and sat below this report's floor the whole time. It was found by a reader, which is the one way it could have been found.";
  "SO THE SECOND SHAPE IS SAID MORE THAN ONCE AND BY ONE PERSON ONLY. Both halves are extremes of the distribution rather than numbers somebody picked: more than once is the complement of the first list, and one speaker is the fewest a said word can have. A word everybody uses is the language; a word one person keeps using is that person's own, and a person's own word is exactly where a translated trade or a household religion puts a word no child has met.";
  "It says nothing about whether the word is HARD. Every arc has its own subject and so has its own words for it, and most of what comes back is ordinary - wool, dye, husband. The list is short enough to read, which is the whole of what a report owes; a gate here would be ratcheting against the fact that people talk about different things.";
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
    own: [],
  };
  if (none) {
    return empty;
  }
  let files = await folder_read_paths_async(path);
  let said = [];
  let homes = {};
  let mouths = {};
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
      let mouth = list_join_space([chapter_code, index]);
      for (let word of words) {
        list_add(said, word);
        let home = property_or_null(homes, word);
        let first = equal(home, null);
        if (first) {
          homes[word] = {
            chapter_code,
            index,
          };
          mouths[word] = {};
        }
        mouths[word][mouth] = true;
      }
    }
  }
  let counts = list_tally(said);
  let once = [];
  let own = [];
  let words = 0;
  for (let word of object_property_names(counts)) {
    words = add_1(words);
    let uses = property_get(counts, word);
    let home = property_get(homes, word);
    let chapter_code = property_get(home, "chapter_code");
    let index = property_get(home, "index");
    let alone = equal(uses, 1);
    if (alone) {
      list_add(once, {
        word,
        chapter_code,
        index,
      });
    }
    let again = not(alone);
    if (again) {
      let heard = property_get(mouths, word);
      let list = object_property_names(heard);
      let speakers = list_size(list);
      let only = equal(speakers, 1);
      if (only) {
        list_add(own, {
          word,
          uses,
          chapter_code,
          index,
        });
      }
    }
  }
  let r = {
    chapters,
    people,
    said: list_size(said),
    words,
    once,
    own,
  };
  return r;
}
