import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { g_npc_pool_drawn } from "./g_npc_pool_drawn.mjs";
import { property_get } from "./property_get.mjs";
import { g_npc_nickname } from "./g_npc_nickname.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_letters_is } from "./text_letters_is.mjs";
import { not } from "./not.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function g_npc_nicknames_gate_run() {
  "Prove that every person the pool holds gets a name of their own, and that the name can be filed under.";
  "IT ASKS THE WHOLE POOL rather than a few, because the two ways this breaks both break far from where they are written. The stepping is unique only while the number sixty-one shares no factor with a list's length, so somebody adding one name to the women's list can quietly make two people share a word - and nothing about that edit looks like it touched a person's name. The other way is the pool outgrowing the short list, which arrives by a sermon being written.";
  "A DUPLICATE IS THE FAILURE THAT CANNOT BE SEEN LATER. Two people answering to one name means one arc addressed to that name reaches whichever of them the reader happens to find first, and both look correct. The letters check is the cheaper one and is here for the same reason - a dash in a name throws only at the moment something is filed, which is after the arc was written.";
  "COUNTED AND HANDED BACK, so that passing says how much was asked. A gate that walked no people would pass in silence.";
  let pool = await g_npc_pool_drawn();
  let taken = [];
  let repeated = [];
  let unfilable = [];
  for (let npc of pool) {
    let index = property_get(npc, "index");
    let nickname = g_npc_nickname(index);
    let already = list_includes(taken, nickname);
    if (already) {
      list_add(repeated, nickname);
    }
    let letters = text_letters_is(nickname);
    let broken = not(letters);
    if (broken) {
      list_add(unfilable, nickname);
    }
    list_add(taken, nickname);
  }
  list_empty_is_assert_json(repeated, {
    hint: "two people of the pool are called the same name, so an arc addressed to that name reaches whichever of them is found first; the step of sixty-one must share no factor with the length of either name list, so check what was added to one of them",
  });
  list_empty_is_assert_json(unfilable, {
    hint: text_combine_multiple([
      "a name holds something other than letters, and a person's file is named after them under a path builder that allows letters and digits only; the name lists are cleaned in ",
      fn_name("g_npc_nickname_lists"),
      " and something got past it",
    ]),
  });
  let people = list_size(pool);
  let r = {
    people,
  };
  return r;
}
