import { js_bag_pass_through_unpacked_add } from "./js_bag_pass_through_unpacked_add.mjs";
import { js_declarations_call_producers } from "./js_declarations_call_producers.mjs";
import { js_bag_pass_through_records_add } from "./js_bag_pass_through_records_add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_declarations_single_rows } from "./js_declarations_single_rows.mjs";
import { js_property_get_rows } from "./js_property_get_rows.mjs";
export function js_bag_pass_through(ast) {
  arguments_assert(arguments, 1);
  ("Every place in this file where a record handed in from elsewhere is taken apart a name at a time and the same names are put straight back into another record, read out as the record it came from, the names that went through untouched, and the names added on the way.");
  ("This is what a piece of work cut into steps leaves behind at each join. Each step is handed everything the ones before it worked out, wants one or two of those things, adds one of its own, and has to pass the rest on - so a name added at the first step is written again at every step after it, and the line that writes it says nothing except that it is still there.");
  ("Nothing is judged and nothing is changed. Whether the taking apart could be replaced by handing the record over whole is not answerable from inside one file: it turns on the record holding no name beyond the ones taken out, which is a fact about whoever made it, and on nobody caring what order the names are in, which is a fact about whoever reads it. Both are settled elsewhere, by somebody who has this list in front of them.");
  ("Fewer than three names carried through is not reported. Two names passed on is as likely to be a body that wanted them as a join, and a list that says so about half the repo is a list nobody reads.");
  ("The record the names came out of is named beside its own maker where there is one to name - the function whose answer it was, and nothing when it was handed in as a parameter. Whether the taking apart can go turns on what that maker returns, so a reading that left the name out would have to walk the whole repo a second time to find it.");
  ("The names of the record being built are handed back in the order they are written in, and not only as the two sets they fall into. Handing the record over whole would put the names in the order its maker wrote them, which is the same order or is not, and that is a question about a list rather than about a set.");
  ("Those names are the names the entries are filed under, and not the names standing in them. The two are almost always the same word, which is why writing the wrong one of them went unnoticed: the shorthand every record here is written in says the word once and means it twice. Where an entry does file one name under another, only the filed name is the record's, and reading the other one made an entry that carries nothing look like one that carries a name straight through.");
  let decls = js_declarations_single_rows(ast);
  let reads = js_property_get_rows(ast);
  let producers = js_declarations_call_producers(decls);
  let unpacked = [];
  js_bag_pass_through_unpacked_add(reads, decls, unpacked);
  let found = [];
  js_bag_pass_through_records_add(decls, unpacked, producers, found);
  return found;
}
