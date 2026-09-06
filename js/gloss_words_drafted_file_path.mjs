import { json_extension } from "./json_extension.mjs";
import { gloss_write_folder } from "./gloss_write_folder.mjs";
import { path_join } from "./path_join.mjs";
export function gloss_words_drafted_file_path(fn) {
  "Where a batch of newly written word explanations waits to be spread over the chapters that hold them: one file for the whole store, keyed by the word and nothing else.";
  "★ IT IS KEYED BY WORD BECAUSE THAT IS THE ONLY PART A PERSON AUTHORS. The handover file beside it is keyed by chapter and word together, and the chapters in it are not a decision anybody made - they are the answer to where does this word occur, which the store already knows and a person typing them out will get wrong the moment another chapter is written. So the two files hold the same sentences at different stages: this one is what was written, that one is what was written joined to where it goes.";
  "It also exists because a sentence cannot be given on a command line. The words are ordinary but the explanations carry commas and full stops, which is exactly what the argument splitter takes apart, so a batch of twenty explanations has nowhere to be but a file - and once it is a file the command that reads it needs no arguments at all and can be granted.";
  "It is emptied by nothing. Spreading a batch leaves it standing, so a person can read back what they wrote and run the spread again after fixing a sentence, and running it twice puts the same sentences in the same places.";
  let extension = json_extension();
  let name = "gloss_words_drafted" + extension;
  let folder = gloss_write_folder(fn);
  let path = path_join([folder, name]);
  return path;
}
