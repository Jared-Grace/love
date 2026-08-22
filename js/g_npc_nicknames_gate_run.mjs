import { list_get_property } from "./list_get_property.mjs";
import { g_npc_nicknames } from "./g_npc_nicknames.mjs";
import { g_npc_cast_dealt } from "./g_npc_cast_dealt.mjs";
import { g_npc_nickname_lists } from "./g_npc_nickname_lists.mjs";
import { list_get } from "./list_get.mjs";
import { range } from "./range.mjs";
import { equal } from "./equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_letters_is } from "./text_letters_is.mjs";
import { not } from "./not.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function g_npc_nicknames_gate_run() {
  "Prove that every person the pool holds gets a name of their own, that the name can be filed under, and that the name agrees with the gender the deck already dealt them.";
  "IT ASKS THE WHOLE POOL rather than a few, because the two ways this breaks both break far from where they are written. The stepping is unique only while the number sixty-one shares no factor with a list's length, so somebody adding one name to the women's list can quietly make two people share a word - and nothing about that edit looks like it touched a person's name. The other way is the pool outgrowing the short list, which arrives by a sermon being written.";
  "A DUPLICATE IS THE FAILURE THAT CANNOT BE SEEN LATER. Two people answering to one name means one arc addressed to that name reaches whichever of them the reader happens to find first, and both look correct. The letters check is the cheaper one and is here for the same reason - a dash in a name throws only at the moment something is filed, which is after the arc was written.";
  "THE NAME MUST AGREE WITH THE DEAL, and that check is here because its absence already cost an arc. The deck settles a person's gender and the prompt hands it over as a fact the writer must not change; the naming picked a list of its own, disagreeing for about half the pool, and nothing anywhere went red - it was found by a human reading a prompt whose settled facts said woman under a man's name. Two things deciding one fact is the shape, so a gate holds them to each other.";
  "COUNTED AND HANDED BACK, so that passing says how much was asked. A gate that walked no people would pass in silence.";
  let nicknames = await g_npc_nicknames();
  let dealt = await g_npc_cast_dealt();
  let lists = g_npc_nickname_lists();
  let women = list_get(lists, 0);
  let taken = [];
  let repeated = [];
  let unfilable = [];
  let disagreeing = [];
  let people = list_size(nicknames);
  for (let index of range(people)) {
    let nickname = list_get(nicknames, index);
    let already = list_includes(taken, nickname);
    if (already) {
      list_add(repeated, nickname);
    }
    let letters = text_letters_is(nickname);
    let broken = not(letters);
    if (broken) {
      list_add(unfilable, nickname);
    }
    let gender = list_get_property(dealt, index, "gender");
    let named_woman = list_includes(women, nickname);
    let dealt_woman = equal(gender, "female");
    let agrees = equal(named_woman, dealt_woman);
    if (not(agrees)) {
      list_add(disagreeing, nickname);
    }
    list_add(taken, nickname);
  }
  list_empty_is_assert_json(repeated, {
    hint: "two people of the pool are called the same name, so an arc addressed to that name reaches whichever of them is found first; the step of sixty-one must share no factor with the length of either name list, so check what was added to one of them",
  });
  let f_name = fn_name("g_npc_nickname_lists");
  list_empty_is_assert_json(unfilable, {
    hint: text_combine_multiple([
      "a name holds something other than letters, and a person's file is named after them under a path builder that allows letters and digits only; the name lists are cleaned in ",
      f_name,
      " and something got past it",
    ]),
  });
  list_empty_is_assert_json(disagreeing, {
    hint: "a person is called by a name from the list for the other gender than the one the deck dealt them, so an arc written under that name would contradict the settled facts the same prompt hands over",
  });
  let r = {
    people,
  };
  return r;
}
