import { bible_glyph_gloss_placeholder_is } from "./bible_glyph_gloss_placeholder_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function bible_interlinear_verse_gloss_text(verse) {
  "$plain verse";
  "the verse is one row of the interlinear, holding its words. It is text to read and nothing that runs.";
  "One interlinear verse as a single run of English, built from the word-for-word renderings printed under its words.";
  "What comes out is deliberately the word-for-word rendering rather than a published translation: a translation is somebody's copyright, and this column is the interlinear's own, so what is built from it may be shown to anybody. It reads CHOPPILY for the same reason, and that is the information rather than a fault - a smooth translation has moved the words about until it can no longer be seen which English word stands under which original one.";
  "The table's own filler is DROPPED rather than printed. A row of dots and a vvv are notation the table uses to say where the English of a word went, and a reader has not been taught that notation and cannot learn it from the page - so printed, they read as words of scripture that happen to be unpronounceable. Nothing is lost, because neither one was ever an English rendering of anything.";
  let glosses = [];
  for (let word of verse.words) {
    let filler = bible_glyph_gloss_placeholder_is(word.gloss);
    if (filler) {
      continue;
    }
    list_add(glosses, word.gloss);
  }
  let text = list_join_space(glosses);
  return text;
}
