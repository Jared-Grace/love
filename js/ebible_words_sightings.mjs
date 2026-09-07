import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_verses_all } from "./ebible_verses_all.mjs";
import { property_get } from "./property_get.mjs";
import { text_words_any_script_pattern } from "./text_words_any_script_pattern.mjs";
import { null_is } from "./null_is.mjs";
import { list_tally_add } from "./list_tally_add.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { object_values_map } from "./object_values_map.mjs";
export async function ebible_words_sightings(bible_folder) {
  "$plain bible_folder";
  "Every word one translation uses, as its publisher wrote it, with how many times it stands there and where it is first met: which chapter, which verse, and the whole of that verse's words.";
  "The verse it was first met in is carried along because a word on its own settles nothing. Whether a run of letters is one word or two with the space missing is a question about the sentence it stands in, so anybody ruling on it has to be shown that sentence, and going back for it afterwards means reading the whole translation again once per word.";
  "First is the first the reading comes to rather than a chosen one. Nothing here knows which verse shows a word off best, and picking by any measure it could invent would be dressing an arbitrary choice as a judgment.";
  "★ A HYPHEN ENDS A WORD HERE, AND IN SOME LANGUAGES IT SHOULD NOT. The pattern this counts by takes a word to be a run of letters, so a Cebuano word written with a glottal stop in it - panan-aw, pagtulon-an, puloy-anan - is filed as two words that are neither of them words, and every fragment so made joins the vocabulary while the real word never appears in it at all. Measured over the Cebuano translation, thirty-two words a gloss store had asked about were missing for exactly this reason and no other.";
  "Which chapters are read, and in which order, is the whole-translation walk's business rather than this reading's. Two readings of one translation that each made their own walk could quietly disagree about which chapters are in it.";
  arguments_assert(arguments, 1);
  let verses = await ebible_verses_all(bible_folder);
  let counts = {};
  let firsts = {};
  for (let verse of verses) {
    let text = property_get(verse, "text");
    let verse_number = property_get(verse, "verse_number");
    let chapter_code = property_get(verse, "chapter_code");
    let pattern = text_words_any_script_pattern();
    let words = text.match(pattern);
    let wordless = null_is(words);
    if (wordless) {
      continue;
    }
    list_tally_add(counts, words);
    for (let word of words) {
      let known = firsts[word];
      if (known) {
        continue;
      }
      firsts[word] = {
        chapter_code,
        verse_number,
        text,
      };
    }
  }
  function count_join(first, word) {
    let count = property_get(counts, word);
    let joined = object_merge_set(first, {
      count,
    });
    return joined;
  }
  let sightings = object_values_map(firsts, count_join);
  return sightings;
}
