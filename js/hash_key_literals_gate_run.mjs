import { arguments_assert } from "./arguments_assert.mjs";
import { hash_key_literals_all } from "./hash_key_literals_all.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_size } from "./list_size.mjs";
export async function hash_key_literals_gate_run() {
  "QA gate: no word is written straight into the address of a page. Every one of them is held by a function, so it can be frozen.";
  "A word in an address is published the moment somebody saves the link or sends it on, and a saved link is on a disk nobody here can reach. Written at the site it looks like nothing: a letter or two, in a line that reads clearly, and rewording it is the sort of tidy-up nobody would think to check. Every link anybody kept then asks for a word the page no longer answers to.";
  "Held by a function it can be named in the frozen list, and there an in-place change shows up as a changed value rather than as nothing at all. So this asks the one thing that has to be true before the freeze can watch anything: that there is a name to freeze.";
  "It stands at zero rather than at a line already drawn, because the whole set was cleared the day it was written. Nothing here is being lived with.";
  arguments_assert(arguments, 0);
  let sites = await hash_key_literals_all();
  let f_name = fn_name("function_new_getter");
  let f_name2 = fn_name("function_literal_route");
  let f_name3 = fn_name("literals_frozen_record_new");
  list_empty_is_assert_json(sites, {
    hint: text_combine_multiple([
      "a word is written straight into a page address, where nothing can watch it - give it a function of its own with ",
      f_name,
      ", move the sites onto that function with ",
      f_name2,
      ", then name the function in the frozen list and record it with ",
      f_name3,
    ]),
    sites,
  });
  let r = {
    sites: list_size(sites),
  };
  return r;
}
