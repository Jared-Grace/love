import { arguments_assert } from "./arguments_assert.mjs";
import { html_span } from "./html_span.mjs";
import { html_style_code_dark_nowrap } from "./html_style_code_dark_nowrap.mjs";
export function app_code_code_tile(parent, fill) {
  arguments_assert(arguments, 2);
  ("one dark code tile whose insides the caller draws: the tile and its code styling here, whatever goes in it handed in as fill, and the tile handed back");
  ("FOR A CHIP THAT IS NOT ALL ONE COLOUR. A chip built from a string is written in one call and that is the right way to write one whenever the whole of it is code. This is for the chips that have a gap painted into them - the grey dots - where the pieces have to be spans of their own and so the caller has to be inside the tile.");
  ("The tile refuses to wrap, the same as every other code tile, because a line of code broken across two rows stops reading as one line. That is a property of code tiles rather than of any one caller, which is why it is here and not repeated at each of them.");
  let tile = html_span(parent);
  html_style_code_dark_nowrap(tile);
  fill(tile);
  return tile;
}
