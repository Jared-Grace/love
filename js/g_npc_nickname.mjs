import { g_npc_nicknames } from "./g_npc_nicknames.mjs";
import { list_get } from "./list_get.mjs";
export async function g_npc_nickname(index) {
  "The name one person of the pool is called by, given their number.";
  "IT IS THE ONE-PERSON DOOR onto the naming, and the naming itself is done for the whole pool at once because a name depends on who came before it. So this asks for all of them and takes the one it was sent for, which is honest about the cost rather than hiding it behind a name that looks cheap.";
  "A NUMBER PAST THE END THROWS by the reading itself, which is what should happen - a person who is not in the pool has no name, and handing back nothing would let a caller file an arc under an empty word.";
  let nicknames = await g_npc_nicknames();
  let nickname = list_get(nicknames, index);
  return nickname;
}
