import { literal_getters } from "./literal_getters.mjs";
import { json_to } from "./json_to.mjs";
import { f_names_holding_literal_getter_values_remembered } from "./f_names_holding_literal_getter_values_remembered.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { literal_getter_peer_is } from "./literal_getter_peer_is.mjs";
import { js_code_literal_prose_only } from "./js_code_literal_prose_only.mjs";
import { js_code_literal_entry_key_only } from "./js_code_literal_entry_key_only.mjs";
import { js_code_literal_site_none } from "./js_code_literal_site_none.mjs";
import { list_add } from "./list_add.mjs";
import { greater_than } from "./greater_than.mjs";
import { literal_duplicate_means } from "./literal_duplicate_means.mjs";
import { subtract } from "./subtract.mjs";
export function literal_duplicates_generic(codes) {
  "Every getter in a handed-in body of source whose written value some other file";
  "there still spells out, with a word each for what those other files are doing";
  "with it.";
  "Three kinds of file hold the spelling without being a copy of the constant, and";
  "all three are dropped here rather than left for a reader to notice. What they";
  "have in common is that there is nowhere in them for a call to stand, so offering";
  "any of them asks forever for something nobody can do.";
  "One is a file that only mentions the word in its own account of itself: nothing";
  "can be done about a sentence.";
  "The second is the one the first cannot see. It looks for the word written as a";
  "string of its own and then asks what it is doing there, so a file where the";
  "letters sit inside a longer sentence, or inside a comment, reads to it as a";
  "file with no mentions at all - and the text search that found it in the first";
  "place still counts it. A sentence quoting a name while explaining an argument";
  "is exactly that.";
  "The third is a file whose only mentions stand before the colon of a written-out";
  "record. A call written there stops being a call and becomes a field named by";
  "the letters of the call, so the repair would not be wrong so much as";
  "unparseable.";
  "That third drop used to be much wider: it covered the naming of a field in all";
  "three of its shapes, on the reasoning that acting on any of them would tie the";
  "shape of saved data to a name in this code. Two of those shapes have room for a";
  "call - the word inside the brackets of a lookup, and the word handed second to a";
  "field call - and in both of them the call hands back the same word, so no saved";
  "shape moves. The hazard that reasoning was really about, a value that has";
  "already left this repo into a browser's storage or a bookmarked address,";
  "belongs to the value rather than to how some other file happens to spell it,";
  "and it is already marked at the getter itself where anybody opening the file";
  "can see it. Withholding by the shape of the site instead guarded a handful of";
  "values by hiding dozens of files, and the getters it hid behind read as fully";
  "routed while the word was still everywhere: two of them, measured 2026-08-26,";
  "over thirty-six files between them.";
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
    for (let f_name of f_names_holding_literal_getter_values_remembered(
      codes,
    )) {
      ("The two cheap questions are asked first and the file is left alone the moment either says no, because the third reads every getter there is to answer about one file. Asked of all of them it is a walk over the getters for every file in the repo for every getter - and almost none of those files hold the spelling at all, so nearly the whole of that walk was to establish something the string search had already settled. Measured: three quarters of this gate's whole cost sat in that one call.");
      ("The stop is written as its own line rather than left to the order of an and, because the auto pass lifts a call out of an expression into a line above it, and a call lifted out of an and is a call that no longer waits for the tests in front of it.");
      let holds = codes[f_name].includes(quoted);
      let other = not_equal(f_name, getter.f_name);
      let looks = holds && other;
      if (not(looks)) {
        continue;
      }
      let peer_is = literal_getter_peer_is(getters, f_name, getter.literal);
      let candidate = not(peer_is);
      if (candidate) {
        let prose_only = js_code_literal_prose_only(
          codes[f_name],
          getter.literal,
        );
        let entry_key_only = js_code_literal_entry_key_only(
          codes[f_name],
          getter.literal,
        );
        let site_none = js_code_literal_site_none(
          codes[f_name],
          getter.literal,
        );
        let site_is = not(prose_only) && not(entry_key_only) && not(site_none);
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
