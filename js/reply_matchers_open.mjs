import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
export function reply_matchers_open() {
  arguments_assert(arguments, 0);
  ("The reply rule pieces that match a word nobody chose - a run of letters of any spelling, rather than one of a written-down set.");
  ("★ A PIECE LIKE THIS MAKES A RULE AMBIGUOUS, AND AMBIGUITY IS WHAT THE RULES ARE FOR AVOIDING. A rule is a sequence, and a piece that matches any word matches the next word of every message - so the rule stops being a description of one thing somebody says and becomes a shape that lands on messages it was never aimed at. The narrower piece is always the better piece, even when the wider one would reach more people, because a reply sent to the wrong message is worse than no reply at all.");
  ("It is a list and not one name because the fault is a kind rather than a function. The next one written will be a different word standing open - a number of any size, a name of any spelling - and the gate beside this should catch it by being told about it here, not by being written again.");
  ("Nothing here is allowed to be reached by a live rule. A piece may be written, kept, and read on the proposal bench, because a proposal is an argument that has not been accepted; what it may not do is answer a real message without somebody having said yes to it first.");
  let f_name = fn_name("reply_word_any");
  let names = [f_name];
  return names;
}
