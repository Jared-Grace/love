import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_div } from "./html_div.mjs";
import { bless_vehicle_svg } from "./bless_vehicle_svg.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { g_img_square_size_css } from "./g_img_square_size_css.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { g_img_square_layer_variable } from "./g_img_square_layer_variable.mjs";
import { g_z } from "./g_z.mjs";
import { html_style_variable_set } from "./html_style_variable_set.mjs";
import { equal } from "./equal.mjs";
import { html_click_none } from "./html_click_none.mjs";
import { property_set } from "./property_set.mjs";
import { app_g_bless_vehicle_place } from "./app_g_bless_vehicle_place.mjs";
export function app_g_bless_vehicle_draw(parent, vehicle) {
  arguments_assert(arguments, 2);
  ("Make the picture of one car on the map and hand it to the car.");
  ("It is a DIV holding markup rather than a picture, because there is no picture of a car in");
  ("this repo to point at. Everything else about it is deliberately the same as a character:");
  ("the same absolute placing, the same square size, the same layer, the same sliding.");
  ("TWO squares long and one across, which is the only place a car differs in shape from");
  ("everything else on the map. Every other thing drawn here is one square by one square, so");
  ("the width is written out rather than taken from the square helper.");
  ("It sits on the CHARACTER layer with the people rather than on a layer of its own. That is");
  ("what makes stacking work without a rule: within a layer things are stacked by which row");
  ("they are on, and the road is further from the houses than the pavement, so a car is always");
  ("in front of the people walking and behind nothing that matters. A layer of its own would");
  ("put every car in front of every person or behind every person, and one of those is wrong");
  ("in every frame.");
  ("Pointed WEST by mirroring, so one drawing serves both ways. The mirror is written as a");
  ("style and never touched again, so nothing that moves the car has to remember it - the");
  ("positioner writes left and top and leaves transform alone.");
  ("Clicks pass through it. A car is scenery: the player prays for the people on the street,");
  ("and a car that swallowed a tap would be a piece of the pavement that stopped working");
  ("whenever traffic happened to be over it.");
  let colour = property_get(vehicle, "colour");
  let direction = property_get(vehicle, "direction");
  let element = html_div(parent);
  let drawing = bless_vehicle_svg(colour);
  html_text_set(element, drawing);
  let size = g_img_square_size_css();
  let along = text_combine_multiple(["calc(2 * (", size, "))"]);
  let across = text_combine_multiple(["calc(", size, ")"]);
  html_style_assign(element, {
    position: "absolute",
    width: along,
    height: across,
  });
  let name = g_img_square_layer_variable();
  let layer = g_z("character");
  html_style_variable_set(element, name, layer);
  let west_is = equal(direction, "west");
  if (west_is) {
    html_style_assign(element, {
      transform: "scaleX(-1)",
    });
  }
  html_click_none(element);
  property_set(vehicle, "element", element);
  app_g_bless_vehicle_place(vehicle);
  return element;
}
