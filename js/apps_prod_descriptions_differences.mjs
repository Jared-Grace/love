import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { object_to_list } from "./object_to_list.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { text_empty } from "./text_empty.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export function apps_prod_descriptions_differences(shipped, described) {
  "$plain shipped";
  "$plain described";
  "Where the sentence a shared link shows for an app is not the sentence this repo now says about it, sorted by which of the four ways the two part.";
  "SORTED BY CAUSE, because the four have four different cures and one flat list of names would hide which cure each needs. A sentence that disagrees with the one now written, and a sentence standing on a page that the repo no longer says anywhere, are both cured by sending the app - but the second is the dangerous one, because nobody reading this repo can find out what it even claims. A page carrying no sentence while one is written for it arrives as a bare address. And a sentence written for an app that is not in the folder people are sent reaches nobody at all, which no amount of sending will change.";
  "NOT ONE OF THE FOUR IS A FAULT IN THE CODE, so the reading taken off the disk with this is a report and never a gate. Every one of them is cured by somebody sending the site, and that is not a decision this program gets to take. A gate on it would go red the moment a sentence was corrected, stay red until it was sent, and refuse the very sending that cures it - the folder it reads is the only one git tracks, so the correction cannot reach it any other way. What IS gated is this function itself, against written-down cases.";
  "An app missing from what was shipped has no page in that folder at all; an app present there with nothing to say has a page that carries no card. Those are two different positions, kept apart because building cures the second and cannot touch the first.";
  "The count travels beside the names for the usual reason: four empty lists is what full agreement looks like, and it is equally what a walk over an empty folder looks like.";
  arguments_assert(arguments, 2);
  let stale = [];
  let unsaid = [];
  let silent = [];
  let unoffered = [];
  let on_disk = object_to_list(shipped);
  for (let pair of on_disk) {
    let app_name = property_get(pair, "key");
    let live = property_get(pair, "value");
    let found = property_get_or_null(described, app_name);
    let says = found;
    if (null_is(found)) {
      says = text_empty();
    }
    let live_bare = text_empty_is(live);
    let says_bare = text_empty_is(says);
    if (live_bare) {
      if (not(says_bare)) {
        list_add(silent, app_name);
      }
      continue;
    }
    if (says_bare) {
      list_add(unsaid, app_name);
      continue;
    }
    if (not_equal(live, says)) {
      list_add(stale, app_name);
    }
  }
  let authored = object_to_list(described);
  for (let pair of authored) {
    let app_name = property_get(pair, "key");
    let says = property_get(pair, "value");
    let says_bare = text_empty_is(says);
    if (says_bare) {
      continue;
    }
    let live = property_get_or_null(shipped, app_name);
    if (null_is(live)) {
      list_add(unoffered, app_name);
    }
  }
  let walked = list_size(on_disk) + list_size(unoffered);
  let r = {
    walked,
    stale: list_sort_text(stale),
    unsaid: list_sort_text(unsaid),
    silent: list_sort_text(silent),
    unoffered: list_sort_text(unoffered),
  };
  return r;
}
