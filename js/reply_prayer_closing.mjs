import { prayer_amen } from "./prayer_amen.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { reply_prayer_will_done } from "./reply_prayer_will_done.mjs";
import { reply_prayer_lead_provider } from "./reply_prayer_lead_provider.mjs";
import { list_difference } from "./list_difference.mjs";
import { prayer_start } from "./prayer_start.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function reply_prayer_closing(lines) {
  arguments_assert(arguments, 1);
  ("The one prayer that closes a reply, made from the lines noted while the message was read. It opens on a line of its own and the lines run on together after it.");
  ("★ THE ORDER IS NOT THE ORDER THEY WERE NOTED. God's will comes first and being led to somebody who can give comes last, with whatever was asked for between them, however the message happened to be ordered. Each thing asked for notes those two as well, so the order they were noted in would put being led to somebody in the middle of the second message that asks for two things.");
  let first = reply_prayer_will_done();
  let last = reply_prayer_lead_provider();
  let between = list_difference(lines, [first, last]);
  let ordered = [];
  if (lines.includes(first)) {
    ordered.push(first);
  }
  ordered.push(...between);
  if (lines.includes(last)) {
    ordered.push(last);
  }
  let joined = ordered.join("\n");
  let v = prayer_start();
  let amen = prayer_amen();
  let pray = emoji_pray();
  let prayer = text_combine_multiple([
    v,
    "\n",
    pray,
    " ",
    joined,
    "\n",
    amen,
    " ",
    pray,
  ]);
  return prayer;
}
