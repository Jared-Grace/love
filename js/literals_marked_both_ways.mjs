import { repo_love_name } from "./repo_love_name.mjs";
import { repo_functions_code } from "./repo_functions_code.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
import { property_text_includes } from "./property_text_includes.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_marker_call_words } from "./js_marker_call_words.mjs";
import { list_add } from "./list_add.mjs";
import { list_map_property_unique } from "./list_map_property_unique.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { not } from "./not.mjs";
export async function literals_marked_both_ways() {
  "Every word this repo marks both ways at once - frozen in one place and spelled as a reference in another - as {word, frozen_in, referenced_in}. Read-only.";
  "The two markers mean opposite things about the same word. Frozen says the word only looks like a name, so a rename must walk straight past it; a reference says the word is a name, so a rename must carry it along. A word wearing both is a flat contradiction, and one of the two sites is wrong.";
  "Which one is wrong is not decidable here, and that is the point of reporting rather than repairing. It turns on something outside the code: whether anything in this repo can still move what the word addresses. A folder on this machine can be moved by a rename, so there the reference is right and the freeze breaks it; a folder on a shared bucket cannot, so there the freeze is right and the reference would send every future reading to an address holding nothing.";
  "This was found by hand after four such words were sitting in one file, each naming a bucket folder holding every sermon the game had written. A rename of any of the four uploaders would have moved the list saying what a backup may take, and left the files themselves unbacked with nothing saying so.";
  "The same spelling in two files is not always a contradiction. A lesson may teach a word as its subject while a gate names a function that happens to share it, and neither is wrong. So this only reports; what refuses is the ratchet beside it, which lets the ones already here stand one at a time and stops a new one appearing.";
  "The frozen words are gathered first and each is then looked for by its own exact spelling, rather than reading every tree in the repo. Nearly every file in the repo names a function somewhere, so a sweep keyed on the reference marker would open all of them - which is the reading measured at thirteen minutes on the check beside this one.";
  let repo_name = repo_love_name();
  let entries = await repo_functions_code(repo_name);
  let frozen_marker = fn_name("text_frozen");
  let reference_marker = fn_name("fn_name");
  let frozen_needle = text_combine_multiple([frozen_marker, "("]);
  let reference_prefix = text_combine_multiple([reference_marker, '("']);
  let frozen_sites = [];
  for (let entry of entries) {
    let candidate = property_get(entry, "name");
    let freezes = property_text_includes(entry, "code", frozen_needle);
    if (not(freezes)) {
      continue;
    }
    let tree = await function_ast(candidate);
    let words = js_marker_call_words(tree, frozen_marker);
    for (let word of words) {
      let site = {
        word,
        f_name: candidate,
      };
      list_add(frozen_sites, site);
    }
  }
  let words_frozen = list_map_property_unique(frozen_sites, "word");
  let conflicts = [];
  for (let word of words_frozen) {
    let needle = text_combine_multiple([reference_prefix, word, '")']);
    let referenced_in = [];
    for (let entry of entries) {
      let candidate = property_get(entry, "name");
      let mentions = property_text_includes(entry, "code", needle);
      if (not(mentions)) {
        continue;
      }
      let tree = await function_ast(candidate);
      let words_referenced = js_marker_call_words(tree, reference_marker);
      let refers = list_includes(words_referenced, word);
      if (not(refers)) {
        continue;
      }
      list_add(referenced_in, candidate);
    }
    let clean = list_empty_is(referenced_in);
    if (clean) {
      continue;
    }
    let same_word = list_filter_property(frozen_sites, "word", word);
    let frozen_in = list_map_property_unique(same_word, "f_name");
    let conflict = {
      word,
      frozen_in,
      referenced_in,
    };
    list_add(conflicts, conflict);
  }
  return conflicts;
}
