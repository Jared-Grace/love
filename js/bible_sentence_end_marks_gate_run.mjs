import { bible_sentence_end_marks_findings } from "./bible_sentence_end_marks_findings.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { fn_name } from "./fn_name.mjs";
export async function bible_sentence_end_marks_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: every bible this repo ships has been read, and the ones whose sentences cannot be found are exactly the ones named as such.");
  ("A page that carries a reading on to the end of a sentence asks every language the reader chose whether this verse finished one. A bible that writes its full stop in a mark nobody here has met answers no every time, so that page reaches for one more verse over and over until whatever bound it holds runs out - and what the reader gets is twenty-five verses where they asked for one, with nothing anywhere saying why.");
  ("Nothing about adding a bible asks that question. So the answer is measured for every bible on the list and kept in a file, and this refuses a bible that is on the list and not in the file. A new language then arrives loud instead of arriving as a page that quietly gives too much.");
  ("This reads only the file. The measuring reaches the network and is a command somebody runs; the checking has to run wherever the rest of the gates run.");
  ("What is wrong is read out next door and only refused here. Six things can be wrong and each of them has several lines to say to whoever reads it, so with the reading above them as well neither half could be seen whole.");
  let findings = await bible_sentence_end_marks_findings();
  let shipped = property_get(findings, "shipped");
  let unmeasured = property_get(findings, "unmeasured");
  let departed = property_get(findings, "departed");
  let unread = property_get(findings, "unread");
  let ended_none = property_get(findings, "ended_none");
  let unnamed = property_get(findings, "unnamed");
  let named_wrongly = property_get(findings, "named_wrongly");
  let unreached = property_get(findings, "unreached");
  ("A BIBLE STORAGE HOLDS NOTHING FOR IS COUNTED AND NOT REFUSED, which is the one finding here that passes on purpose. It is a real fault and it is not this one: nothing was uploaded, so there was no chapter to read, and every hint below would send its reader to a list of languages or to a set of marks where there is nothing to correct. The gate that names those bibles is the one that can be acted on, and a fault refused in two places is a fault repaired in neither.");
  let unstored = property_get(findings, "unstored");
  let f_name = fn_name("bible_sentence_end_marks_write");
  list_empty_is_assert_json(unmeasured, {
    hint: text_combine_multiple([
      "a bible is shipped that has never been read for how it ends a sentence - read them all with ",
      f_name,
      ", which reaches the network and rewrites the record",
    ]),
    unmeasured,
  });
  let f_name2 = fn_name("bible_sentence_end_marks_write");
  list_empty_is_assert_json(departed, {
    hint: text_combine_multiple([
      "the record holds a bible this repo no longer ships - write it again with ",
      f_name2,
      " so what is checked is what is here",
    ]),
    departed,
  });
  let f_name3 = fn_name("ebible_languages");
  let f_name4 = fn_name("bible_sentence_end_marks_write");
  list_empty_is_assert_json(unread, {
    hint: text_combine_multiple([
      "not one verse of this bible could be read, so nothing is known about how it ends a sentence and the record only looks like it says so - check the folder name against ",
      f_name3,
      ", then read them again with ",
      f_name4,
    ]),
    unread,
  });
  let f_name5 = fn_name("bible_verse_end_suffixes");
  let f_name6 = fn_name("bible_folders_sentence_end_unmarked");
  list_empty_is_assert_json(unnamed, {
    hint: text_combine_multiple([
      "this bible was read and not one of its verses ended on a mark known here, so anything waiting for one of its sentences to finish waits until it gives up. The record says beside it what its verses did end on: if one of those is its full stop, add that mark to ",
      f_name5,
      "; if it truly writes none, name it in ",
      f_name6,
      " so it is left out of the asking rather than answered no",
    ]),
    unnamed,
    ended_none,
  });
  let f_name7 = fn_name("bible_folders_sentence_end_unmarked");
  list_empty_is_assert_json(named_wrongly, {
    hint: text_combine_multiple([
      "this bible is named as one whose sentences cannot be found, and it was read finishing them - so its readers are being denied a whole reading they could have had. Take it out of ",
      f_name7,
    ]),
    named_wrongly,
  });
  ("The passing finding is refused after the standing ones on purpose. A bible read and found to write no marks is true until somebody changes the bible; a chapter that would not answer this afternoon may answer this evening. Reporting the passing thing first would bury the lasting one under it.");
  let f_name8 = fn_name("bible_sentence_end_marks_write");
  list_empty_is_assert_json(unreached, {
    hint: text_combine_multiple([
      "these bibles were asked and the far end never answered, so nothing is known about how they end a sentence - that is this run having failed rather than anything being wrong with the bible, so measure again with ",
      f_name8,
      ", and if the same bibles come back unreached twice then the far end really is refusing them and it is worth looking at by hand",
    ]),
    unreached,
  });
  let r = {
    checked: list_size(shipped),
    unstored: list_size(unstored),
    unmeasured,
    departed,
    unread,
    unnamed,
    named_wrongly,
    unreached,
  };
  return r;
}
