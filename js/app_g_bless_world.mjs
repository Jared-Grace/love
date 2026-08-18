import { arguments_assert } from "./arguments_assert.mjs";
export function app_g_bless_world(cone, people, street, span) {
  arguments_assert(arguments, 4);
  "Everything one drawing of the grid needs: where the player is looking, who is about, the";
  "street underfoot, and how many tiles either side of the player to draw.";
  "The span belongs here and nowhere below, because how much ground fits on a screen is a";
  "renderer's business and the brain must never learn it. The brain asks who is visible and";
  "gets a list; if it could also ask how wide the screen was, the ladder would start meaning";
  "different things on a phone and on a desktop, and the game would fork in two.";
  let world = { cone: cone, people: people, street: street, span: span };
  return world;
}
