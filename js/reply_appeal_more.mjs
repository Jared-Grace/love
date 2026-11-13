import { arguments_assert } from "./arguments_assert.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_choice } from "./reply_choice.mjs";
export function reply_appeal_more() {
  arguments_assert(arguments, 0);
  ("One more line told in an appeal for help that asks nothing of God by itself: how bad things are, or to keep them in mind.");
  ("★ IT NEVER STANDS ALONE. Told on its own, how hot it is or that somebody cannot work is not an appeal, so it only counts beside one of the needs the appeal is about.");
  let cannot_work = reply_sequence([
    "children's",
    "and",
    "people",
    "even",
    "they",
    "not",
    "able",
    "to",
    "do",
    "work",
  ]);
  let temperature = reply_sequence([
    "here",
    "is",
    "temperature",
    "is",
    "55",
    "c",
    "or",
    "some",
    "times",
    "more",
  ]);
  let remember = reply_sequence(["keep", "remembering", "this", "children's"]);
  let more = reply_choice([cannot_work, temperature, remember]);
  return more;
}
