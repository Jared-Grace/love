import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_version_chapters_cache } from "./ebible_version_chapters_cache.mjs";
import { property_get } from "./property_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_punctuation_dash_apostrophe_kept_split } from "./text_punctuation_dash_apostrophe_kept_split.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { text_includes } from "./text_includes.mjs";
import { each } from "./each.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { list_slice } from "./list_slice.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_sum } from "./list_sum.mjs";
export async function ebible_version_words_spelled_gate_run() {
  "Gate: every word the bible's word reader hands back has to be spelled that way in the verse it came from. Throws so the dispatcher seam exits nonzero.";
  "★ A READER THAT DELETES A MARK INSTEAD OF CUTTING AT IT WELDS TWO WORDS INTO ONE AND NOTHING ANYWHERE COMPLAINS. The welded word is a real string, it files under a real recording name, and a voice reads it aloud - so the only thing on earth that can tell it apart from a word somebody wrote is the text itself. Measured over the English bible, the reader in place before this gate welded 1303 pairs like abednegowho and exilescelebrated, and every one of them had been recorded in four voices.";
  "★ IT PREPARES THE TEXT WITH ITS OWN TWO RULES RATHER THAN BORROWING THE READER'S, AND THAT IS THE ONLY REASON IT CAN DISAGREE. A check that prepares its evidence by calling the thing it is checking agrees with that thing by construction, including when that thing is wrong. The two allowances spelled out here - a curly apostrophe standing in for a straight one, and a comma grouping the digits of one number - are the entire list of places the reader is permitted to differ from what is written, so anything else it produces is a fault by definition rather than by a judgment made here.";
  "It asks the verse and not the book, because a word welded out of two is very often written somewhere else in the same book, and asking the book would let that pass.";
  "How many words were looked at travels out with the verdict, because finding no fault and reaching no text are otherwise the same answer.";
  arguments_assert(arguments, 0);
  let bible_folder = ebible_folder_english();
  let chapters = await ebible_version_chapters_cache(bible_folder);
  let unspelled = [];
  let sizes = [];
  function chapter_each(chapter) {
    let chapter_code = property_get(chapter, "chapter_code");
    let verses = property_get(chapter, "verses");
    function verse_each(verse) {
      let text = property_get(verse, "text");
      let straight = text.replace(/[‘’]/g, "'");
      let grouped = /(?<=\p{N}),(?=\p{N}{3}(?!\p{N}))/gu;
      let allowed = straight.replace(grouped, "");
      let lowered = text_lower_to(allowed);
      let said = text_punctuation_dash_apostrophe_kept_split(text);
      let item = list_size(said);
      list_add(sizes, item);
      function word_each(word) {
        let lower = text_lower_to(word);
        let spelled = text_includes(lowered, lower);
        if (spelled) {
          return;
        }
        let fault = {
          chapter_code: chapter_code,
          word: lower,
          text: text,
        };
        list_add(unspelled, fault);
      }
      each(said, word_each);
    }
    each(verses, verse_each);
  }
  each(chapters, chapter_each);
  let count = list_size(unspelled);
  let any = greater_than(count, 0);
  let listed = [];
  if (any) {
    list_add(listed, "ebible_words");
  }
  let none = not(any);
  let first = list_slice(unspelled, 0, 20);
  let shown = json_format_to(first);
  assert_json(none, {
    list: listed,
    json: {
      hint: text_combine_multiple([
        "ebible words: ",
        count,
        " words the reader hands back are not spelled that way in the verse they came from, so a reader would be shown and a voice would say something nobody wrote - ",
        shown,
      ]),
    },
  });
  let words = list_sum(sizes);
  let r = {
    words: words,
    unspelled: 0,
  };
  return r;
}
