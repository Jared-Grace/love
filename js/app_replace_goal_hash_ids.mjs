import { fn_name } from "./fn_name.mjs";
import { app_replace_goal_hash_side_lengths } from "./app_replace_goal_hash_side_lengths.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { app_replace_goal_hash_tokens } from "./app_replace_goal_hash_tokens.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
export function app_replace_goal_hash_ids(goals) {
  ("The words a link names each goal of one rule set by, in the order of the goals: the first letter of each symbol of where it starts, a wave, and the first letter of each symbol of where it has to end - the goal from 1 = 1 to 1 + 1 = 1 1 is 1e1~1p1e11, and function average ( x y ) shortens to fa(xy). A long run of symbols both sides begin or end with is written as its first two, an underscore, and its last - the loop header a for goal repeats on both sides is f(_) - as ",
    fn_name("app_replace_goal_hash_side_lengths"),
    " says.");
  ("Where two goals of the set would come out alike, the symbols that tell them apart get one more letter each, again and again until the words differ - mae [ mae ] = mue and mae [ mae ] = mae become m(m)emu and m(m)ema. Only symbols in the same place that differ grow, so the rest stays as short as it was.");
  ("The whole set is worked out at once because that is the only thing a word has to be told apart from: a link names the set first and looks only there. The price is that a goal's word can change when a goal alike to it is added to the set, and a link naming the old word then lands on the set's list of goals, which is a place somebody can go on from.");
  ("What the goal says rather than where it sits, because goals are put in between others when a set gains a harder case, and a link naming a place would then open a different exercise without a word. Tried before this and turned down: a code of seven letters made from the whole goal, which says nothing to a person; the writing escaped for the address, which fills a link with percent signs; and every symbol spelled out in full, which ran to eighty-four letters for a loop.");
  ("Two goals whose symbols are spelled out in full and still come out alike stay alike, and the check on these words is what says so.");
  function tokens_get(goal) {
    let text = property_get(goal, "start");
    let start = app_replace_goal_hash_tokens(text);
    let text2 = property_get(goal, "end");
    let end = app_replace_goal_hash_tokens(text2);
    let r = [...start, "~", ...end];
    return r;
  }
  let tokens = list_map(goals, tokens_get);
  function lengths_get(goal) {
    let text3 = property_get(goal, "start");
    let start = app_replace_goal_hash_tokens(text3);
    let text4 = property_get(goal, "end");
    let end = app_replace_goal_hash_tokens(text4);
    let r2 = [
      ...app_replace_goal_hash_side_lengths(start, end),
      1,
      ...app_replace_goal_hash_side_lengths(end, start),
    ];
    return r2;
  }
  let lengths = list_map(goals, lengths_get);
  function id_get(tokens_one, index) {
    let id = "";
    let hidden = false;
    function each_token(token, place) {
      let shown = lengths[index][place];
      if (equal(shown, 0)) {
        if (not(hidden)) {
          id += "_";
        }
        hidden = true;
        return;
      }
      id += token.slice(0, shown);
      hidden = false;
    }
    tokens_one.forEach(each_token);
    return id;
  }
  while (true) {
    let ids = tokens.map(id_get);
    let grew = false;
    let groups = new Map();
    function lambda4(id, index) {
      groups.set(id, [...(groups.get(id) ?? []), index]);
    }
    ids.forEach(lambda4);
    for (let group of groups.values()) {
      if (less_than(group.length, 2)) {
        continue;
      }
      function lambda5(index) {
        let r6 = tokens[index].length;
        return r6;
      }
      let places = Math.max(...group.map(lambda5));
      for (let place = 0; less_than(place, places); place++) {
        function lambda6(index) {
          let r7 = tokens[index][place] ?? "";
          return r7;
        }
        let texts = group.map(lambda6);
        let differ = greater_than(new Set(texts).size, 1);
        if (not(differ)) {
          continue;
        }
        for (let index of group) {
          let token = tokens[index][place];
          if (
            not_equal(token, undefined) &&
            less_than(lengths[index][place], token.length)
          ) {
            lengths[index][place] += 1;
            grew = true;
          }
        }
      }
    }
    if (not(grew)) {
      return ids;
    }
  }
}
