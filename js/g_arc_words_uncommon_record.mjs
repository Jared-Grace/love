import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { add_1 } from "./add_1.mjs";
import { g_arc_words_said } from "./g_arc_words_said.mjs";
import { g_arc_words_carried } from "./g_arc_words_carried.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { equal } from "./equal.mjs";
import { list_tally } from "./list_tally.mjs";
import { words_early_reader } from "./words_early_reader.mjs";
import { word_early_reader_known_is } from "./word_early_reader_known_is.mjs";
import { not } from "./not.mjs";
export async function g_arc_words_uncommon_record(
  files,
  carried_words,
  said,
  homes,
) {
  "Every written character arc read off disk and reduced to what was said: how many chapters and how many people there were, every spoken word tallied, which mouths said each one, where each was first heard, and the unusual words characters hand to one another.";
  "A WORD HANDED FROM ONE CHARACTER TO ANOTHER IS KEPT ONCE PER MOUTH AND PER CHAPTER, because the same object carried through a scene is mentioned again and again, and a list counting every mention would report a prop as the rarest word in the game.";
  arguments_assert(arguments, 4);
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
      let spoken = g_arc_words_said(arc);
      let handed = g_arc_words_carried(arc);
      for (let word of handed) {
        list_add(carried_words, {
          word,
          chapter_code,
          index,
        });
      }
      let mouth = list_join_space([chapter_code, index]);
      for (let word of spoken) {
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
  let known_words = await words_early_reader();
  let carried = [];
  let carried_seen = {};
  for (let record of carried_words) {
    let carried_word = property_get(record, "word");
    let ordinary = word_early_reader_known_is(carried_word, known_words);
    let unusual = not(ordinary);
    if (unusual) {
      let carried_chapter = property_get(record, "chapter_code");
      let carried_index = property_get(record, "index");
      let key = list_join_space([carried_chapter, carried_index, carried_word]);
      let met = property_or_null(carried_seen, key);
      let new_here = equal(met, null);
      if (new_here) {
        carried_seen[key] = true;
        list_add(carried, record);
      }
    }
  }
  let r = {
    mouths,
    chapters,
    people,
    counts,
    known_words,
    carried,
  };
  return r;
}
