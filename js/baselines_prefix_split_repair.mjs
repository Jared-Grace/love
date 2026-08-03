import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { baselines_prefix_split } from "./baselines_prefix_split.mjs";
import { baselines_prefix_split_baseline_write } from "./baselines_prefix_split_baseline_write.mjs";
import { functions_names } from "./functions_names.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_rename } from "./function_rename.mjs";
import { list_add } from "./list_add.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { equal } from "./equal.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_suffix_without } from "./text_suffix_without.mjs";
export async function baselines_prefix_split_repair() {
  "Moves each ratchet's record under the same prefix its rewriter already uses, so the four functions of a family can be found from any one of them.";
  "It finds its own set, so nothing has to be listed for it, and the target name is read off the rewriter rather than guessed. That is the whole reason this can be a command at all: which word a family belongs under is not a choice being made here, it is a fact already written down in three of the four files and missing from the fourth.";
  "Where more than one rewriter would answer to the name, it renames nothing and says which ones. A family word that reads as another family's - the plain one beside the head, inside and tail ones - is a name somebody has to choose while reading, and choosing it here would be silent.";
  "Each rename is committed as it lands, under its own name and its own two words. A run that renamed eight and committed once would lose all eight to whichever sweep reached the folder first, and would then have to claim a single command it never ran.";
  "It rewrites the record at the end, because a repaired offender left standing in the record fails the gate a second way - the ratchet refuses a name it holds that no longer offends just as firmly as one it does not hold.";
  arguments_assert(arguments, 0);
  await ai_git_noted();
  let suffix = "_baseline_path";
  let suffix_write = "_baseline_write";
  let split = await baselines_prefix_split();
  let names = await functions_names();
  let renamed = [];
  let skipped = [];
  for (let f_name_before of split) {
    let slug = text_suffix_without(f_name_before, suffix);
    let tail = text_combine(slug, suffix_write);
    let needle = text_combine("_", tail);
    function writer_is(name) {
      let ends = text_ends_with(name, needle);
      return ends;
    }
    let writers = list_filter(names, writer_is);
    let one = list_size(writers);
    let single = equal(one, 1);
    if (single) {
      let writer = list_get(writers, 0);
      let prefix = text_suffix_without(writer, tail);
      let f_name_after = text_combine(prefix, f_name_before);
      await function_call_commit(function_rename, [
        f_name_before,
        f_name_after,
      ]);
      list_add(renamed, f_name_after);
    } else {
      list_add(skipped, {
        f_name_before,
        writers,
      });
    }
  }
  await function_call_commit(baselines_prefix_split_baseline_write, []);
  let r = {
    renamed,
    skipped,
  };
  return r;
}
