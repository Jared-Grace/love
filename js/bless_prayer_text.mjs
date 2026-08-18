import { bless_people_phrase } from "./bless_people_phrase.mjs";
import { text_combine } from "./text_combine.mjs";
export function bless_prayer_text(count) {
  "The prayer the player reads for the people in front of them - 'God bless that person',";
  "'God bless those two people'.";
  "It is deliberately SHORT, because it is prayed once every few seconds for the whole";
  "game and a long prayer said that often stops being prayed and starts being skipped.";
  "The fuller `prayer_blessing` form belongs to the two prayers said once a session - the";
  "one up front that gives the whole game to real people, and the amen that closes it.";
  let text = text_combine("God bless ", bless_people_phrase(count));
  return text;
}
