import { list_random_item } from "./list_random_item.mjs";
export function app_g_discern_prayed(discern) {
  "call when the player prays for discernment: they have now been given it, and get random(1 or 2) Holy-Spirit warnings before any disregard is allowed — random so God's response can't be predicted or gamed";
  discern.prayed = true;
  discern.warnings = list_random_item([1, 2]);
}
