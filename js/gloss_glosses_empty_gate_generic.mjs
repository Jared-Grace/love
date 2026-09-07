import { gloss_chapters_glosses_empty } from "./gloss_chapters_glosses_empty.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_map } from "./list_map.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function gloss_glosses_empty_gate_generic(fn, a_name) {
  "$plain a_name";
  "Gate over one gloss store: no authored chapter may carry a word explanation whose meaning is blank. Throws so the dispatcher seam exits nonzero.";
  "The alignment gate beside this one counts explanations against the passage's words and a blank one still counts, so a store can line up perfectly and still hand the reader a row with its answer taken out - the word, two colons, and a hole. That is the one line the reader came for, so it is worth stopping a build over.";
  "It starts at nothing and has no baseline beside it, for the same reason the alignment gate has none: a list to add offenders to would turn a red light into a place to write things down, and a blank meaning is never a thing worth recording as expected.";
  "The complaint carries each offending chapter and how many meanings it left blank, never the blank words themselves - one chapter measured 251 of the same little English word, so the words are what the reader beside the store asks for, not what a failing build should print.";
  "How many chapters were read travels out with the verdict, because finding nothing wrong and reading nothing at all are the same word otherwise, and these stores sit on a drive that is not always mounted.";
  "The app whose store this is gets named in the complaint, so a gate read afterwards says WHO it is about and an app that ships no gloss store can be shown this is not its business.";
  let found = await gloss_chapters_glosses_empty(fn);
  let offenders = property_get(found, "offenders");
  let chapters = property_get(found, "chapters");
  let count = list_size(offenders);
  let any = greater_than(count, 0);
  function offender_named(offender) {
    let chapter_code = property_get(offender, "chapter_code");
    let empty = property_get(offender, "empty");
    let named = {
      chapter_code,
      empty,
    };
    return named;
  }
  let named_all = list_map(offenders, offender_named);
  let listed = [];
  if (any) {
    list_add(listed, a_name);
  }
  let none = not(any);
  let shown = json_format_to(named_all);
  assert_json(none, {
    list: listed,
    json: {
      hint: text_combine_multiple([
        a_name,
        " gloss: ",
        count,
        " chapters carry a word explanation whose meaning is blank - ",
        shown,
      ]),
    },
  });
  let r = {
    chapters,
    offenders: 0,
  };
  return r;
}
