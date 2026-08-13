import { command_verb_shape } from "./command_verb_shape.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { not } from "./not.mjs";
export function command_verbs_all(command) {
  "every verb a command line runs, one per piece of a chain, in the order they are written";
  "a chain is approved only if all of it is, so the piece that costs the human the interruption is whichever piece has no rule - and that is almost never the first one. changing directory into the repo and then doing something is how nearly every command in this repo is written, so reading only the first verb files the whole bill under a verb that was approved all along and hides the one that was not.";
  "splitting on the separators alone, without minding quotes, because a separator inside quotation marks makes an extra piece whose verb no rule names, and an unrecognised extra verb is the safe direction for a report: it shows up as itself rather than swallowing a real one.";
  let pieces = command.split(/[;|]|&&|\|\|/);
  let verbs = [];
  for (let piece of pieces) {
    let verb = command_verb_shape(piece);
    let empty = text_empty_is(verb);
    if (not(empty)) {
      list_add_if_not_includes(verbs, verb);
    }
  }
  return verbs;
}
