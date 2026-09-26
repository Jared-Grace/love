import { html_span_text } from "./html_span_text.mjs";
import { app_code_placeholder_dots } from "./app_code_placeholder_dots.mjs";
import { app_code_code_tile } from "./app_code_code_tile.mjs";
export function app_code_placeholder_tile_number(parent) {
  "a code tile holding a greyed ... standing for any number - the unquoted number counterpart of the quoted string placeholder tile";
  "A code tile with no quotes, holding the first few counting numbers and then the course's grey gap: 1, 2, 3,... Asked for by the human. The dots alone did not say what kind of thing was left out - the string tile says it with its quotes, and a number has no quotes to say it with - so the numbers say it instead.";
  let counting = "1, 2, 3,";
  function fill(host) {
    html_span_text(host, counting);
    app_code_placeholder_dots(host);
  }
  let tile = app_code_code_tile(parent, fill);
  return tile;
}
