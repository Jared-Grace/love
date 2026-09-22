import { arguments_assert } from "./arguments_assert.mjs";
import { git_history_paths_texts_replace_rehearse } from "./git_history_paths_texts_replace_rehearse.mjs";
import { git_history_rewrite_accept } from "./git_history_rewrite_accept.mjs";
export async function git_history_paths_texts_replace(
  folder,
  paths_text,
  words_text,
  bundle_path,
) {
  "$plain folder";
  "$plain paths_text";
  "$plain words_text";
  "$plain bundle_path";
  arguments_assert(arguments, 4);
  ("Takes named words out of named files everywhere they have ever been, for real: rehearses the whole thing on a copy first, and only if every proof holds does it move the rewritten past onto this repository and send it.");
  ("do NOT grant. Two separate reasons, either of which is enough. It rewrites a public history and force-sends it, which orphans every commit anybody has ever written down. And the instructions it hands the rewriting tool are a body of code it builds from its own arguments, which is the same shape as every other command here that is kept off the approved list - a standing approval covers every argument a function is ever handed, and these arguments decide what code runs.");
  ("★ THE WORD IS TAKEN OUT OF THE NAMED FILES AND LEFT ALONE EVERYWHERE ELSE, WHICH IS THE WHOLE DIFFERENCE FROM THE OTHER ONE. Use this when a word identifies somebody in the short list it sat alone in and is an ordinary word of the world in the long list beside it. Measured on a real repository, purging one dead note this way left forty-two live notes still holding the word, every one of them correctly - asked for everywhere, the same word would have been taken out of all forty-two in every commit since they were written.");
  ("Nothing is decided here. The rehearsal refuses on anything it cannot prove and the accepting step refuses if the present moved under it, so this is only the two of them named together, in the order that makes the second one safe.");
  let rehearsed = await git_history_paths_texts_replace_rehearse(
    folder,
    paths_text,
    words_text,
  );
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
