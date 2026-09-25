import { arguments_assert } from "./arguments_assert.mjs";
import { git_history_paths_texts_blobs_kept_replace_rehearse } from "./git_history_paths_texts_blobs_kept_replace_rehearse.mjs";
import { git_history_rehearse_quietly } from "./git_history_rehearse_quietly.mjs";
import { git_history_rewrite_accept } from "./git_history_rewrite_accept.mjs";
export async function git_history_paths_texts_blobs_kept_replace(
  folder,
  paths_text,
  words_text,
  blobs_text,
  bundle_path,
) {
  "$plain folder";
  "$plain paths_text";
  "$plain words_text";
  "$plain blobs_text";
  "$plain bundle_path";
  arguments_assert(arguments, 5);
  ("Takes named words out of named files everywhere they have ever been except in the versions of those files named to be left alone, for real: rehearses the whole thing on a copy first, and only if every proof holds does it move the rewritten past onto this repository and send it.");
  ("do NOT grant. Two separate reasons, either of which is enough. It rewrites a public history and force-sends it, which orphans every commit anybody has ever written down. And the instructions it hands the rewriting tool are a body of code it builds from its own arguments, which is the same shape as every other command here that is kept off the approved list - a standing approval covers every argument a function is ever handed, and these arguments decide what code runs.");
  ("★ THE WORD IS TAKEN OUT OF THE NAMED FILES AND LEFT ALONE EVERYWHERE ELSE, WHICH IS THE WHOLE DIFFERENCE FROM THE OTHER ONE. Use this when a word identifies somebody in the short list it sat alone in and is an ordinary word of the world in the long list beside it. Measured on a real repository, purging one dead note this way left forty-two live notes still holding the word, every one of them correctly - asked for everywhere, the same word would have been taken out of all forty-two in every commit since they were written.");
  ("★ THE VERSIONS TO LEAVE ALONE ARE SPELLED OUT, AND THAT IS WHAT MAKES THIS USABLE WHERE THE SAME FILE HELD BOTH. A path can have carried a short list that identified somebody at one moment and a long vocabulary of the world at another, and a replacement scoped to a path reaches every version of it or none. Naming the versions that are innocent is the only cut that fits, and it is a judgment a reader makes once and writes down rather than one this command guesses at each time it runs.");
  ("Naming no versions to keep is spelled as an empty word, and means every version holding a word loses it. That is the ordinary case and it is written rather than left out, because a missing answer and the answer none look the same and only one of them is safe.");
  ("Nothing is decided here. The rehearsal refuses on anything it cannot prove and the accepting step refuses if the present moved under it, so this is only the two of them named together, in the order that makes the second one safe.");
  async function rehearse() {
    let r = await git_history_paths_texts_blobs_kept_replace_rehearse(
      folder,
      paths_text,
      words_text,
      blobs_text,
    );
    return r;
  }
  let rehearsed = await git_history_rehearse_quietly(rehearse);
  let accepted = await git_history_rewrite_accept(
    folder,
    rehearsed,
    bundle_path,
  );
  let r = {
    rehearsed,
    accepted,
  };
  return r;
}
