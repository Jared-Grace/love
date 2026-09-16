import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_hero_grow_step } from "./app_g_hero_grow_step.mjs";
import { multiply } from "./multiply.mjs";
import { add } from "./add.mjs";
import { app_g_hero_grow_most } from "./app_g_hero_grow_most.mjs";
import { greater_than } from "./greater_than.mjs";
export function app_g_hero_tall(slain) {
  arguments_assert(arguments, 1);
  ("How tall the player stands, as a share of the height she started at, after stopping this");
  ("many evil people.");
  ("It is worked out from the COUNT every time rather than kept as a height that is nudged");
  ("upward, because a height that is nudged is a height that can drift - a growth that was");
  ("interrupted, or two that landed together, and she is left a size that answers to nothing.");
  ("Asked this way the count is the whole of the truth and the size is only ever a reading of");
  ("it, so there is nothing to keep in step.");
  ("That also means anything else that has to draw her at her right height - the swell before");
  ("she throws the fire is the one that does - can ask the same question and get the same");
  ("answer, instead of being handed the size and having to be told again when it changes.");
  let step = app_g_hero_grow_step();
  let grown = multiply(slain, step);
  let tall = add(1, grown);
  let most = app_g_hero_grow_most();
  let over = greater_than(tall, most);
  if (over) {
    tall = most;
  }
  return tall;
}
