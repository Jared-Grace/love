import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_apps_aggregate_reaching } from "./bible_glyph_apps_aggregate_reaching.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_is_assert_walked_generic } from "./list_empty_is_assert_walked_generic.mjs";
export async function bible_glyph_apps_aggregate_reaching_gate_run() {
  "Gate: no app may reach a function holding every picture chapter at once. Read-only.";
  "A reader opens one chapter. An app that can reach all of them downloads the whole book to draw a page of it, and a reader who opens nothing at all pays for it before the first paint.";
  "Measured against zero rather than against a record of what the repo already had, because the three that offended were all put right on the day this was written. A baseline seeded at nothing is a file that exists only to say so.";
  "The number handed back is how many apps were opened, not how many were wrong. Nothing wrong is what this says on a good day and also what it would say on the day its sweep stopped visiting anything, and the count of apps walked is the only part of the answer that tells those two apart.";
  arguments_assert(arguments, 0);
  let found = await bible_glyph_apps_aggregate_reaching();
  let walked = property_get(found, "walked");
  let offenders = property_get(found, "offenders");
  let f_name = fn_name("bible_glyph_chapter_fetched");
  let hint = text_combine_multiple([
    "this app can reach a function holding every picture chapter at once, so the page carries the whole book to draw one chapter of it - send for the one chapter instead, with ",
    f_name,
    " or the fetching neighbour named after whichever aggregate was reached",
  ]);
  let r = list_empty_is_assert_walked_generic(walked, offenders, hint);
  return r;
}
