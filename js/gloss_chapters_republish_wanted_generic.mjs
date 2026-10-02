import { arguments_assert } from "./arguments_assert.mjs";
import { g_generate_upload_drifted } from "./g_generate_upload_drifted.mjs";
import { property_get } from "./property_get.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_includes_curried } from "./list_includes_curried.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_chapters_republish_wanted_generic(
  fn,
  chapters_uploaded,
) {
  "Which chapters of one explained Bible a republish would carry up, and why that is fewer than all of them - worked out without sending anything.";
  "★ IT EXISTS SO AN HOUR-LONG SEND CAN BE PRICED BEFORE IT IS STARTED, AND SO THE NARROWING ITSELF CAN BE CHECKED. The sending half cannot be tried out: there is no way to send a chapter a little, and a run over nine hundred chapters is the better part of an hour. So the deciding half stands under its own name, answers in under a second, and is the same code the republish uses rather than a second reading of the same question.";
  "THE SET IS THE PUBLISHED CHAPTERS THAT THE RECORD CANNOT VOUCH FOR. Two readings are crossed: what the bucket says is published, and what the store's own send-time records say has changed or is unaccounted for. Crossing them is not tidiness - a chapter in the store that has never been published is unaccounted for by definition, and sending it would be publishing something nobody chose.";
  "So the two numbers that explain the answer are both carried out beside it: how many chapters are published, and how many of the store's files the record cannot vouch for.";
  arguments_assert(arguments, 2);
  let chapter_codes = await chapters_uploaded();
  let drift = await g_generate_upload_drifted(fn);
  let drifted = property_get(drift, "drifted");
  let unrecorded = property_get(drift, "unrecorded");
  let stale = list_concat(drifted, unrecorded);
  let stale_is = list_includes_curried(stale);
  let wanted = list_filter(chapter_codes, stale_is);
  let r = {
    wanted_size: list_size(wanted),
    published: list_size(chapter_codes),
    drifted: list_size(drifted),
    unaccounted: list_size(unrecorded),
    wanted,
  };
  return r;
}
