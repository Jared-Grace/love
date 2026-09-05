import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_camera_still_class } from "./app_g_bless_camera_still_class.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_style_head } from "./html_style_head.mjs";
import { html_class_add } from "./html_class_add.mjs";
export function app_g_bless_camera_still_start(container_map) {
  arguments_assert(arguments, 1);
  ("Switches off sliding for everything on the map, so that whatever is placed next is");
  ("placed exactly rather than walked to.");
  ("The whole of this is about a disagreement between two ways of being placed. The ground");
  ("is a grid of squares of a given size, so it is simply redrawn the moment the size");
  ("changes. A person is not on the grid at all - they are held at so many squares across");
  ("and so far down, and told to SLIDE whenever that lands somewhere new, because sliding");
  ("is what walking looks like. A resize moves every one of those landings at once, so");
  ("every person on the street sets off walking to a place they are already standing on,");
  ("and the player watches the ground jump and the people crawl after it.");
  ("It is done with a rule in the page rather than by writing on each person, for two");
  ("reasons. Every part of every person carries its own sliding instruction written into");
  ("it, so writing over them means finding all of them and then putting each one back");
  ("exactly as it was; and it is not only people - anything drawn on this map that slides");
  ("has the same problem, including things added later that this would never have been told");
  ("about. A rule that outranks what is written on an element covers all of it and leaves");
  ("nothing to put back.");
  ("Turning it on and turning it off are two calls rather than one, because a camera that");
  ("travels holds it on across many frames. One call that did both could only ever cover a");
  ("single change of size.");
  ("What is switched off is MOVEMENT and not fading. A change of size moves where a thing");
  ("stands and never how bright it is, so the only sliding that has to be stopped is the");
  ("sliding about place - and a rule that stopped all of it stopped the lights a");
  ("celebration is made of. A prayer that finishes a house travels the camera while the");
  ("house is lighting, and under a blanket rule that light finished in a single frame the");
  ("moment the camera set off: the player watched the house jump to gold instead of");
  ("watching it go gold.");
  ("Naming the one thing that may still run says the rule as it was always meant - hold the");
  ("street still, let the light through - and anything drawn on this map later inherits that");
  ("agreement without being told about it, which is what the blanket was for.");
  let name = app_g_bless_camera_still_class();
  let selector = text_combine_multiple([".", name, ", .", name, " *"]);
  let css = text_combine_multiple([
    selector,
    " { transition-property: opacity !important; }",
  ]);
  html_style_head(css);
  html_class_add(container_map, name);
}
