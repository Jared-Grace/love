import { arguments_assert } from "./arguments_assert.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { g_boundary_believer_soul } from "./g_boundary_believer_soul.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_boundary_believer_neighbor(softener) {
  arguments_assert(arguments, 1);
  let r2 = list_random_item(["I'm blessed", "I'm well", "I'm alright"]);
  let r3 = list_random_item(["honestly", "praise God", "thank you"]);
  let r4 = g_boundary_believer_soul(r2, r3, softener);
  let soul = property_get(r4, "soul");
  let heart = property_get(r4, "heart");
  let r20 = list_random_item([
    "try to love everyone",
    "try to treat people right",
  ]);
  let r21 = list_random_item(["I think", "as best I can"]);
  let combined = text_combine_multiple(["I ", r20, ", ", r21, "."]);
  let r22 = list_random_item(["no one", "nobody"]);
  let r23 = list_random_item([
    "have anything against",
    "hold anything against",
  ]);
  let combined10 = text_combine_multiple([
    "There's ",
    r22,
    " I'd say I ",
    r23,
    ".",
  ]);
  let r24 = list_random_item([
    "gave to the collection",
    "helped with the meal",
  ]);
  let r25 = list_random_item(["this month", "last week"]);
  let combined11 = text_combine_multiple(["We ", r24, " ", r25, ".", softener]);
  let neighbor = [combined, combined10, combined11];
  let r = {
    soul,
    heart,
    neighbor,
  };
  return r;
}
