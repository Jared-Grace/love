import { arguments_assert } from "./arguments_assert.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { not_equal } from "./not_equal.mjs";
import { app_g_arcs_field_shaped } from "./app_g_arcs_field_shaped.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { list_empty_is_or_null } from "./list_empty_is_or_null.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_g_arcs_field_was(parent, moved_fields, name, voice_color) {
  "$plain name";
  "$plain voice_color";
  "The previous wording of one field drawn under the wording that replaced it, together with the words that left and the words that arrived - and nothing at all where the field has not been touched since it was read.";
  "AN UNTOUCHED FIELD DRAWS NOTHING RATHER THAN AN EMPTY ROW. A reviewer coming back to an arc is looking for the handful of lines that moved, so every unmoved field that says so costs a line of the page and hides the ones that did move among them. Silence is the answer that makes the marked lines findable.";
  "IT IS DRAWN UNDERNEATH AND NOT INSTEAD, because both versions are wanted at once. The question a reviewer is answering is whether the rewrite mended the fault they filed, and that cannot be judged from either version alone.";
  "THE WORDS THAT MOVED ARE NAMED AS WELL AS THE WHOLE PREVIOUS LINE, because they are what the eye can take at a glance. On a line rewritten in the middle of a paragraph the two versions look alike and the difference is found by reading both; the words that left and arrived say it without reading either.";
  "A REORDERING SHOWS THE OLD LINE AND NO WORDS, which is truthful rather than a gap. Moving words about changes no word, so there is nothing to name - and a reviewer seeing the previous line beside an empty account of the words knows to read the two lines for their shape rather than for their vocabulary.";
  "IT IS DRAWN IN THE SAME ROW-MAKER AS EVERY OTHER FIELD, in the quietest of its kinds. A previous version is background to what stands now, so it reads at the weight of an aside; drawn in its own shape it would compete with the line it is there to explain.";
  arguments_assert(arguments, 4);
  let moved = property_or_null(moved_fields, name);
  let still = equal(moved, null);
  if (still) {
    return;
  }
  let before = property_get(moved, "before");
  let gone = property_get(moved, "gone");
  let come = property_get(moved, "come");
  let written = not_equal(before, null);
  if (written) {
    app_g_arcs_field_shaped(parent, "was", before, "aside", voice_color);
  }
  let fresh = equal(before, null);
  if (fresh) {
    app_g_arcs_field_shaped(parent, "was", "not written", "aside", voice_color);
  }
  let gone_said = list_join_comma_space(gone);
  let come_said = list_join_comma_space(come);
  let nothing_gone = list_empty_is_or_null(gone);
  let nothing_come = list_empty_is_or_null(come);
  let unworded = nothing_gone && nothing_come;
  if (unworded) {
    return;
  }
  let said = text_combine_multiple(["out: ", gone_said, "   in: ", come_said]);
  app_g_arcs_field_shaped(parent, "words", said, "aside", voice_color);
}
