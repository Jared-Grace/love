import { g_arc_written_chapter } from "./g_arc_written_chapter.mjs";
import { property_get } from "./property_get.mjs";
import { g_arc_lines_addressed } from "./g_arc_lines_addressed.mjs";
import { add_1 } from "./add_1.mjs";
import { words_early_reader_outside } from "./words_early_reader_outside.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_tally } from "./list_tally.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { object_property_names } from "./object_property_names.mjs";
export async function g_arc_words_outside_chapter(chapter_code) {
  "Every word in a whole chapter's written people that a child of the settled reading age would not have, each said once with how many lines reached for it, commonest first.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "IT IS THE EVIDENCE A WORD LIST IS DRAWN FROM, and that is why it counts rather than merely names. Somebody deciding which of these words the game means to TEACH and which a writer simply reached for cannot decide it word by word in the order a text happens to say them - the decision is the same one forty times over. Ranked by how many lines want a word, the handful that matter are read first and the tail is one pass of agreeing.";
  "IT READS THE WHOLE CHAPTER AND NOT ONE PERSON, unlike the check that files notes. A list of words is a fact about the game, so drafting it from one person would bake in that person's trade - a dyer's chapter would teach the repo that DYE is a word the faith is about.";
  "IT DECIDES NOTHING AND FILES NOTHING. The same reading is wanted before a list exists and again after one is added to, and a report that had written something down would have to be undone between the two.";
  let arcs = await g_arc_written_chapter(chapter_code);
  let words = [];
  let lines_read = 0;
  for (let entry of arcs) {
    let arc = property_get(entry, "arc");
    let lines = g_arc_lines_addressed(arc);
    for (let line of lines) {
      lines_read = add_1(lines_read);
      let text = property_get(line, "text");
      let outside = await words_early_reader_outside(text);
      list_add_multiple(words, outside);
    }
  }
  let counts = list_tally(words);
  let named = object_property_names(counts);
  function word_count(word) {
    let count = property_get(counts, word);
    return count;
  }
  list_sort_number_mapper_reverse(named, word_count);
  let ranked = [];
  for (let word of named) {
    let lines_saying = property_get(counts, word);
    list_add(ranked, {
      word,
      lines: lines_saying,
    });
  }
  let r = {
    chapter_code,
    people: list_size(arcs),
    lines: lines_read,
    words: list_size(named),
    ranked,
  };
  return r;
}
