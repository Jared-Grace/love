import { property_get } from "./property_get.mjs";
import { app_replace_goal_hash_tokens } from "./app_replace_goal_hash_tokens.mjs";
import { list_map } from "./list_map.mjs";
import { less_than } from "./less_than.mjs";
import { app_replace_goal_hash_ids_grow } from "./app_replace_goal_hash_ids_grow.mjs";
import { not } from "./not.mjs";
export function app_replace_goal_hash_ids_whole(goals) {
  "The words for each goal of one rule set before any run is left out: the first letter of each symbol of where it starts, a wave, and the first letter of each symbol of where it has to end - the goal from 1 = 1 to 1 + 1 = 1 1 is 1e1~1p1e11, and function average ( x y ) shortens to fa(xy).";
  "Where two goals of the set would come out alike, the symbols that tell them apart get one more letter each, again and again until the words differ - mae [ mae ] = mue and mae [ mae ] = mae become m(m)emu and m(m)ema. Only symbols in the same place that differ grow, so the rest stays as short as it was.";
  "Two goals whose symbols are spelled out in full and still come out alike stay alike, and the check on these words is what says so.";
  function tokens_get(goal) {
    let text = property_get(goal, "start");
    let start = app_replace_goal_hash_tokens(text);
    let text2 = property_get(goal, "end");
    let end = app_replace_goal_hash_tokens(text2);
    let r = [...start, "~", ...end];
    return r;
  }
  let tokens = list_map(goals, tokens_get);
  function ones_get(tokens_one) {
    function lambda() {
      let r2 = 1;
      return r2;
    }
    let r3 = tokens_one.map(lambda);
    return r3;
  }
  let lengths = list_map(tokens, ones_get);
  function id_get(tokens_one, index) {
    function shown_get(token, place) {
      let r4 = token.slice(0, lengths[index][place]);
      return r4;
    }
    let r5 = tokens_one.map(shown_get).join("");
    return r5;
  }
  while (true) {
    let ids = tokens.map(id_get);
    let grew = false;
    let groups = new Map();
    function group_add(id, index) {
      groups.set(id, [...(groups.get(id) ?? []), index]);
    }
    ids.forEach(group_add);
    for (let group of groups.values()) {
      if (less_than(group.length, 2)) {
        continue;
      }
      if (app_replace_goal_hash_ids_grow(tokens, lengths, group)) {
        grew = true;
      }
    }
    if (not(grew)) {
      return ids;
    }
  }
}
