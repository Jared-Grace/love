import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_size } from "./text_size.mjs";
import { equal } from "./equal.mjs";
import { list_single_item } from "./list_single_item.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_filter } from "./list_filter.mjs";
export function git_commit_map_names_matching(read, commit) {
  "$plain commit";
  "Every name in one rewrite record's before column that the given name names - a list, because a shortened name can name more than one.";
  "★ A SHORTENED NAME IS A GUESS AND THE ANSWER SAYS SO BY BEING A LIST. Commit names are written down shortened almost everywhere a person types one: seven characters in a note, ten in a baseline file. Ninety thousand commits is far from enough for a seven character start to collide often, and it is far too many for it never to. A lookup that returned one name would have to choose, and choosing between two commits by which came first in the file is how a migration rewrites a reference to point at the wrong commit and reports success.";
  "A name given whole is not searched for at all, only looked up, because a whole name is either in the record or is not and no amount of scanning changes that.";
  arguments_assert(arguments, 2);
  let old_to_new = property_get(read, "old_to_new");
  let size = text_size(commit);
  let whole = equal(size, 40);
  if (whole) {
    let known = commit in old_to_new;
    if (known) {
      let one = list_single_item(commit);
      return one;
    }
    let r = [];
    return r;
  }
  let names = object_property_names(old_to_new);
  function git_commit_map_names_matching_started(name) {
    let started = text_starts_with(name, commit);
    return started;
  }
  let matching = list_filter(names, git_commit_map_names_matching_started);
  return matching;
}
