import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { each } from "./each.mjs";
export function app_code_code_dark_parts_fill(component, parts) {
  arguments_assert(arguments, 2);
  ("fills a piece of the page that is already dressed as code with several runs of writing, colouring the ones that are being pointed at and leaving the rest in the code colour");
  ("ONE CHIP WITH COLOUR LAID OVER IT, which is the whole reason this exists. A run of code that has one character picked out could be written as several chips side by side, and it reads as several separate pieces of code with gaps between them - but the thing being pointed at is one piece of code. So the dark, the code font and the room at the edges all come from the one component handed in, and a coloured run adds a background of its own and nothing else.");
  ("Each run is a pair: what it says, and the colour behind it. A colour of nothing means the run is left as it is, which is what most runs are - a line of code usually has one or two characters picked out and the rest is plain.");
  ("The component is handed in already dressed rather than made here, because the three callers want different boxes - a line of its own standing on the page, and a chip sitting inside an English sentence - and the dressing is the only thing that differs between them.");
  function lambda_part(part) {
    let saying = part[0];
    let background = part[1];
    let span = html_span_text(component, saying);
    if (background) {
      html_style_background_color_set(span, background);
    }
  }
  each(parts, lambda_part);
}
