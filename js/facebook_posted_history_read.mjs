import { json_from } from "./json_from.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { facebook_posted_history_path } from "./facebook_posted_history_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read } from "./file_read.mjs";
export async function facebook_posted_history_read() {
  arguments_assert(arguments, 0);
  ("Answers every line of the history of facebook posts, oldest written first, each read back from its JSON; an absent history is an empty list.");
  let path = facebook_posted_history_path();
  let b = await file_exists(path);
  if (not(b)) {
    let r = [];
    return r;
  }
  let text = await file_read(path);
  function lambda(line) {
    let left = line.trim();
    let neq = not_equal(left, "");
    return neq;
  }
  let lines = text.split("\n").filter(lambda);
  function lambda2(line) {
    let parsed = json_from(line);
    return parsed;
  }
  let r2 = lines.map(lambda2);
  return r2;
}
