import { greater_than } from "./greater_than.mjs";
import { html_loading_state } from "./html_loading_state.mjs";
import { subtract } from "./subtract.mjs";
export function html_loading_count_down_last_is() {
  "Notes that one piece of work asking for the overlay has finished, and says whether it was the last one still asking.";
  "Several runs of work can be waiting at once and they all share the one overlay, so the overlay may only go when the last of them is done. Counting them is what makes that safe, and every way of taking the overlay away has to count the same way or two of them will disagree about whether anybody is still waiting.";
  "The count is put back to nothing rather than left where it landed. It can only be at or below nothing to get here, and letting it sit below would mean the next run of work has to climb back up to nothing before the overlay is shown at all.";
  let state = html_loading_state();
  state.count = subtract(state.count, 1);
  if (greater_than(state.count, 0)) {
    let waiting = false;
    return waiting;
  }
  state.count = 0;
  let last = true;
  return last;
}
