import { arguments_assert } from "./arguments_assert.mjs";
import { property_set } from "./property_set.mjs";
import { app_g_bless_overlay } from "./app_g_bless_overlay.mjs";
export function app_g_dev_routes_bless(routes, div_map) {
  arguments_assert(arguments, 2);
  ("Registers #bless - the prayer game's loop, on its own, over g's map container.");
  ("It is a dev route rather than an app because it is one mechanic under test and nothing");
  ("else: no walking, no travel, no saving. A second app is a shipping surface, and there is");
  ("nothing here yet worth shipping - only something worth looking at.");
  ("It also settles what was asked for: the prayer game's first screen is not sharing g's");
  ("grid and overlays and buttons, it is literally running inside them. Nothing had to be");
  ("promoted to make that true, and what does eventually need promoting is now readable off");
  ("this screen's imports rather than guessed at in advance.");
  function bless() {
    app_g_bless_overlay(div_map);
  }
  property_set(routes, "bless", bless);
}
