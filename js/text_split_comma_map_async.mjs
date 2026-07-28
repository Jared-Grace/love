import { list_map_async } from "./list_map_async.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
export async function text_split_comma_map_async(searches_comma, fn) {
  "Runs something over each word of a comma-joined list and keeps what each one";
  "answered, in the order they were asked. The twin next door visits instead of";
  "mapping - it runs the same passes and drops every answer - so a command built";
  "on it can only ever be silent, whatever the thing it calls hands back.";
  "One at a time, like the twin. Answering is the change wanted here; running";
  "them all at once is a different change, and folding two into one commit hides";
  "whichever of them turns out to be wrong.";
  let searches = text_split_comma(searches_comma);
  let answers = await list_map_async(searches, fn);
  return answers;
}
