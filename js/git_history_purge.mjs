import { arguments_assert } from "./arguments_assert.mjs";
import { git_history_purge_rehearse } from "./git_history_purge_rehearse.mjs";
import { git_history_rewrite_accept } from "./git_history_rewrite_accept.mjs";
export async function git_history_purge(
  folder,
  words_text,
  paths_text,
  bundle_path,
) {
  "$plain folder";
  "$plain words_text";
  "$plain paths_text";
  "$plain bundle_path";
  "Takes named files out of a repository's whole past and named words out of everything that is left - the contents of its files and the messages of its commits alike - and leaves every copy of it standing on the result: the machine, and each address it writes to.";
  "do NOT grant, and nothing calls this. It forces every address it writes to onto a new history, which is the one thing around here that another person's copy cannot simply catch up with. The wording matters as much as the meaning: the refusal check reads one exact phrase, so the only thing that would stop a standing approval being written here is somebody opening the file first.";
  "THIS IS THE ONE TO REACH FOR WHEN A BODY OF WORK IS BEING TAKEN OUT, rather than either of the two it is made of. Dropping the paths leaves every mention of them in the commit messages and in the files that stayed; replacing the words leaves the files themselves, listed in the past under the names the words were in. What somebody means by taking a thing out of the history is both, and asking for both separately is the mistake this exists to stop being possible.";
  "It is two halves and neither is folded into the other. The rehearsing half does the whole rewrite on a copy nobody is using and proves what came out, and is safe to run on its own, as often as you like. The accepting half is shared with both of the narrower neighbours, because past the rehearsal there is nothing about any of them that differs - and the steps it holds are the ones where doing them out of order costs an afternoon.";
  "Which words and which files belong here is not decided here and cannot be. A word short enough to be worth hiding is a word that sits inside innocent names, and only somebody who knows what each was for can say whether what is left behind afterwards is the innocent kind. The rehearsal hands that list back and refuses the faults it can prove.";
  arguments_assert(arguments, 4);
  let rehearsed = await git_history_purge_rehearse(
    folder,
    words_text,
    paths_text,
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
