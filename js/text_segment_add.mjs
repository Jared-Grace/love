import { property_equals } from "./property_equals.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export function text_segment_add(segments, shared, before_text, after_text) {
  "$plain shared";
  "$plain before_text";
  "$plain after_text";
  "One stretch added to the end of a comparison, joined onto the stretch already there when it is the same kind of thing and started as a new one when it is not.";
  "A STRETCH CARRIES BOTH SIDES AT ONCE rather than one side each. What the two pieces of text share is by definition the same in both, and what differs in them differs in the same place; kept as two separate lists they can be built out of step, and then the halves that are supposed to be identical are not.";
  "IT JOINS RATHER THAN LISTING EVERY CHARACTER SEPARATELY, and that is the whole reason it exists. The walk that fills it answers one character at a time, and a stretch per character would draw a line as several hundred boxes, each of which a page has to style and lay out on its own.";
  "THE KIND OF THING IS WHETHER IT IS SHARED, and nothing else, so two stretches that both differ join even where they differ for different reasons. A reader is being shown which part of a line is not the same, not which edit put each character there.";
  arguments_assert(arguments, 4);
  let size = segments.length;
  let started = greater_than(size, 0);
  if (started) {
    let last = segments[subtract(size, 1)];
    let joins = property_equals(last, "shared", shared);
    if (joins) {
      let before_already = property_get(last, "before_text");
      let after_already = property_get(last, "after_text");
      last.before_text = before_already + before_text;
      last.after_text = after_already + after_text;
      return;
    }
  }
  let segment = {
    shared,
    before_text,
    after_text,
  };
  list_add(segments, segment);
}
