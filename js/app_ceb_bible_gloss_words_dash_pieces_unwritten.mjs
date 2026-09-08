import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_words_dash_pieces_absent } from "./app_ceb_bible_gloss_words_dash_pieces_absent.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { bible_words_written } from "./bible_words_written.mjs";
import { list_lowered_set } from "./list_lowered_set.mjs";
import { set_includes } from "./set_includes.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_words_dash_pieces_unwritten() {
  "Of the pieces that fall out of the Cebuano gloss store's dashed words when the dash is cut, the ones the whole Cebuano translation never writes standing alone.";
  "★ THIS IS THE ONLY TEST IN THE REPO THAT CAN CALL ONE OF THESE PIECES A NON-WORD, BECAUSE IT ASKS A SOURCE THE GLOSS STORE DID NOT WRITE. Every other reading of them is circular: the store is asked whether it explains the piece, and the piece exists only because the store's own word was cut. The translation is the independent witness - it is the text the explanations are about, it was not produced by this pipeline, and if a piece is a Cebuano word that these verses use, the translation writes it somewhere.";
  "A piece the translation does write is not thereby innocent and a piece it does not is not thereby a mistake anyone made. Cebuano roots often live only inside longer forms, so a real root can be missing here for a reason that is about the language and not about this repo. What the answer settles is narrower and harder: for a piece in this list, no source available here has ever seen it standing on its own, so any sentence calling it a word or a root is a statement with nothing behind it.";
  "The comparison is made in small letters on both sides, because the translation keeps its capitals on purpose and a piece cut out of the middle of a word never has one.";
  "The written words are asked for whole and lowered into a set afterwards, rather than asked for already lowered, because the count handed back is of the words the translation writes as it writes them. Lowering merges a name at the start of a sentence into the ordinary word beneath it, so the two numbers are not the same number and the one worth saying beside this answer is the larger.";
  arguments_assert(arguments, 0);
  let measured = await app_ceb_bible_gloss_words_dash_pieces_absent();
  let absent = property_get(measured, "words_absent");
  let pieces = list_map_unique(absent, text_lower_to);
  let bible_folder = ebible_folder_cebuano();
  let written = await bible_words_written(bible_folder);
  let spelled = list_lowered_set(written);
  function unwritten_is(piece) {
    let there = set_includes(spelled, piece);
    let none = not(there);
    return none;
  }
  let unwritten = list_filter(pieces, unwritten_is);
  let r = {
    pieces: list_size(pieces),
    written_words: list_size(written),
    unwritten: list_size(unwritten),
    words: unwritten,
  };
  return r;
}
