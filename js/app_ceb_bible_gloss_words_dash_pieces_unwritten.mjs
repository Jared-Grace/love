import { app_ceb_bible_gloss_words_dash_pieces_absent_words } from "./app_ceb_bible_gloss_words_dash_pieces_absent_words.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bible_cebuano_words_unwritten } from "./bible_cebuano_words_unwritten.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_words_dash_pieces_unwritten() {
  "Of the pieces that fall out of the Cebuano gloss store's dashed words when the dash is cut, the ones the whole Cebuano translation never writes standing alone.";
  "★ THIS IS THE ONLY TEST IN THE REPO THAT CAN CALL ONE OF THESE PIECES A NON-WORD, BECAUSE IT ASKS A SOURCE THE GLOSS STORE DID NOT WRITE. Every other reading of them is circular: the store is asked whether it explains the piece, and the piece exists only because the store's own word was cut. The translation is the independent witness - it is the text the explanations are about, it was not produced by this pipeline, and if a piece is a Cebuano word that these verses use, the translation writes it somewhere.";
  "A piece the translation does write is not thereby innocent and a piece it does not is not thereby a mistake anyone made. Cebuano roots often live only inside longer forms, so a real root can be missing here for a reason that is about the language and not about this repo. What the answer settles is narrower and harder: for a piece in this list, no source available here has ever seen it standing on its own, so any sentence calling it a word or a root is a statement with nothing behind it.";
  "The comparison against the translation, the lowering of both sides and the counting of the written words are the shared test, which the whole explained words ask in exactly the same words; what is chosen here is only which pieces to put to it.";
  arguments_assert(arguments, 0);
  let absent = await app_ceb_bible_gloss_words_dash_pieces_absent_words();
  let asked = await bible_cebuano_words_unwritten(absent);
  let pieces = property_get(asked, "lowered");
  let unwritten = property_get(asked, "unwritten");
  let r = {
    pieces: list_size(pieces),
    written_words: property_get(asked, "written_words"),
    unwritten: list_size(unwritten),
    words: unwritten,
  };
  return r;
}
