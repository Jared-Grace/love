import { text_frozen } from "./text_frozen.mjs";
export function g_npc_id_key() {
  "the field name a person's id is stored under - written once here so the reading and the writing cannot spell it differently.";
  "frozen because whole game objects are dumped to json, so this word goes into save files nobody here can reach - a rename would make every saved person a stranger with no id at all.";
  let v = text_frozen("id");
  return v;
}
