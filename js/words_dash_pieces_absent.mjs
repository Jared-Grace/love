import { text_lower_to } from "./text_lower_to.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { text_split_dash } from "./text_split_dash.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { object_property_names } from "./object_property_names.mjs";
export function words_dash_pieces_absent(words) {
  "Given a list of words, the ones written with a dash inside them, and the pieces those would be cut into that no word in the list spells on its own.";
  "A reader that cuts at every dash turns one word into several. Some of what it makes is there anyway - Cebuano writes pag-ayo and also writes ayo - and the rest is not: nothing in the list spells panan, or aw, and after the cut both stand in it as words. This says which of the two each piece is, and it asks the list itself rather than a dictionary, so the answer is about the very words in front of it and cannot be out of date.";
  "★ THE LIST IS BOTH THE QUESTION AND THE ANSWER, WHICH IS WHAT LETS THIS DISAGREE. A piece counts as present only because some word in the same list spells it alone, so adding that word takes the piece off the list and taking it away puts it back. A check that instead asked somewhere else what a word is could only ever have said yes.";
  "A word is compared in small letters, because a word that only ever opens a sentence is held with a capital and is the same word as its piece.";
  "A dash standing at either end of a word cuts nothing off, so no empty piece is reported. A word wearing a dash on its end is still counted among the dashed words, since it does carry one, but the nothing on the far side of that dash is not named as a piece the list is missing.";
  "$plain words";
  "it names words to read, never anything that runs.";
  let held = {};
  function word_hold(word) {
    let lowered = text_lower_to(word);
    property_set(held, lowered, true);
  }
  each(words, word_hold);
  let dashed = [];
  let cut_from = {};
  function word_read(word) {
    let lowered = text_lower_to(word);
    let pieces = text_split_dash(lowered);
    let a = list_size(pieces);
    let several = greater_than(a, 1);
    if (not(several)) {
      return;
    }
    list_add(dashed, word);
    function piece_read(piece) {
      let nothing = text_empty_is(piece);
      if (nothing) {
        return;
      }
      let spelled = property_get_or_null(held, piece);
      let b = null_is(spelled);
      let present = not(b);
      if (present) {
        return;
      }
      let names = property_initialize_list(cut_from, piece);
      list_add_if_not_includes(names, word);
    }
    each(pieces, piece_read);
  }
  each(words, word_read);
  let absent = object_property_names(cut_from);
  let r = {
    words: list_size(words),
    dashed: list_size(dashed),
    absent: list_size(absent),
    words_dashed: dashed,
    words_absent: absent,
    cut_from,
  };
  return r;
}
