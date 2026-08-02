import { literal_getters } from "./literal_getters.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_literal_key_only } from "./js_code_literal_key_only.mjs";
import { js_code_literal_prose_only } from "./js_code_literal_prose_only.mjs";
import { literal_getter_peer_is } from "./literal_getter_peer_is.mjs";
import { literal_duplicate_means } from "./literal_duplicate_means.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export function literal_duplicates_generic(codes) {
  "Every getter in a handed-in body of source whose written value some other file";
  "there still spells out, with a word each for what those other files are doing";
  "with it.";
  "Two kinds of file hold the spelling without being a copy of the constant, and";
  "both are dropped here rather than left for a reader to notice. One is a file";
  "that only mentions the word in its own account of itself: nothing can be done";
  "about a sentence, so offering it asks forever for something nobody can do. The";
  "other is a file where the word names a field rather than carrying a value, and";
  "that one is worse than useless - acting on it would tie the shape of saved data";
  "to a name in this code, so the offer has to be withheld rather than merely";
  "ignored.";
  "The source arrives as an argument rather than being read here, because an audit";
  "whose answer is a clean empty list reads exactly the same whether its judgment";
  "works or is broken. Handing the body of source in is what lets a written-down";
  "set of files - including ones nobody would ever commit - ask this the questions";
  "the repo itself cannot pose.";
  let getters = literal_getters(codes);
  let found = [];
  for (let getter of getters) {
    let quoted = json_to(getter.literal);
    let files = [];
    for (let f_name of object_property_names(codes)) {
      let peer_is = literal_getter_peer_is(getters, f_name, getter.literal);
      let holds = codes[f_name].includes(quoted);
      let candidate = not_equal(f_name, getter.f_name) && not(peer_is) && holds;
      if (candidate) {
        let prose_only = js_code_literal_prose_only(
          codes[f_name],
          getter.literal,
        );
        let key_only = js_code_literal_key_only(codes[f_name], getter.literal);
        let site_is = not(prose_only) && not(key_only);
        if (site_is) {
          list_add(files, f_name);
        }
      }
    }
    if (greater_than(files.length, 0)) {
      let means = literal_duplicate_means(codes, files, getter.literal);
      list_add(found, {
        f_name: getter.f_name,
        literal: getter.literal,
        files,
        means,
      });
    }
  }
  function lambda(a, b) {
    let difference = subtract(b.files.length, a.files.length);
    return difference;
  }
  found.sort(lambda);
  return found;
}
