import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_code_dark_nowrap } from "./html_span_code_dark_nowrap.mjs";
export function app_code_code_tile(parent, fill) {
  arguments_assert(arguments, 2);
  ("one dark code tile whose insides the caller draws: the tile here, whatever goes in it handed in as fill, and the tile handed back");
  ("FOR A CHIP THAT IS NOT ALL ONE COLOUR. A chip built from a string is written in one call and that is the right way to write one whenever the whole of it is code. This is for the chips that have a gap painted into them - the grey dots - where the pieces have to be spans of their own and so the caller has to be inside the tile.");
  ("The tile is the one the whole app writes code into, so it refuses to wrap along with all the others. A caller that made its own would be a second place deciding what a code tile looks like.");
  let tile = html_span_code_dark_nowrap(parent);
  fill(tile);
  return tile;
}
