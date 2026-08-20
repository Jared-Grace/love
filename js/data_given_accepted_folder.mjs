import { arguments_assert } from "./arguments_assert.mjs";
import { data_given_folder } from "./data_given_folder.mjs";
import { path_join } from "./path_join.mjs";
export function data_given_accepted_folder() {
  "Where a record a person has read and agreed to is kept, in the given half of the data folder.";
  "Its own room rather than a corner of the baselines one, and the two are opposite in the one way that matters. A baseline is a ratchet: a debt queue that only ever shrinks, written by a command that is refused if it would grow, and read every run by a gate that is the whole of the promise. This is a snapshot: replaced whole the moment a person says so, free to grow, and nothing about it only shrinks. Two sweeps find the ratchet family by the word baseline alone, so a snapshot sitting in their room under their word fails both of their rules while making neither of their promises.";
  "The word was already taken off the function that names the file - the argument is written out in full there. What was left was the file itself, still called a baseline and still lying in the baselines room, so anyone reading the folder went on being told the thing the function had already denied. A name is not corrected until the thing it names is moved too.";
  arguments_assert(arguments, 0);
  let given = data_given_folder();
  let v = path_join([given, "accepted"]);
  return v;
}
