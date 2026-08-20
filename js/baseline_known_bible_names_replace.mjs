import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
import { list_difference } from "./list_difference.mjs";
import { lists_combine } from "./lists_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_filter_starts_with_not } from "./list_filter_starts_with_not.mjs";
export async function baseline_known_bible_names_replace(
  bible_folder,
  names,
  path,
) {
  "$plain bible_folder";
  "$plain path";
  arguments_assert(arguments, 3);
  ("Write one bible's names into a record of names, in place of whatever that bible had in it before, leaving every other bible's untouched - and say which arrived and which left.");
  ("A record whose names each begin with the bible they belong to is a record of many bibles kept in one list, and a command that has just looked at one bible has an answer about that bible and about nothing else. Adding what it found would be wrong, because a name it did not find this time is a name that has stopped being true; rewriting the whole list would be wrong too, because it would throw away every bible the command never opened.");
  ("So the bible's own slice is taken out by its name and put back from what was just found. That is what lets a verdict be taken back: a chapter that has stopped belonging in the record leaves by not being found, without anybody having to remember it was ever in there.");
  ("What arrived and what left are both handed back, because the caller has just spent a download to learn them and they are the whole of what changed. A run reporting neither did nothing, and that is worth being able to see rather than infer.");
  ("The names begin with the bible and a space, and the slice is taken by exactly that. A bible whose name is the beginning of another's would take both, so the space is not decoration - without it a bible called lit would carry off every name belonging to one called little.");
  let recorded = await baseline_known_read(path);
  let added = list_difference(names, recorded);
  let prefix = text_combine_multiple([bible_folder, " "]);
  let others = list_filter_starts_with_not(recorded, prefix);
  let combined = lists_combine([others, names]);
  let gone = list_difference(recorded, combined);
  let count = await baseline_known_write(combined, path);
  let r = {
    added,
    gone,
    recorded: count,
  };
  return r;
}
