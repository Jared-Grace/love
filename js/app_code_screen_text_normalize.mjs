import { text_digits_mask } from "./text_digits_mask.mjs";
import { text_split } from "./text_split.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { list_join } from "./list_join.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function app_code_screen_text_normalize(text) {
  "normalize a captured screen's text for diffing: mask every number, then collapse consecutive identical lines into one. Masking handles random values; collapsing handles random LENGTH - a count-of-symbols question shows a different number of symbol tiles each crawl, which become a run of identical # lines, so collapsing the run makes two crawls compare equal. What survives is the labels, prose, and structure the make-sense judge actually evaluates";
  let masked = text_digits_mask(text);
  let lines = text_split(masked, "\n");
  let kept = [];
  let previous = null;
  function keep_unless_repeat(line) {
    let repeat = equal(line, previous);
    if (not(repeat)) {
      list_add(kept, line);
      previous = line;
    }
  }
  each(lines, keep_unless_repeat);
  let normalized = list_join(kept, "\n");
  return normalized;
}
