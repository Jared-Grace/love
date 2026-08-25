import { property_null_is } from "./property_null_is.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_interlinear_chapters_words_cache } from "./bible_interlinear_chapters_words_cache.mjs";
import { bible_words_names_apart } from "./bible_words_names_apart.mjs";
import { each } from "./each.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
import { list_add } from "./list_add.mjs";
import { list_first } from "./list_first.mjs";
import { object_values } from "./object_values.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { set_includes } from "./set_includes.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_punctuation_apostrophe_kept_removed } from "./text_punctuation_apostrophe_kept_removed.mjs";
import { text_words } from "./text_words.mjs";
export async function bible_names_transliterated(bible_folder) {
  "$plain bible_folder";
  "Every name in a bible that the interlinear tables also spell out in our letters, against the transliteration they spell it with - Mahalalel against ma·hal·al·'êl.";
  "★ THE TRANSLITERATION ALREADY CARRIES THE SYLLABLE BREAKS, AND THAT IS THE WHOLE REASON TO ASK IT. The Berean tables write a middle dot between one syllable and the next, so the division a pronouncing dictionary of English would have to be asked for is written into the text this repo already holds. An English dictionary was never going to hold these words at all - they are Hebrew and Greek - so this is not a second-best source for them, it is the only one on the disk.";
  "★ A GLOSS IS ONLY USED WHEN EXACTLY ONE NAME STANDS IN IT, AND THAT IS THE CARE THIS NEEDS. A gloss says what a whole original word was rendered as, so AND JAPHETH is one row and one transliteration; with a single name in it there is no question which name the transliteration belongs to, and with two there is no way to tell, so those rows are passed over rather than guessed at. The first row that names a name wins, because a name is transliterated the same way wherever it stands.";
  "What counts as a name is not decided here - it is the half of the bible's own vocabulary that is never once written in small letters. So a gloss word is looked up rather than judged, and nothing has to hold a list of who the people are.";
  arguments_assert(arguments, 1);
  let apart = await bible_words_names_apart(bible_folder);
  let names = property_get(apart, "names");
  let named = list_unique_set(names);
  let chapters = await bible_interlinear_chapters_words_cache();
  let transliterated = {};
  function word_add(word) {
    let gloss = property_get(word, "gloss");
    let spelled = text_words(gloss);
    function name_of(piece) {
      let bare = text_punctuation_apostrophe_kept_removed(piece);
      let lower = text_lower_to(bare);
      return lower;
    }
    let pieces = [];
    function collect(piece) {
      let lower = name_of(piece);
      let known = set_includes(named, lower);
      if (known) {
        list_add(pieces, lower);
      }
    }
    each(spelled, collect);
    let alone = list_size_1(pieces);
    if (not(alone)) {
      return;
    }
    let name = list_first(pieces);
    let fresh = property_null_is(transliterated, name);
    if (not(fresh)) {
      return;
    }
    let translit = property_get(word, "translit");
    property_set(transliterated, name, translit);
  }
  function verse_add(verse) {
    let words = property_get(verse, "words");
    each(words, word_add);
  }
  function chapter_add(verses) {
    each(verses, verse_add);
  }
  let all = object_values(chapters);
  each(all, chapter_add);
  return transliterated;
}
