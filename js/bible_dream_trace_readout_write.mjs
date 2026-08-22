import { arguments_assert } from "./arguments_assert.mjs";
import { bible_dream_trace_status_text } from "./bible_dream_trace_status_text.mjs";
import { html_text_set } from "./html_text_set.mjs";
export function bible_dream_trace_readout_write(readout, states, told) {
  "The line saying how far along a traced dream is, worked out from the strokes as they stand and written onto the page.";
  "IT IS ASKED FOR RATHER THAN REMEMBERED. The strokes themselves are the only record of how much has been drawn, so the line is read off them every time it is written and cannot fall behind what is on the screen.";
  arguments_assert(arguments, 3);
  let text = bible_dream_trace_status_text(states, told);
  html_text_set(readout, text);
}
