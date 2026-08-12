import { list_get } from "./list_get.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
export function app_g_day_follower_ahead(player, followers, index) {
  "who the person standing this far back in the line is walking behind - the player for the one at the front of it, and the place before them for everybody else";
  "the line is a list and the player is not in it, so the person ahead of place N is place N minus one, and place nought is the one join between the list and the person it is following";
  let front = equal(index, 0);
  if (front) {
    return player;
  }
  let back = subtract(index, 1);
  let ahead = list_get(followers, back);
  return ahead;
}
