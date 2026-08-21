import { list_size } from "./list_size.mjs";
import { each } from "./each.mjs";
export function bible_dream_trace_status_text(states, told) {
  "The one line a player reads while tracing: how many strokes are done out of how many, how many times the hand left a corridor, and what the last finished stroke was said to be in the passage.";
  "The last finished stroke is quoted in the passage's own words rather than named by its symbol, because the whole claim of this palette is that the player is drawing what the text says was seen. A readout saying cow_gaunt would be reporting on the prototype; one saying seven other cows, sickly and thin, came up from the Nile is reporting on GEN41.";
  let total = list_size(states);
  let done = 0;
  let slips = 0;
  function each_state(state) {
    if (state.done) {
      done = done + 1;
    }
    slips = slips + state.slips;
  }
  each(states, each_state);
  let text = done + " of " + total + " strokes traced, " + slips + " slips";
  let said_count = list_size(told);
  if (said_count > 0) {
    let last = told[said_count - 1];
    text = text + " — " + last;
  }
  return text;
}
