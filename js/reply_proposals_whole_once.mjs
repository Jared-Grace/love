import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
export function reply_proposals_whole_once(proposals) {
  arguments_assert(arguments, 1);
  ("The changes waiting to be read, with each new file left on the first change that brings it and taken off any later one.");
  ("★ A FILE IS APPROVED BY ITS NAME AND ITS WORDING, NOT BY THE CHANGE IT WAS SHOWN ON. One yes already counts for every change that brings it, so a second copy on the page asks a question that has been answered.");
  let seen = [];
  function each_proposal(proposal) {
    let whole = property_get(proposal, "whole");
    function first_time_is(file) {
      let name = property_get(file, "name");
      let already = list_includes(seen, name);
      if (already) {
        return false;
      }
      list_add(seen, name);
      return true;
    }
    let kept = list_filter(whole, first_time_is);
    let r = {
      ...proposal,
      whole: kept,
    };
    return r;
  }
  let once = list_map(proposals, each_proposal);
  return once;
}
