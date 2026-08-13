import { global_function_delete } from "./global_function_delete.mjs";
import { app_g_player_walk_state } from "./app_g_player_walk_state.mjs";
import { app_g_player_walk_begin } from "./app_g_player_walk_begin.mjs";
import { app_g_player_walk_end } from "./app_g_player_walk_end.mjs";
import { app_g_player_walking_is } from "./app_g_player_walking_is.mjs";
import { app_g_player_walk_stopped_is } from "./app_g_player_walk_stopped_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
export function app_g_player_walk_case_play(c) {
  "set off and finish the walks one case names, in the order it names them, and write down what could be seen before the first of them and after every one.";
  "the real counters are asked rather than copies of them, because a copy of a state machine is a second thing that can be right while the first is wrong - which is the failure a gate over it exists to catch.";
  "what the counters remember is forgotten first, so a case begins where a fresh game begins and cannot be answered by whatever the case before it left behind.";
  "the numbers walks are recognised by are handed out by the beginning itself and never guessed here, so the case can name its walks in words and this still asks about the ones that really happened.";
  ("asked whether there is anything to forget first, because forgetting refuses a thing that was never remembered - and on the first case there is nothing there, the counters not having been reached for yet");
  let remembered = global_function_exists(app_g_player_walk_state);
  if (remembered) {
    global_function_delete(app_g_player_walk_state);
  }
  let steps = property_get(c, "steps");
  let numbers = {};
  let after = [];
  function observed_add() {
    let stopped = {};
    let names = object_property_names(numbers);
    function lambda(name) {
      let number = property_get(numbers, name);
      let value = app_g_player_walk_stopped_is(number);
      property_set(stopped, name, value);
    }
    each(names, lambda);
    let walking = app_g_player_walking_is();
    list_add(after, {
      walking,
      stopped,
    });
  }
  observed_add();
  function lambda2(step) {
    let action = property_get(step, "action");
    let name = property_get(step, "name");
    let begins = equal(action, "begin");
    if (begins) {
      let value2 = app_g_player_walk_begin();
      property_set(numbers, name, value2);
    } else {
      let walk = property_get(numbers, name);
      app_g_player_walk_end(walk);
    }
    observed_add();
  }
  each(steps, lambda2);
  return after;
}
