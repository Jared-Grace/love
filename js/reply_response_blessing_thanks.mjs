import { emoji_pray } from "./emoji_pray.mjs";
import { emoji_smile } from "./emoji_smile.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function reply_response_blessing_thanks() {
  "The thanks sent back to somebody who has blessed us, whatever words they blessed us with.";
  let pray = emoji_pray();
  let smile = emoji_smile();
  let thanks = text_combine_multiple([
    pray,
    " Thank you for the blessing! ",
    smile,
  ]);
  return thanks;
}
