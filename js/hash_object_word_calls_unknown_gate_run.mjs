import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { hash_object_word_calls_unknown_all } from "./hash_object_word_calls_unknown_all.mjs";
import { js_field_call_prefix } from "./js_field_call_prefix.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function hash_object_word_calls_unknown_gate_run() {
  "QA gate: no word is written into the object a page address is read into through a call the walk over addresses cannot read.";
  "That walk finds a field being named by looking for a call whose name starts with the prefix the field-setting functions share. The prefix is a word somebody typed, and a reading narrowed by a typed word stops covering whatever stops matching it without saying so - the fault and a clean repo hand back the same empty answer. This asks the question from the other side: not what the walk found, but what it walked past.";
  "The word standing where a field name goes is what makes a site one of these. A call handed an address and no written-out word publishes nothing, so it is not asked about; the fault being looked for is a word that has left this repo for a saved link, through a door nobody wrote down.";
  "How many files were opened comes back with the verdict, because a walk handed no files at all would also find nothing.";
  arguments_assert(arguments, 0);
  let walked = await hash_object_word_calls_unknown_all();
  let sites = property_get(walked, "sites");
  let files = property_get(walked, "files");
  let prefix = js_field_call_prefix();
  let f_name = fn_name("js_hash_key_nodes");
  list_empty_is_assert_json(sites, {
    hint: text_combine_multiple([
      "a word is written into a page address by a call whose name does not start with ",
      prefix,
      ", which is the one shape ",
      f_name,
      " knows how to read - so that word is published with nothing watching it, and either the call belongs behind a function that holds the word or ",
      f_name,
      " has to learn the shape",
    ]),
    files,
    sites,
  });
  let r = {
    files,
    sites,
  };
  return r;
}
