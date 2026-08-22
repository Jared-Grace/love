import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { g_npc_pool_drawn } from "./g_npc_pool_drawn.mjs";
import { property_get } from "./property_get.mjs";
import { g_npc_nickname } from "./g_npc_nickname.mjs";
import { equal } from "./equal.mjs";
import { error_json } from "./error_json.mjs";
export async function g_npc_nickname_index(nickname) {
  "$plain nickname";
  "The pool number of the person a name belongs to - the way back from what a person is called to the entry their turn count is written in.";
  "THE NAME IS WHAT A PERSON IS ADDRESSED BY and the number is what the pool is filed by, so something has to join them, and this is the only place that does. Commands take the name because a reader can hold it; everything underneath keeps working in numbers, because that is what the pool's own files are called and rewriting those would put every authored arc's turn count at risk for a spelling.";
  "IT WALKS THE NAMES RATHER THAN UNDOING THE ARITHMETIC. The name is worked out by stepping through a list, so the way back is a piece of modular arithmetic that is correct and unreadable, and it would answer for a name belonging to nobody by handing back a number anyway. Walking the names is a couple of hundred comparisons once, and it can only answer with somebody who is really there.";
  "A NAME NOBODY ANSWERS TO THROWS, which is the whole reason this is not a lookup that falls back to something. A misspelled name that quietly became a number would address a different person than the one meant, and both the writing and the report of it would look correct.";
  let nicknames = await g_npc_nicknames();
  let index = list_index_of(nicknames, nickname);
  let found = not_equal(index, -1);
  if (found) {
    return index;
  }
  error_json({
    nickname,
    hint: text_combine_multiple([
      "nobody in the pool is called this; the names are the Bible names the game draws from, spelled as they are written there, and one is handed out per person - ask ",
      fn_name("g_npc_nickname"),
      " of a number to see what a given person is called",
    ]),
  });
}
