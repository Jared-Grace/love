import { list_random_item } from "./list_random_item.mjs";
import { bless_prayer_emojis } from "./bless_prayer_emojis.mjs";
export function bless_prayer_emoji() {
  "One of the pictures a prayer may be set between, drawn fresh.";
  "Drawn at the moment the panel opens rather than kept on the person, because it belongs";
  "to this prayer and not to them: praying for the same person twice should not look like";
  "the same act twice, and a picture filed under somebody would make it exactly that.";
  "Nothing stops the same one coming up twice running. Left out, the draw would be";
  "remembering what it did last time, which is a rule the reader would eventually notice";
  "and start reading for - and two the same in a row costs nothing, because the prayer";
  "underneath was always going to be word for word what it was before.";
  let emojis = bless_prayer_emojis();
  let emoji = list_random_item(emojis);
  return emoji;
}
