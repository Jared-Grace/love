import { arguments_assert } from "./arguments_assert.mjs";
import { git_call_message } from "./git_call_message.mjs";
import { not_equal } from "./not_equal.mjs";
export async function git_message_word_shorthand_is(word) {
  "$plain word";
  "Whether the first word of a commit message is a shorthand key rather than the name of the command that made the change.";
  "It is decided by asking the door that words every commit this repo makes what it would have written, and comparing. Nothing about what counts as shorthand is repeated here, so this cannot come to disagree with the door about it - a second opinion would only report the two of them differing, which is not a fault anybody can act on.";
  "The hand made word is not shorthand, and it does not have to be excepted here: the door already leaves that one alone, so it comes back unchanged like any full name.";
  arguments_assert(arguments, 1);
  let spelled = await git_call_message(word, []);
  let shorthand = not_equal(spelled, word);
  return shorthand;
}
