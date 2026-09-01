import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export function text_run_add(runs, letter, changed) {
  "$plain letter";
  "$plain changed";
  "One character added to the end of a list of runs, joined onto the run already there when it is the same kind of thing and started as a new run when it is not.";
  "IT JOINS RATHER THAN LISTING EVERY CHARACTER SEPARATELY, and that is the whole reason it exists. A walk over two pieces of text answers one character at a time, and a run per character would draw a line as several hundred boxes, each of which a page has to style and lay out on its own.";
  "THE KIND OF THING IS WHETHER IT MOVED, and nothing else, so two characters that both moved join even where they moved for different reasons. A reader is being shown which stretch of a line is different, not which edit put each character there.";
  arguments_assert(arguments, 3);
  let size = runs.length;
  let started = size > 0;
  if (started) {
    let last = runs[size - 1];
    let last_changed = property_get(last, "changed");
    let joins = last_changed === changed;
    if (joins) {
      let text = property_get(last, "text");
      last.text = text + letter;
      return;
    }
  }
  let run = {
    text: letter,
    changed,
  };
  list_add(runs, run);
}
