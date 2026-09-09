import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_words_edged_labelled } from "./app_ceb_bible_gloss_words_edged_labelled.mjs";
import { property_equals } from "./property_equals.mjs";
import { list_filter } from "./list_filter.mjs";
export async function app_ceb_bible_gloss_words_edged_unknown(offenders) {
  arguments_assert(arguments, 1);
  let carried = ["bare"];
  let labelled = await app_ceb_bible_gloss_words_edged_labelled(
    offenders,
    carried,
  );
  function broken_down_is(row) {
    let taken_apart = property_equals(row, "kind", "broken_down");
    return taken_apart;
  }
  function refused_is(row) {
    let said_no = property_equals(row, "kind", "refused");
    return said_no;
  }
  function unknown_is(row) {
    let never_asked = property_equals(row, "kind", "unknown");
    return never_asked;
  }
  let broken_down = list_filter(labelled, broken_down_is);
  let refused = list_filter(labelled, refused_is);
  let unknown = list_filter(labelled, unknown_is);
  let r = {
    labelled,
    broken_down,
    refused,
    unknown,
  };
  return r;
}
