import { arguments_assert } from "./arguments_assert.mjs";
import { playwright_happy_answer_selector } from "./playwright_happy_answer_selector.mjs";
import { html_document_root } from "./html_document_root.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { sleep } from "./sleep.mjs";
import { html_component_wrap } from "./html_component_wrap.mjs";
import { html_click } from "./html_click.mjs";
export async function html_happy_answers_press(count) {
  arguments_assert(arguments, 1);
  ("Press, inside the page itself, this many of the controls the page marks as the right answer, one after another, each once it is up - the same walk a headless test takes, so a person can open a link already deep inside a step-through.");
  ("It waits for a marked answer that is not the one it pressed last, because the pressed one stays marked while its success is shown, and pressing it twice would answer the same question twice.");
  ("Running out of waiting stops it quietly and hands back how many it pressed: a screen with nothing more to answer is where the walk ends, not a failure.");
  let selector = playwright_happy_answer_selector();
  let component = html_document_root();
  let root = html_component_element_get(component);
  let poll_ms = 50;
  let wait_most_ms = 10000;
  let last = null;
  for (let k = 0; less_than(k, count); k++) {
    let waited = 0;
    let found = null;
    while (equal(found, null) && less_than(waited, wait_most_ms)) {
      let v = root.querySelectorAll(selector);
      let marked = Array.from(v);
      function others(e) {
        let r = not_equal(e, last) || not(last.isConnected);
        return r;
      }
      let fresh = marked.filter(others);
      if (less_than(0, fresh.length)) {
        found = fresh[0];
      } else {
        await sleep(poll_ms);
        waited = waited + poll_ms;
      }
    }
    if (equal(found, null)) {
      return k;
    }
    let c = html_component_wrap(found);
    html_click(c);
    last = found;
  }
  return count;
}
