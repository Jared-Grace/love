import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_urdu } from "./ebible_folder_urdu.mjs";
import { ebible_words_sightings } from "./ebible_words_sightings.mjs";
import { urdu_glued_words_decided } from "./urdu_glued_words_decided.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { urdu_text_repaired } from "./urdu_text_repaired.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function urdu_glued_words_review_rows() {
  "Every ruling anybody has made about a run-together word in the Urdu bible, laid out for somebody who reads Urdu to check: the word, what was decided about it, how many times it stands in the translation, and a verse it stands in - shown both as the publisher wrote it and as a reader now gets it.";
  "The rulings are the exposed part of this repair and the only part a reader cannot see is wrong. The finding of the words is a machine's and can be argued with from the counts; where the space belongs is a judgment, made by somebody who does not read Urdu, and once made it goes into scripture in front of people. So it is written out to be checked rather than left as data nobody opens.";
  "Both spellings of the verse are carried because that is the whole of the question. Reading only the word says nothing about whether the space belongs there; reading the sentence before and after says it at once, and a reader who knows the language can answer from the two lines without knowing anything about this repo.";
  "Ordered by how often the word stands there, most first, because that is the order the mistakes cost by. A wrong ruling on a word used eight hundred times is eight hundred verses; the same wrong ruling at the bottom of the list is one.";
  "A word ruled on that the translation no longer uses comes back with a count of nought and no verse. That is not a fault: the rulings are kept as they were made, and a re-fetched download may simply no longer hold the word. It is worth seeing rather than dropping, because a ruling about a word that is not there is a ruling that should be asked about.";
  arguments_assert(arguments, 0);
  let bible_folder = ebible_folder_urdu();
  let sightings = await ebible_words_sightings(bible_folder);
  let decided = urdu_glued_words_decided();
  let split = property_get(decided, "split");
  let keep = property_get(decided, "keep");
  function row_new(word, spaced) {
    let seen = sightings[word];
    let unseen = not(seen);
    if (unseen) {
      let gone = {
        word,
        spaced,
        count: 0,
        chapter_code: null,
        verse_number: null,
        verse: null,
        verse_read: null,
      };
      return gone;
    }
    let count = property_get(seen, "count");
    let chapter_code = property_get(seen, "chapter_code");
    let verse_number = property_get(seen, "verse_number");
    let verse = property_get(seen, "text");
    let verse_read = urdu_text_repaired(verse);
    let row = {
      word,
      spaced,
      count,
      chapter_code,
      verse_number,
      verse,
      verse_read,
    };
    return row;
  }
  let split_rows = [];
  let welded = object_keys(split);
  for (let word of welded) {
    let spaced = property_get(split, word);
    let row = row_new(word, spaced);
    list_add(split_rows, row);
  }
  let keep_rows = [];
  for (let word of keep) {
    let row = row_new(word, null);
    list_add(keep_rows, row);
  }
  function count_of(row) {
    let c = property_get(row, "count");
    return c;
  }
  let split_ordered = list_sort_number_mapper_reverse(split_rows, count_of);
  let keep_ordered = list_sort_number_mapper_reverse(keep_rows, count_of);
  let r = {
    split: split_ordered,
    keep: keep_ordered,
  };
  return r;
}
