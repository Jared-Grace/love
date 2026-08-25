import { list_get_wrap } from "./list_get_wrap.mjs";
import { g_npc_nickname_lists } from "./g_npc_nickname_lists.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { list_get } from "./list_get.mjs";
import { list_size_less_1 } from "./list_size_less_1.mjs";
import { list_add } from "./list_add.mjs";
import { less_than_equal_assert_json } from "./less_than_equal_assert_json.mjs";
import { multiply } from "./multiply.mjs";
import { add_1 } from "./add_1.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function g_npc_cast_dealt_nicknames(dealt) {
  "What every person of an already-dealt cast is called, in pool order - one name each, worked out from the deal and nothing else.";
  "IT TAKES THE DEAL RATHER THAN ASKING FOR ONE, and that is the whole reason it stands apart from the door above it. Dealing the cast counts every written sermon, so a screen that wants both what somebody is called and who they are was paying for that count twice - once here and once for itself - and the second one bought an answer it already had. Handed the deal, the naming is arithmetic over a list.";
  "THE NAMING ITSELF IS UNCHANGED AND IS DESCRIBED WHERE THE DOOR IS. What was decided about which list a name comes from, why the whole pool is named at once, and why the step is sixty-one, all belong to the naming rather than to how the deal arrived.";
  arguments_assert(arguments, 1);
  let lists = g_npc_nickname_lists();
  let women = list_get(lists, 0);
  let men = list_get(lists, 1);
  let taken = [0, 0];
  let nicknames = [];
  for (let profile of dealt) {
    let gender = property_get(profile, "gender");
    let woman = equal(gender, "female");
    let side = 1;
    let names = men;
    if (woman) {
      side = 0;
      names = women;
    }
    let within = list_get(taken, side);
    let last = list_size_less_1(names);
    less_than_equal_assert_json(within, last, {
      gender,
      hint: "the cast holds more people of that gender than there are names to hand out one each, so two people would be called the same word; the repair is a longer list of names, not a smaller cast",
    });
    taken[side] = add_1(within);
    let stepped = multiply(within, 61);
    let nickname = list_get_wrap(names, stepped);
    list_add(nicknames, nickname);
  }
  return nicknames;
}
