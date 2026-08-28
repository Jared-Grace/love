import { arguments_assert } from "./arguments_assert.mjs";
import { apps_published_names } from "./apps_published_names.mjs";
import { apps_names } from "./apps_names.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_size } from "./list_size.mjs";
export async function apps_published_dev_missing_walked() {
  "Every app standing at a public address that has no working build here, said beside how many public addresses were asked about at all.";
  "THE COUNT IS THE ADDRESSES ASKED ABOUT, NOT THE ONES FOUND WANTING. Nothing missing is what a good day looks like, and it is also what the answer is on a run where the list of published addresses came back empty - because a hosting settings file moved, a folder was renamed, or a reading of it quietly stopped returning anything. Both runs say the same word, and only the number of addresses walked falls on the second.";
  "The names are made unique first, because an app can be reached through more than one repo and the same name arriving twice would read as two apps to see to when it is one - and would inflate the count by exactly as much.";
  arguments_assert(arguments, 0);
  let published = await apps_published_names();
  let existing = await apps_names();
  let names = list_unique(published);
  let missing = list_without_multiple(names, existing);
  let sorted = list_sort_text(missing);
  let walked = list_size(names);
  let r = {
    walked,
    missing: sorted,
  };
  return r;
}
