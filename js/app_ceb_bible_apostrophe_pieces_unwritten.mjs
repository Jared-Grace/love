import { text_apostrophe_inside_word_is } from "./text_apostrophe_inside_word_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { ebible_verses_all } from "./ebible_verses_all.mjs";
import { property_get } from "./property_get.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_add } from "./list_add.mjs";
import { text_punctuation_dash_kept_split } from "./text_punctuation_dash_kept_split.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_apostrophe_pieces_unwritten() {
  "The words a reading that ends a word at an apostrophe will say the Cebuano bible contains that the Cebuano bible never writes on its own, each named beside the apostrophed words it was cut out of.";
  "★ THIS IS THE SAME FAULT AS THE HYPHEN ONE, ONE CHARACTER OVER, AND IT REACHES THE CHECK RATHER THAN ONLY THE STORE. Cebuano writes an enclitic joined to the word before it and spells that join with an apostrophe some of the time - usa'g, siya'y, ako'y, kita'y, gagmay'ng. A reading that stops at the apostrophe turns each of those into two, and the small half is then filed as a word this translation writes. Anything that afterwards asks the translation whether some run of letters is a word gets a yes it has not earned, and the reading used to answer that question is exactly this one.";
  "What makes this worth a measurement of its own is who was relying on it. The words this bible is written with are the only witness in the repo outside the gloss pipeline, so they are what an explanation's claim gets checked against; a witness that manufactures its own evidence clears exactly the claims nobody else can.";
  "The fault runs one way, as the hyphen one does. Nothing goes missing - a word this adds was never taken from anywhere - so a check that comes back saying a word is unwritten is still worth what it was, and every count of unwritten things made through this reading is a floor rather than an estimate.";
  "A piece also written somewhere on its own is left out, because a yes about it is not wrong.";
  "Only an apostrophe standing inside a word counts as a join here. The same mark opens and closes quoted speech all through this translation, and counting those as joins too was measured to name three thousand apostrophed words where the translation writes about forty, each of them then handing its own dashes and pieces over to an answer about apostrophes.";
  arguments_assert(arguments, 0);
  let bible_folder = ebible_folder_cebuano();
  let verses = await ebible_verses_all(bible_folder);
  let alone = {};
  let apostrophed = [];
  function verse_read(verse) {
    let text = property_get(verse, "text");
    let tokens = text_split_space(text);
    function token_read(token) {
      let marked = text_apostrophe_inside_word_is(token);
      if (marked) {
        list_add(apostrophed, token);
        return;
      }
      let token_words = text_punctuation_dash_kept_split(token);
      function word_hold(word) {
        let lowered = text_lower_to(word);
        property_set(alone, lowered, true);
      }
      each(token_words, word_hold);
    }
    each(tokens, token_read);
  }
  each(verses, verse_read);
  let cut_from = {};
  function apostrophed_read(token) {
    let pieces = text_punctuation_dash_kept_split(token);
    function piece_read(piece) {
      let lowered = text_lower_to(piece);
      let held = property_get_or_null(alone, lowered);
      let unwritten = null_is(held);
      if (not(unwritten)) {
        return;
      }
      let names = property_initialize_list(cut_from, lowered);
      list_add_if_not_includes(names, token);
    }
    each(pieces, piece_read);
  }
  each(apostrophed, apostrophed_read);
  let words = object_property_names(cut_from);
  let list = object_property_names(alone);
  let r = {
    apostrophed_words: list_size(apostrophed),
    written_alone: list_size(list),
    count: list_size(words),
    words: words,
    cut_from: cut_from,
  };
  return r;
}
