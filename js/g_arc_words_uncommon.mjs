import { g_arc_words_carried } from "./g_arc_words_carried.mjs";
import { words_early_reader } from "./words_early_reader.mjs";
import { word_early_reader_known_is } from "./word_early_reader_known_is.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { g_arc_written_files_or_null } from "./g_arc_written_files_or_null.mjs";
import { null_is } from "./null_is.mjs";
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
  "IT IS A REPORT AND NOT A GATE, deliberately. There is a list of the words a child of the settled reading age already has, and it is read below - but a list of ordinary English is not a list of every word a person may fairly say. A dyer says dye and a weaver says loom, and neither belongs on a list of what a six-year-old knows nor in a build that fails. So the list is used to SHORTEN what a human reads and never to decide anything, and what is left over is handed to somebody who can tell a trade from a barrier.";
  "USED ONCE IS THE ONE THRESHOLD THAT IS NOT A CHOICE. Any other cut - fewer than three, fewer than five - is a number somebody picked, right for one size of corpus and quietly wrong for the next. The bottom of the distribution is where it is whatever the corpus does.";
  "ONCE-SAID CANNOT SEE A WORD SOMEBODY REPEATS, and that is most of the hard ones. A person's trouble is the thing they keep coming back to, so the word for it is said in the line that opens the arc and again every time the trouble is answered - rites was said three times by the dyer, was the hardest word in the chapter, and sat below this report's floor the whole time. It was found by a reader, which is the one way it could have been found.";
  "SO THE SECOND SHAPE IS SAID MORE THAN ONCE AND BY ONE PERSON ONLY. Both halves are extremes of the distribution rather than numbers somebody picked: more than once is the complement of the first list, and one speaker is the fewest a said word can have. A word everybody uses is the language; a word one person keeps using is that person's own, and a person's own word is exactly where a translated trade or a household religion puts a word no child has met.";
  "A WORD AN EARLY READER ALREADY HAS IS DROPPED BEFORE EITHER LIST, and the count of those is handed back rather than thrown away. Without it both lists are mostly ordinary English - laughed, smiling, waiting - and a list somebody has to wade through is a list nobody reads twice. The dropping is the only place a judgement about English enters this function, it is made in accepted data where a human can correct it, and it can only ever shorten what is shown.";
  "A THIRD LIST IS NOT ABOUT THE PLAYER AT ALL. Every summary written so far is handed to the prompt that writes the next person, so a word in a summary is not sitting still - it is the example the next arc is written from, and a summary written in a harder register hands that register on. The two lists above cannot see it, because a summary is never spoken and the words a player reads are the only ones they count.";
  "IT IS FILTERED AND NOT RANKED, unlike the other two. A chapter holds one summary per person, so rarity among a dozen sentences means nothing and any threshold over it would be invented. What is left is every summary word outside the vocabulary the writing was asked for, said once per person who used it.";
  "It says nothing about whether the word is HARD. Every arc has its own subject and so has its own words for it, and most of what comes back is ordinary - wool, dye, husband. The list is short enough to read, which is the whole of what a report owes; a gate here would be ratcheting against the fact that people talk about different things.";
  "IT SHARPENS AS MORE IS WRITTEN, which is why it reads every chapter rather than taking one. With a single chapter written, once-said catches roughly ten ordinary words for every hard one - laughed, smiling, waiting sit beside rite and unaccounted. With twenty chapters the ordinary words have all been said elsewhere and stop appearing, while a genuinely rare word still will not have been.";
  "COUNTS THE LOOKING AND HANDS THE COUNT BACK. Arcs live in storage and storage is not in the repo, so a machine that has written none answers nothing, and nothing is the right answer rather than a broken one.";
  let files = await g_arc_written_files_or_null();
  let none = null_is(files);
  let empty = {
    chapters: 0,
    people: 0,
    said: 0,
    words: 0,
    known: 0,
    once: [],
    own: [],
    carried: [],
  };
  if (none) {
    return empty;
  }
  let said = [];
  let carried_words = [];
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
  let once = [];
  let own = [];
  let words = 0;
  let known = 0;
  for (let word of object_property_names(counts)) {
    words = add_1(words);
    let already = word_early_reader_known_is(word, known_words);
    if (already) {
      known = add_1(known);
      continue;
    }
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
    known,
    once,
    own,
    carried,
  };
  return r;
}
