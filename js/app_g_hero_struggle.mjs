import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { app_g_hero_translate_text } from "./app_g_hero_translate_text.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_animate_start } from "./html_animate_start.mjs";
import { list_map } from "./list_map.mjs";
import { html_animate } from "./html_animate.mjs";
export async function app_g_hero_struggle(hero, fire, dark, mid, to) {
  arguments_assert(arguments, 5);
  ("The two powers are locked together where they met, shoving each other up and down the");
  ("line between the player and the killer, until the fire wins and drives the dark power");
  ("all the way back into them.");
  ("The killer shoves FIRST and hardest, and the fire gives ground twice more after that.");
  ("A fight the player wins from the first moment is not a fight, and the point of this one");
  ("is that stopping a killer costs her something. She has to be pushed back before it means");
  ("anything that she comes forward.");
  ("Every shove is measured as a FRACTION of the ground between the meeting place and the");
  ("killer, never as a number of pixels, so the struggle looks the same whether she is");
  ("standing next to them or the length of the street away.");
  ("The fire grows through the whole of it and the dark power shrinks, so the outcome is");
  ("readable well before it arrives - which is what stops the ending being a surprise and");
  ("makes it a victory.");
  ("The street trembles underneath all the way through, and it is given exactly as many");
  ("shakes as the struggle is long rather than being stopped afterwards. Neither power moves");
  ("far while they are locked, and a still screen would read as the animation having stuck;");
  ("the shaking is what says that something enormous is being held in one place.");
  let container_map = property_get(hero, "container_map");
  let left = property_get(to, "x");
  let right = property_get(mid, "x");
  let dx = subtract(left, right);
  let left2 = property_get(to, "y");
  let right2 = property_get(mid, "y");
  let dy = subtract(left2, right2);
  function shove_text(fraction, scale) {
    let x = multiply(dx, fraction);
    let y = multiply(dy, fraction);
    let move = app_g_hero_translate_text(x, y);
    let text = text_combine_multiple([move, " scale(", scale, ")"]);
    return text;
  }
  html_animate_start(
    container_map,
    [
      {
        transform: "translate(0px, 0px)",
      },
      {
        transform: "translate(-3px, 2px)",
      },
      {
        transform: "translate(2px, -3px)",
      },
      {
        transform: "translate(-2px, -2px)",
      },
      {
        transform: "translate(3px, 2px)",
      },
      {
        transform: "translate(0px, 0px)",
      },
    ],
    {
      duration: 180,
      iterations: 13,
      easing: "linear",
    },
  );
  let steps = [
    {
      mark: 0,
      ground: 0,
      fire_size: 1,
      dark_size: 1,
    },
    {
      mark: 0.18,
      ground: -0.3,
      fire_size: 1.02,
      dark_size: 1.14,
    },
    {
      mark: 0.36,
      ground: 0.16,
      fire_size: 1.12,
      dark_size: 1.02,
    },
    {
      mark: 0.54,
      ground: -0.24,
      fire_size: 1.08,
      dark_size: 1.1,
    },
    {
      mark: 0.72,
      ground: 0.38,
      fire_size: 1.24,
      dark_size: 0.92,
    },
    {
      mark: 0.86,
      ground: -0.12,
      fire_size: 1.18,
      dark_size: 0.98,
    },
    {
      mark: 1,
      ground: 0.3,
      fire_size: 1.34,
      dark_size: 0.84,
    },
  ];
  function fire_frame(step) {
    let ground = property_get(step, "ground");
    let size = property_get(step, "fire_size");
    let frame = {
      transform: shove_text(ground, size),
      offset: property_get(step, "mark"),
    };
    return frame;
  }
  function dark_frame(step) {
    let ground = property_get(step, "ground");
    let size = property_get(step, "dark_size");
    let frame = {
      transform: shove_text(ground, size),
      offset: property_get(step, "mark"),
    };
    return frame;
  }
  let fire_locked = list_map(steps, fire_frame);
  let dark_locked = list_map(steps, dark_frame);
  let held = {
    duration: 1750,
    easing: "cubic-bezier(0.4, 0, 0.6, 1)",
    fill: "forwards",
  };
  html_animate_start(dark, dark_locked, held);
  await html_animate(fire, fire_locked, held);
  ("Now she overpowers them. The dark power is driven the whole way home and put out on the");
  ("way, and the fire arrives at the killer bigger than it was thrown.");
  let broken = {
    duration: 620,
    easing: "cubic-bezier(0.3, 0, 0.2, 1)",
    fill: "forwards",
  };
  html_animate_start(
    dark,
    [
      {
        transform: shove_text(0.3, 0.84),
        opacity: 1,
      },
      {
        transform: shove_text(1, 0.05),
        opacity: 0,
      },
    ],
    broken,
  );
  await html_animate(
    fire,
    [
      {
        transform: shove_text(0.3, 1.34),
      },
      {
        transform: shove_text(1, 2.4),
      },
    ],
    broken,
  );
}
