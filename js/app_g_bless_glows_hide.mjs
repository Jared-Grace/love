import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { property_set } from "./property_set.mjs";
export function app_g_bless_glows_hide(glows) {
  arguments_assert(arguments, 1);
  ("Put the light out, and forget who it was on.");
  ("Forgetting is not tidying up after the clearing - it is half the job. A layer wiped");
  ("clean while it still remembers whose prayer it was would light those same people up");
  ("again the next time the street takes a step, and a blessing that had ended would come");
  ("back on by itself.");
  property_set(glows, "glowing", null);
  html_clear(glows);
}
