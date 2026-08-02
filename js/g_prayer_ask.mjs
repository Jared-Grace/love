import { fn_name } from "./fn_name.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function g_prayer_ask() {
  ("the word that turns a petition into an ASKING — please, would You, I ask You to — one of four, drawn fresh each time so two prayers in a row never open the same way. it sits between the address ",
    fn_name("g_prayer"),
    " puts first and the thing being asked for, which is why it is a word rather than a sentence: whatever follows has to read straight on from it in the plain infinitive. every prayer in the game asks for something, so the four were spelled out in each prayer that needed them and a fifth way of asking meant editing every one of them; here it is one list, and adding to it widens every prayer at once");
  let ask = list_random_item([
    "please ",
    "I ask You to ",
    "would You ",
    "I pray You would ",
  ]);
  return ask;
}
