import { list_random_item } from "./list_random_item.mjs";
export function g_goodbye() {
  "a randomized parting line the player SAYS to end a conversation (their own warm, person-neutral words) — so ending reads as one of the things you can choose to say, not a mechanical 'end' action";
  let line = list_random_item([
    "God bless you. Goodbye!",
    "God bless you. I have to go for now.",
    "Peace be with you. Goodbye for now.",
    "May the Lord keep you. I have to go.",
    "Take care, and God bless you.",
    "I have to go for now — God bless you!",
    "Goodbye for now, and God bless you.",
  ]);
  return line;
}
