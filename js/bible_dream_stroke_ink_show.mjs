import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { modulo } from "./modulo.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
export function bible_dream_stroke_ink_show(state) {
  "Show exactly the parts of a stroke that have been drawn and hide the rest, however many separate pieces those parts fall into.";
  "★ IT CANNOT BE A SINGLE MEASUREMENT ANY MORE. While a stroke had to be traced from its beginning, everything drawn was one run starting at nothing, and one number - how much is still hidden - said all of it. Once a hand may be put down in the middle and go either way, what is drawn can be two pieces with a gap between them, and a single number cannot say that. So the run of dashes and gaps is built out of the marks themselves, which can say any pattern at all.";
  "The pattern is built to add up to exactly the length of the line. A browser repeats a dash pattern that runs out before the line does, so one that adds up short would print itself again, out of step, and show pieces nobody drew. It is also padded to an even number of runs for the same reason: an odd one is repeated with the dashes and the gaps swapped, which would show precisely what is meant to be hidden.";
  let samples = state.samples;
  let count = list_size(samples);
  let last = subtract(count, 1);
  let step = divide(state.total, last);
  let text = "";
  let runs = 0;
  let showing = true;
  let run = 0;
  let index = 0;
  while (less_than(index, last)) {
    let visible = state.covered[index] && state.covered[index + 1];
    if (equal(visible, showing)) {
      run = run + step;
      index = index + 1;
      continue;
    }
    text = text + run + " ";
    runs = runs + 1;
    showing = not(showing);
    run = step;
    index = index + 1;
  }
  text = text + run;
  runs = runs + 1;
  let odd = modulo(runs, 2);
  if (equal(odd, 1)) {
    text = text + " 0";
  }
  html_attribute_set(state.ink, "stroke-dasharray", text);
  html_attribute_set(state.ink, "stroke-dashoffset", "0");
}
