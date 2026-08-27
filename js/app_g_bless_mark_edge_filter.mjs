import { arguments_assert } from "./arguments_assert.mjs";
import { g_img_square_size_css } from "./g_img_square_size_css.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_g_bless_mark_edge_filter() {
  arguments_assert(arguments, 0);
  ("The edge put around a mark that says who to pray for next, so that the mark is visible");
  ("on every colour of ground this map is built from.");
  ("A dark rim laid on twice and a pale halo outside it. The rim is darker than any ground");
  ("here and the halo is paler than all of it, so whichever end the ground sits at, one of");
  ("the two stands away from it and the warm body of the mark between them is read as warm");
  ("rather than hunted for. This is the same trick the gold light around a prayed-for face");
  ("already uses, and it is here for the same reason it is there: the grass on this map runs");
  ("from jungle green through brown dirt to snow and pale yellow, and a single warm colour");
  ("sits at the middle of that range - so on roughly half the map it had no edge at all.");
  ("LIGHTNESS is the lever and not hue, because hue is spent on meaning here. Warm says the");
  ("work has reached this door; gold says a prayer was answered. Neither may be borrowed to");
  ("solve a problem of contrast, so contrast has to be bought somewhere else - and the two");
  ("ends of lightness are the one place left that no meaning has claimed.");
  ("Applied as a filter rather than as a border or a shadow box, because a filter follows");
  ("the SHAPE that is actually drawn. That is what lets the same edge serve an arrow and a");
  ("broken ring: the ring's gaps stay gaps, where a shadow box would have laid a solid disc");
  ("behind it and quietly filled them in - and the gaps are what the ring says.");
  ("Sized as a fraction of a tile, because the map is drawn at whatever size the screen has");
  ("room for. Written in fixed units this would be a hairline on a tablet and a smear on a");
  ("phone.");
  let size = g_img_square_size_css();
  let rim = text_combine_multiple([
    "drop-shadow(0 0 calc((",
    size,
    ") * 0.02) rgba(0, 0, 0, 0.95))",
  ]);
  let halo = text_combine_multiple([
    "drop-shadow(0 0 calc((",
    size,
    ") * 0.06) rgba(255, 255, 255, 0.85))",
  ]);
  let filter = text_combine_multiple([rim, " ", rim, " ", halo]);
  return filter;
}
