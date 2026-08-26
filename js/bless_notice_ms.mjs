import { arguments_assert } from "./arguments_assert.mjs";
import { bless_text_read_ms } from "./bless_text_read_ms.mjs";
import { add } from "./add.mjs";
export function bless_notice_ms(line) {
  arguments_assert(arguments, 1);
  ("How long a line put up over the street stays there.");
  ("It is the time the words take to read plus a second, and the extra second is the whole");
  ("difference between this and a prayer. A prayer arrives on a panel the player is already");
  ("looking at, so the reading starts at once; a notice arrives over a street the player is");
  ("watching, and the first moment of it is spent noticing that anything appeared at all.");
  ("Reading speed itself is asked for rather than guessed again, so a line that grows a");
  ("clause is given the room to be read and no caller has to remember to say so.");
  let reading = bless_text_read_ms(line);
  let ms = add(reading, 1000);
  return ms;
}
