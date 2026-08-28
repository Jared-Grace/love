import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_marks } from "./app_g_bless_marks.mjs";
import { app_g_bless_edge } from "./app_g_bless_edge.mjs";
import { app_g_bless_wash } from "./app_g_bless_wash.mjs";
export function app_g_bless_overlay_render_tap_prayed_render_ground(
  ground,
  glows,
  homes,
  blocks,
  blessed,
  view_everyone,
  edge,
  container_map,
  bar,
  cone_get,
  hold,
  wash,
) {
  arguments_assert(arguments, 12);
  ("Everything the record has to say about the street - who is lit, which houses are filled");
  ("in, who is ringed - is drawn from the record on every step rather than remembered here,");
  ("so a person covered by a prayer over their whole block lights up the moment they walk");
  ("into view without anybody having gone back to write their name down.");
  let remaining = app_g_bless_marks(
    glows,
    homes,
    blocks,
    blessed,
    view_everyone,
    ground,
  );
  ("The arrow at the edge of the screen is aimed here rather than with the marks on the");
  ("ground, because it is the one hint that is not about the street at all - it is about");
  ("where the screen ENDS, and so it has to be worked out from the frame and the strip of");
  ("buttons, neither of which anything drawing on the map has any business knowing about.");
  app_g_bless_edge(edge, container_map, bar, remaining);
  let cone = cone_get();
  ("The draw is also where the player is noticed to have MOVED, because every player action");
  ("ends in one - a step, a turn, a prayer - and the hold reads the cone to tell which. Told");
  ("from the outside instead, the two places that walk the player and the one that turns");
  ("them would each have to remember to say so, and the one that forgot would be a person");
  ("the player thought they were holding and were not.");
  hold();
  app_g_bless_wash(wash, cone);
}
