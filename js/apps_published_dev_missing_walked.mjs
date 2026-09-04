import { arguments_assert } from "./arguments_assert.mjs";
import { apps_published_names } from "./apps_published_names.mjs";
import { apps_names } from "./apps_names.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_size } from "./list_size.mjs";
export async function apps_published_dev_missing_walked() {
  "Every app standing at a public address that this repo can no longer build, said beside how many public addresses were asked about at all.";
  "THE COUNT IS THE ADDRESSES ASKED ABOUT, NOT THE ONES FOUND WANTING. Nothing missing is what a good day looks like, and it is also what the answer is on a run where the list of published addresses came back empty - because a hosting settings file moved, a folder was renamed, or a reading of it quietly stopped returning anything. Both runs say the same word, and only the number of addresses walked falls on the second.";
  "The names are made unique first, because an app can be reached through more than one repo and the same name arriving twice would read as two apps to see to when it is one - and would inflate the count by exactly as much.";
  "IT ASKS THE WRITTEN-DOWN LIST, NOT THE FOLDER THE WORKING BUILDS ARE WRITTEN INTO. Being written down is what makes an app buildable at all - a build resolves the app's name through that list and can find nobody who is not on it - whereas a working build on disk is an output, made and thrown away all day, and its absence says only that nobody has built that app on this machine lately.";
  "That folder was asked here for one afternoon and it was the wrong side to ask. It is deliberately never committed, so a copy of the repo frozen at a commit holds no such folder, every published address read as having no build, and the check named the whole world - which is the same one-sided reading it was moved off, pointed the other way. The check that runs here runs frozen, so it may only ask things a commit can answer.";
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
