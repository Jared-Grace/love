import { arguments_assert } from "./arguments_assert.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { equal } from "./equal.mjs";
import { app_g_arcs_moved_color } from "./app_g_arcs_moved_color.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { not_equal } from "./not_equal.mjs";
import { app_g_arcs_field_shaped } from "./app_g_arcs_field_shaped.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { list_empty_is_or_null } from "./list_empty_is_or_null.mjs";
export function app_g_arcs_field_pair(
  parent,
  row,
  moved_fields,
  name,
  voice_color,
) {
  "$plain name";
  "$plain voice_color";
  "The mark on a line that has moved: a bar down the side of the wording that stands now, the wording it replaced drawn underneath it, and the words that left and arrived - and nothing at all, on nothing at all, where the field has not been touched.";
  "THE LINE THAT MOVED IS MARKED AND NOT ONLY ANNOTATED, which is the whole difference between a diff that is read and one that is not. Drawing the previous wording underneath and leaving the line above it looking exactly like every unchanged line means the only way to find the handful that moved is to read every one of them - and a reviewer skimming a fifty-line arc on a phone went straight past all fifty-one changes in it and reported seeing none. The mark goes on the thing being skimmed.";
  "THE ROW IS HANDED IN RATHER THAN MADE HERE, because it is somebody else's row. The line that moved is drawn by whoever is drawing the field, in whatever kind that field is; this only knows which fields moved, so it is given the drawn row and marks it, and no field-drawing has to be duplicated to get a marked version of it.";
  "AN UNTOUCHED FIELD DRAWS NOTHING AND IS MARKED WITH NOTHING. A reviewer coming back to an arc is looking for the handful of lines that moved, so every unmoved field that says so costs a line of the page and hides the ones that did move among them. Silence is the answer that makes the marked lines findable.";
  "IT IS DRAWN UNDERNEATH AND NOT INSTEAD, because both versions are wanted at once. The question a reviewer is answering is whether the rewrite mended the fault they filed, and that cannot be judged from either version alone.";
  "THE WORDS THAT MOVED ARE NAMED AS WELL AS THE WHOLE PREVIOUS LINE, because they are what the eye can take at a glance. On a line rewritten in the middle of a paragraph the two versions look alike and the difference is found by reading both; the words that left and arrived say it without reading either.";
  "A REORDERING SHOWS THE OLD LINE AND NO WORDS, which is truthful rather than a gap. Moving words about changes no word, so there is nothing to name - and a reviewer seeing the previous line beside an empty account of the words knows to read the two lines for their shape rather than for their vocabulary.";
  arguments_assert(arguments, 5);
  let moved = property_or_null(moved_fields, name);
  let still = equal(moved, null);
  if (still) {
    return;
  }
  let mark_color = app_g_arcs_moved_color();
  html_style_assign(row, {
    "border-left": text_combine_multiple(["4px solid ", mark_color]),
    "padding-left": "0.5rem",
    "margin-left": "-0.15rem",
    "background-color": "rgba(180,83,10,0.05)",
  });
  let before = property_get(moved, "before");
  let gone = property_get(moved, "gone");
  let come = property_get(moved, "come");
  let written = not_equal(before, null);
  if (written) {
    app_g_arcs_field_shaped(parent, "was", before, "was", voice_color);
  }
  let fresh = equal(before, null);
  if (fresh) {
    app_g_arcs_field_shaped(parent, "was", "not written", "was", voice_color);
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
