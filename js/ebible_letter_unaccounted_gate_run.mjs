import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_readaloud_lines_differ_as_published_names } from "./ebible_readaloud_lines_differ_as_published_names.mjs";
import { list_size } from "./list_size.mjs";
import { ebible_letter_unaccounted_names } from "./ebible_letter_unaccounted_names.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_is_assert_walked_generic } from "./list_empty_is_assert_walked_generic.mjs";
export async function ebible_letter_unaccounted_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: every chapter eBible publishes with its verse marks and its spoken lines disagreeing has either been written to them about or read and found to be no fault.");
  ("A chapter reaching this state has already been proved twice over - measured as disagreeing, then fetched again from scratch and found to come back the same. So it is not a broken download and it is not going to mend itself, and the only thing left that could put it right is somebody upstream being told. Until this, nothing asked whether anybody had been.");
  ("Written because the asking had already been missed. A letter naming five faults was drafted from the chapters somebody happened to have opened, while the record held six more nobody had ever looked at - two of which turned out to be exactly the fault the letter was reporting, in a different bible. Nothing was wrong anywhere; the chapters were simply never brought to anyone's attention, which is the one kind of fault a person cannot notice by reading a passing gate.");
  ("Measured against nothing rather than against a ratchet. There is nothing here to grandfather: the record was cleared to empty the day it was written, so a baseline would be a file whose only content is a promise that it starts empty.");
  ("Clearing it is a judgement rather than a repair, and it is meant to be. What a chapter needs is a person opening the page and deciding whether the translation meant it - a verse marked as a range, a read-aloud edition merging two lines - or whether words or a marker really are missing. Neither answer can be reached from the counts, which is why this asks for a person instead of trying.");
  let published = await ebible_readaloud_lines_differ_as_published_names();
  let walked = list_size(published);
  let offenders = await ebible_letter_unaccounted_names();
  let f_name = fn_name("ebible_letter_accounted_path");
  let f_name_names = fn_name("ebible_letter_unaccounted_names");
  let hint = text_combine_multiple([
    "eBible publishes this chapter with its verse marks and its spoken lines disagreeing, and nobody has said what it is. Open the chapter's page and decide: a page marking two verses together as one range, or a read-aloud edition merging some, is no fault and the translation meant it; a marker missing where the words are there, or words missing outright, is worth telling them about. Then write what you decided into the record at ",
    f_name,
    ", one line under the chapter's name saying either why it is no fault or that it has gone into the draft letter at notes/letters/ebible_letter.md. Which chapters are waiting is ",
    f_name_names,
  ]);
  let r = list_empty_is_assert_walked_generic(walked, offenders, hint);
  return r;
}
