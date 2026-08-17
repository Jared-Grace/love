import { arguments_assert } from "./arguments_assert.mjs";
import { text_random_or_empty } from "./text_random_or_empty.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_random_item_or_empty } from "./list_random_item_or_empty.mjs";
export function g_boundary_believer_soul(r2, r3, softener) {
  arguments_assert(arguments, 3);
  let r4 = text_random_or_empty(" God's been good to me.");
  let combined = text_combine_multiple([r2, ", ", r3, ".", r4]);
  let r5 = list_random_item([
    "Oh, I can't complain",
    "I've nothing to complain about",
  ]);
  let r6 = list_random_item_or_empty([
    " The Lord's been good.",
    " Others have it far harder.",
  ]);
  let combined2 = text_combine_multiple([r5, ".", r6]);
  let r7 = list_random_item(["busy", "run off my feet", "up to my eyes"]);
  let r8 = list_random_item([
    "There's always something on at church.",
    "We've the children's meeting Thursday and I said I'd bake.",
  ]);
  let combined3 = text_combine_multiple(["Fine - ", r7, ". ", r8]);
  let r9 = list_random_item(["you", "you, though"]);
  let r10 = text_random_or_empty(" You're the one doing all the visiting.");
  let combined4 = text_combine_multiple(["I'm well. How are ", r9, "?", r10]);
  let heart = [combined, combined2, combined3, combined4];
  let r11 = list_random_item(["Good", "Good, good", "No complaints there"]);
  let r12 = list_random_item(["up at five", "up early", "at it first thing"]);
  let r13 = list_random_item([
    "through the Psalms at the moment",
    "working through the Gospels",
    "a chapter a day, never miss",
  ]);
  let combined5 = text_combine_multiple([
    r11,
    ". ",
    "I'm ",
    r12,
    " most mornings - ",
    r13,
    ".",
  ]);
  let r14 = list_random_item([
    "Well, my standing",
    "My standing",
    "My position",
  ]);
  let r15 = list_random_item([
    "doesn't rest on how I feel about it",
    "isn't decided by my feelings",
  ]);
  let combined6 = text_combine_multiple([r14, " ", r15, ".", softener]);
  let r16 = list_random_item(["Up and down", "The usual", "Same as ever"]);
  let r17 = text_random_or_empty(" You know how it is.");
  let combined7 = text_combine_multiple([r16, ".", r17]);
  let r18 = list_random_item(["Actually - could I ask you", "Could I ask you"]);
  let r19 = list_random_item(["the passage", "what you preached", "a verse"]);
  let combined8 = text_combine_multiple([
    r18,
    " something about ",
    r19,
    " instead?",
  ]);
  let soul = [combined5, combined6, combined7, combined8];
  let r = {
    heart,
    soul,
  };
  return r;
}
