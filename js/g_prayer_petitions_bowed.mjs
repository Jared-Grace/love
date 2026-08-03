import { list_random_item } from "./list_random_item.mjs";
import { g_prayer_petition } from "./g_prayer_petition.mjs";
import { emoji_bow } from "./emoji_bow.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_prayer_petitions_bowed(petitions) {
  "one of a list of petitions, made into a whole prayer and shown as a line the player SAYS: a bowing person before it and praying hands after it. this is the shape every prayer the player taps is written in, so a prayer of this kind is now a LIST of petitions and nothing else.";
  "the two that share it asked for different things - one for the next conversation to be blessed, one for who to go to next - and were identical everywhere except the list. that made the shared half two copies, and a third prayer of this kind would have been a third; the closing, the address, the asking word and the two emojis all had to be spelled again to write one.";
  let petition = list_random_item(petitions);
  let body = g_prayer_petition(petition);
  let bow = emoji_bow();
  let pray = emoji_pray();
  let line = text_combine_multiple([bow, " ", body, " ", pray]);
  return line;
}
