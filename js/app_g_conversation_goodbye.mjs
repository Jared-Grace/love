import { arguments_assert } from "./arguments_assert.mjs";
import { g_conversation_key } from "./g_conversation_key.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { g_conversation_generate } from "./g_conversation_generate.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { list_copy } from "./list_copy.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { positive_is } from "./positive_is.mjs";
import { multiply_add } from "./multiply_add.mjs";
import { add } from "./add.mjs";
import { app_g_conversation_close_now } from "./app_g_conversation_close_now.mjs";
import { app_g_conversation_advance } from "./app_g_conversation_advance.mjs";
export function app_g_conversation_goodbye(
  npc,
  pronouns,
  div_map,
  overlay_close,
) {
  arguments_assert(arguments, 4);
  let property_name2 = g_conversation_key();
  let has = property_exists(npc, property_name2);
  if (not(has)) {
    let value = g_conversation_generate(pronouns);
    let property_name3 = g_conversation_key();
    property_set(npc, property_name3, value);
  }
  let property_name4 = g_conversation_key();
  let conversation = property_get(npc, property_name4);
  let turns = property_get(conversation, "turns");
  let converts = property_get(conversation, "converts");
  let remaining = list_copy(turns);
  let prayed = {
    done: false,
  };
  let greeted = {
    done: false,
  };
  let pending = {
    text: null,
  };
  function present(t) {
    let neq3 = not_equal(t, null);
    return neq3;
  }
  let prayer_texts_all = list_map_property(turns, "prayer_text");
  let some_prayers = list_filter(prayer_texts_all, present);
  let prayer_parts = 4;
  let some_count = list_size(some_prayers);
  if (positive_is(some_count)) {
    prayer_parts = some_count;
  }
  let right = list_size(turns);
  let left = multiply_add(2, right, prayer_parts);
  let steps_total = add(left, 2);
  let steps = {
    done: 0,
  };
  async function close_now() {
    let r = await app_g_conversation_close_now(
      converts,
      prayed,
      npc,
      div_map,
      overlay_close,
    );
    return r;
  }
  async function goodbye() {
    "the final parting after the prayer is itself an advancing step — it ticks the day to its close (dusk) before snapping shut, so 'saying goodbye' spends the last of the slice rather than closing at whatever time the prayer left.";
    await app_g_conversation_advance(steps, steps_total);
    await close_now();
  }
  return {
    turns,
    converts,
    remaining,
    prayed,
    greeted,
    pending,
    some_prayers,
    steps_total,
    steps,
    close_now,
    goodbye,
  };
}
