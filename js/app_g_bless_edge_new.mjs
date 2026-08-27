import { app_g_bless_mark_edge_filter } from "./app_g_bless_mark_edge_filter.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_color_household_remaining } from "./app_g_bless_color_household_remaining.mjs";
import { g_img_square_size_css } from "./g_img_square_size_css.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { g_z } from "./g_z.mjs";
import { app_g_bless_arrow_bob } from "./app_g_bless_arrow_bob.mjs";
export function app_g_bless_edge_new(container_map) {
  arguments_assert(arguments, 1);
  ("The one arrow that lives at the edge of the screen and leans towards whoever is left to pray for out beyond it - made once, when the street is built, and aimed again on every move afterwards.");
  ("ONE of them, not one per person. Everybody still to pray for already wears an arrow of their own over their head, and those are for reading a crowd that is in front of you. This is for the other question, the one a marked crowd cannot answer: there is nobody left in sight, so which way do I walk. Several of these at once would be several answers to a question with one useful answer.");
  ("It hangs on the map's own frame rather than on the ground, which is what keeps it still while the street slides underneath. Put on the ground it would scroll away with everything else, and an arrow that leaves the screen is telling nobody anything.");
  ("Under the prayer being read and over everything on the street, because it is a hint: a hint must never be in the way of the thing it is hinting at, nor be buried by the crowd it is pointing past.");
  ("It is pulled back by half its own size so that the place worked out for it is the point it STANDS on rather than its top left corner. Written the other way, everything aiming it would have to know how big it was and take half of that off first, and would be wrong by that much on the day the tiles changed size.");
  ("The aim itself is not set here, because there is nothing to aim at yet. It is made invisible and stays that way until somebody has been prayed for and there is a household with people left in it.");
  let color = app_g_bless_color_household_remaining();
  let size = g_img_square_size_css();
  let font_size = text_combine_multiple(["calc((", size, ") * 0.9)"]);
  let outer = html_div(container_map);
  html_style_assign(outer, {
    position: "absolute",
    "z-index": g_z("tint"),
    color: color,
    "font-size": font_size,
    filter: app_g_bless_mark_edge_filter(),
    transform: "translate(-50%, -50%)",
    "pointer-events": "none",
    visibility: "hidden",
  });
  let spin = app_g_bless_arrow_bob(outer, 0);
  let edge = {
    outer,
    spin,
  };
  return edge;
}
