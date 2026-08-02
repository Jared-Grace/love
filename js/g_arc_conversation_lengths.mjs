import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
import { random_bell_low_middle_high } from "./random_bell_low_middle_high.mjs";
import { list_add } from "./list_add.mjs";
export function g_arc_conversation_lengths(turns, next) {
  "Cuts one npc's arc into the conversations it will actually be played in - so the arc says how many turns that person is worth, and this says how they arrive.";
  "The generator is RECEIVED rather than made here, because where the randomness comes from is the caller's business and it differs. The arc lengths themselves are authored once per chapter and seeded on the chapter code, so every playthrough sees the same cast. How that cast's turns fall into conversations is per-game, so it is seeded on the save and two players meet the same person differently.";
  "A leftover too small to be a conversation is absorbed into the one before it rather than left standing. A four-turn conversation is the exact thing the floor exists to prevent - most of it spent walking over and praying - while a conversation that runs a little long is only long.";
  let settings = g_generation_settings();
  let low = settings.conversation_turns_low;
  let middle = settings.conversation_turns_mean;
  let high = settings.conversation_turns_high;
  let lengths = [];
  let remaining = turns;
  while (greater_than(remaining, 0)) {
    let drawn = random_bell_low_middle_high(next, low, middle, high);
    let take = Math.min(drawn, remaining);
    let leftover = subtract(remaining, take);
    let stub = less_than(leftover, low);
    let taken = stub ? remaining : take;
    list_add(lengths, taken);
    remaining = subtract(remaining, taken);
  }
  return lengths;
}
