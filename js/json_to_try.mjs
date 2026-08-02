import { catch_null } from "./catch_null.mjs";
import { json_to } from "./json_to.mjs";
export function json_to_try(object) {
  "The object written out as JSON text, or nothing at all when it will not fit in one piece of text.";
  "There is exactly one thing that goes wrong here and it is a hard limit rather than a judgement: a record big enough that its JSON passes what a single string may hold throws instead of returning. Everything under that limit is written in one pass and is far cheaper than assembling the same text a piece at a time. So the two ways of writing are not rivals - this one is asked first, and its refusal is what says the other is needed.";
  function lambda_write() {
    let json = json_to(object);
    return json;
  }
  let written = catch_null(lambda_write);
  return written;
}
