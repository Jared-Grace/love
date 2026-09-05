import { bible_sentence_end_hidden_named } from "./bible_sentence_end_hidden_named.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { property_null_is } from "./property_null_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_sentence_end_marks_path } from "./bible_sentence_end_marks_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_sentence_end_hidden_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: no bible this repo ships has a verse whose sentence mark is hidden behind something nobody takes off - a closing mark, or a whole span printed behind the sentence.");
  ("A page that carries a reading on until the sentence ends asks each verse whether it finished one. A verse that ends on a full stop and then closes a quotation has finished, and answers no when the closing mark is one nobody here strips - so the page fetches another verse, and the reader who asked for one gets two. That was met on 2026-09-05 in Tagalog, and a sweep of the sixteen opening verses of every bible here then found fourteen more doing it, in six marks nobody had thought of.");
  ("What repaired those fourteen was to stop listing the marks by hand and ask Unicode instead, which takes every closing bracket, closing quote, invisible mark and space at once. Four marks are still written out because Unicode files them elsewhere, and the next bible added may well arrive with a fifth - a plain-letter transliteration spelling its closing quotation in some other punctuation the same way seven bibles here spell it as two greater-than signs. Nothing about adding a bible asks that question, so this asks it.");
  ("THIS READS ONLY THE FILE, the same way the gate beside it does. Finding the fault means fetching a chapter of every bible, which reaches the network and is a command somebody runs; the record it writes carries the answer, and refusing has to run wherever the rest of the gates run.");
  ("A ROW FROM BEFORE THE ANSWER WAS RECORDED IS REFUSED RATHER THAN PASSED, because an old record has nothing written in either field for exactly the same reason a clean one has nothing there, and a gate that cannot tell those apart reports success for a question it never asked. Both fields are asked for, so the record cannot half answer: the second kind was counted a day after the first, and every row written before that says nothing about it.");
  let path = bible_sentence_end_marks_path();
  let rows = await file_read_json(path);
  function bible_sentence_end_unrecorded_is(row) {
    let unblocked = property_null_is(row, "blocked");
    if (unblocked) {
      return true;
    }
    let unspanned = property_null_is(row, "apparatus");
    return unspanned;
  }
  let unrecorded_rows = list_filter(rows, bible_sentence_end_unrecorded_is);
  function bible_sentence_end_unrecorded_folder(row) {
    let property_name = bible_folder_key();
    let bible_folder = property_get(row, property_name);
    return bible_folder;
  }
  let unrecorded = list_map(
    unrecorded_rows,
    bible_sentence_end_unrecorded_folder,
  );
  let f_name = fn_name("bible_sentence_end_marks_write");
  list_empty_is_assert_json(unrecorded, {
    hint: text_combine_multiple([
      "this bible was measured before the hidden sentence marks were counted, so the record is silent about it and silence here looks exactly like nothing wrong - read them all again with ",
      f_name,
      ", which reaches the network and rewrites the record",
    ]),
    unrecorded,
  });
  let blocked_named = bible_sentence_end_hidden_named(rows, "blocked");
  let f_name2 = fn_name("bible_verse_trim_right");
  list_empty_is_assert_json(blocked_named, {
    hint: text_combine_multiple([
      "these verses end a sentence and then close a quotation over it in a mark that is not taken off before the asking, so anyone reading this bible beside another is carried on into a verse whose sentence had already finished. The marks are named beside each bible: add them to ",
      f_name2,
      " - and prefer widening what is asked of Unicode there to writing another mark out by hand, because a hand-written list is what was short every time this has happened",
    ]),
    blocked: blocked_named,
  });
  ("A SPAN OF WORDS HIDES A SENTENCE MARK EXACTLY AS A SINGLE MARK DOES, and it is refused here beside them because only its size tells the two apart. A Hindi bible here finishes a sentence and then prints where else the verse is spoken of, in brackets; taken one character at a time that never clears, because the first figure inside the brackets is not a mark and stops the taking. Nothing about adding a bible asks whether it prints its references that way, so this asks that too.");
  let apparatus_named = bible_sentence_end_hidden_named(rows, "apparatus");
  let f_name3 = fn_name("bible_verse_end_apparatus_or_null");
  list_empty_is_assert_json(apparatus_named, {
    hint: text_combine_multiple([
      "these verses end a sentence and then print something in brackets behind it, so anyone reading this bible beside another is carried on into a verse whose sentence had already finished. The span is named beside each bible, and ",
      f_name3,
      " is what found it - the taking off is done where every other closing mark is taken off, and it happens only when a sentence mark is actually uncovered by doing it",
    ]),
    apparatus: apparatus_named,
  });
  let r = {
    checked: list_size(rows),
    blocked: blocked_named,
    apparatus: apparatus_named,
  };
  return r;
}
