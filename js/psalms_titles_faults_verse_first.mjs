import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_chapters_verse_last } from "./psalms_chapters_verse_last.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_set } from "./property_set.mjs";
export async function psalms_titles_faults_verse_first(chapters, passages) {
  "Everything wrong with the verses a set of song titles claim: a name reaching past the end of its chapter, a name running from a later verse back to an earlier one, and two songs claiming the very same verses.";
  "THE FAULTS ARE GATHERED RATHER THAN THROWN ON THE FIRST ONE, because a person about to correct titles wants the whole list in front of them, and one title can be wrong in more than one way at once.";
  arguments_assert(arguments, 2);
  let verse_last_by_chapter = await psalms_chapters_verse_last(chapters);
  let faults = [];
  let seen = {};
  for (let passage of passages) {
    let chapter = property_get(passage, "chapter");
    let verse_first = property_get(passage, "verse_first");
    let verse_last = property_get(passage, "verse_last");
    let mark = property_get(passage, "mark");
    let title = property_get(passage, "title");
    let video_id = property_get(passage, "video_id");
    let chapter_verse_last = property_get(verse_last_by_chapter, chapter);
    let past_the_end = greater_than(verse_last, chapter_verse_last);
    if (past_the_end) {
      let fault = {
        video_id,
        title,
        why: "the name reaches past the last verse the chapter has",
        chapter_verse_last,
      };
      list_add(faults, fault);
    }
    let backwards = greater_than(verse_first, verse_last);
    if (backwards) {
      let fault = {
        video_id,
        title,
        why: "the name runs from a later verse back to an earlier one",
      };
      list_add(faults, fault);
    }
    let key = text_combine_multiple([
      chapter,
      ":",
      verse_first,
      "-",
      verse_last,
      mark,
    ]);
    let already = property_exists(seen, key);
    if (already) {
      let fault = {
        video_id,
        title,
        why: "another song already claims these very verses",
        sung_also_by: property_get(seen, key),
      };
      list_add(faults, fault);
    }
    property_set(seen, key, video_id);
  }
  return faults;
}
