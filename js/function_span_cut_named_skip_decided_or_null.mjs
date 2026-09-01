import { arguments_assert } from "./arguments_assert.mjs";
export function function_span_cut_named_skip_decided_or_null(
  address_from,
  address_to,
  f_name_new,
  opening_is,
  name_taken_is,
) {
  "$plain address_from";
  "$plain address_to";
  "$plain f_name_new";
  arguments_assert(arguments, 5);
  ("The reason a run of lines should not be cut out under a name somebody has chosen, or nothing where no reason stands in the way - worked out from the words alone, with the two answers only the repo can give handed in already decided.");
  ("Split out of the function that does the cutting on 2026-09-01, for the same reason as its twin beside it: the deciding was addressed by a live function name and reached the repo twice while making up its mind, so no run of it could be written down anywhere, and both of its reasons had gone unexercised since the day they were written. Handed the two answers as plain trues and falses, the deciding is a question about five words, and a question about five words can be written down.");
  ("There are only two reasons here, and that is the point of the function this came out of. Its twin refuses a run for six things about the word the run ends on, and every one of those ends by asking somebody to choose a name instead - so a name arriving from outside answers all six at once. What is left is the one reason that was never about the name, and the one thing a chosen name can still be wrong about.");
  ("The order matters and is the first thing a run written down can check. Where the run starts is asked before the name is, so a run that opens on the first line of work is turned down for where it starts even when the name it was given is also spoken for. That is the right way round: the caller can choose another name freely, but no name rescues a run that would carry the function's own count of its arguments and everything said about it away with it.");
  ("Each reason names the words it is about and leaves the other one empty, which is how a reader of the answer can tell which reason was reached without reading the sentence. A reason about where the run starts carries both ends of the run and no name; a reason about the name carries the name and the word the run ends on, and no start.");
  ("The sentences are written here rather than handed in, because they are what a person reads and they are meant to be improved. Nothing that checks this function looks at them.");
  if (opening_is) {
    let preamble = {
      about: "start",
      address_from,
      address_to,
      why: "the run starts on the first line of work in the body, which is where the function keeps the things that are about itself rather than about the work - how many arguments it was called with, and the prose saying what it is for. A cut from there carries all of that away with it, so the function left behind stands with no count of its own arguments and nothing said about it, and the piece cut out is explained as though it were the whole. Would you like to start the run one line lower?",
      f_name_new: null,
    };
    return preamble;
  }
  if (name_taken_is) {
    let spoken_for = {
      about: "name",
      address_to,
      f_name_new,
      why: "a function already answers to the name chosen for this run, and whether the two are the same work is a question for somebody reading both. Would you like to choose another name, or to call the one that is already there?",
      address_from: null,
    };
    return spoken_for;
  }
  return null;
}
