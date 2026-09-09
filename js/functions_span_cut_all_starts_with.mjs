import { arguments_assert } from "./arguments_assert.mjs";
import { functions_span_candidates } from "./functions_span_candidates.mjs";
import { list_map_property_unique } from "./list_map_property_unique.mjs";
import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
import { function_span_cut_pass } from "./function_span_cut_pass.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { functions_span_cut_report } from "./functions_span_cut_report.mjs";
export async function functions_span_cut_all_starts_with(prefix) {
  arguments_assert(arguments, 1);
  ("Every function standing over the ceiling whose name begins with the given word, walked to a standstill by the cut, each run taken out under a name worked out from the word its last line ends on, and the list asked once more at the end.");
  ("★ THE PREFIX IS WHAT MAKES THIS RUNNABLE ON A REPO SEVERAL PEOPLE ARE CUTTING IN AT ONCE. The sweep beside this one walks the whole folder, which is right for one person working alone and wrong for everybody else: a cut commits itself under its own name as it lands, so a walk that wanders into a file somebody else is halfway through files their unfinished work under a command that never touched it. A word at the front of a name is how this repo already says which app a function belongs to, so it is also how a walker says which work is its own.");
  ("It is the same walk either way. Nothing about which runs are cuttable, how they are named, or what is refused changes with the prefix - the prefix decides only which functions are offered, and a prefix no name begins with cuts nothing and says so by answering an empty list.");
  ("The one thing a caller must not read into a short answer is that its part of the repo is finished. What comes back counts what is left standing over the ceiling across the whole folder rather than under the prefix, because the reading underneath answers about the folder and narrowing it here would be inventing a number rather than reporting one.");
  ("$plain prefix");
  ("the word a name must begin with, like app_ceb_bible_gloss_. It names no function and nothing here runs it.");
  let ranked = await functions_span_candidates();
  let walked = list_map_property_unique(ranked, "name");
  let named = list_filter_starts_with(walked, prefix);
  let cut = [];
  let skipped = [];
  for (let f_name of named) {
    async function lambda() {
      let one = await function_span_cut_pass(f_name);
      return one;
    }
    let pass = await catch_null_async(lambda);
    let missing = null_is(pass);
    if (missing) {
      continue;
    }
    let pass_cut = property_get(pass, "cut");
    let pass_skipped = property_get(pass, "skipped");
    for (let row of pass_cut) {
      let f_name_new = property_get(row, "f_name_new");
      list_add(cut, {
        f_name,
        f_name_new,
      });
    }
    list_add_multiple(skipped, pass_skipped);
  }
  let r = await functions_span_cut_report(cut, skipped);
  return r;
}
