import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { examples_folder } from "./examples_folder.mjs";
import { text_split } from "./text_split.mjs";
import { list_size } from "./list_size.mjs";
import { text_combine } from "./text_combine.mjs";
import { equal_not } from "./equal_not.mjs";
export function examples_import_prefixes() {
  "The start of the import line an example file should be spelling to reach the repo's own javascript, and the starts it might be spelling instead.";
  "Worked out from how deep the examples room actually sits rather than typed, so moving the room to a different depth is answered by moving it - one climbing step for each part of its path, which is what lands at the repo root from anywhere.";
  "Each one begins at the opening quote mark on purpose. Without it the shallower start is a piece of the deeper one, and repairing a file that was already right would push it one step further out every time it was asked. Anchored at the quote they cannot overlap, because the character after the last climbing step is either a letter or another dot and never both.";
  arguments_assert(arguments, 0);
  let folder = examples_folder();
  let parts = text_split(folder, "/");
  let depth = list_size(parts);
  let quote = String.fromCharCode(34);
  function start_at(steps) {
    let climbed = "";
    for (let step = 0; less_than(step, steps); step++) {
      climbed = text_combine(climbed, "../");
    }
    let reached = text_combine(climbed, "js/");
    let anchored = text_combine(quote, reached);
    return anchored;
  }
  let right = start_at(depth);
  let wrong = [];
  for (let steps = 1; less_than(steps, 9); steps++) {
    let other = start_at(steps);
    let differs = equal_not(other, right);
    if (differs) {
      wrong.push(other);
    }
  }
  let r = {
    right,
    wrong,
  };
  return r;
}
