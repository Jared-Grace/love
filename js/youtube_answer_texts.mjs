import { greater_than } from "./greater_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function youtube_answer_texts(answer) {
  "Every piece of writing youtube put in one of its answers for a person to read, each gathered back into the one sentence it is shown as.";
  "Youtube writes a phrase in two ways and means the same thing by both: sometimes as one plain string, and sometimes cut into pieces so that one of them can be coloured or linked - a count arrives as twenty-five and then as a space and the word videos. Read as it is stored, the second kind is never a phrase at all, and a reader looking for one finds nothing and cannot say why. So the pieces are put back together here, once, and everything above this reads sentences.";
  "The whole answer is searched rather than a path followed, for the same reason the entries are: youtube moves where it keeps a thing between one of its own releases and the next, and a path written today answers empty after that move without anything saying so.";
  arguments_assert(arguments, 1);
  let texts = [];
  let waiting = [answer];
  while (greater_than(waiting.length, 0)) {
    let node = waiting.pop();
    let is_object = not_equal(node, null) && equal(typeof node, "object");
    if (not(is_object)) {
      continue;
    }
    if (equal(typeof node.simpleText, "string")) {
      texts.push(node.simpleText);
    }
    if (equal(typeof node.content, "string")) {
      texts.push(node.content);
    }
    if (Array.isArray(node.runs)) {
      let pieces = [];
      for (let run of node.runs) {
        if (run && equal(typeof run.text, "string")) {
          pieces.push(run.text);
        }
      }
      let v = pieces.join("");
      texts.push(v);
    }
    for (let value of Object.values(node)) {
      waiting.push(value);
    }
  }
  return texts;
}
