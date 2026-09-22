import { arguments_assert } from "./arguments_assert.mjs";
import { git_history_texts_replace_rehearse } from "./git_history_texts_replace_rehearse.mjs";
import { git_history_rewrite_accept } from "./git_history_rewrite_accept.mjs";
export async function git_history_texts_replace(
  folder,
  words_text,
  bundle_path,
) {
  "$plain folder";
  "$plain words_text";
  "$plain bundle_path";
  "Takes named words out of everything a repository has ever held - the contents of its files and the messages of its commits alike - and leaves every copy of it standing on the result: the machine, and each address it writes to.";
  "do NOT grant, and nothing calls this. It forces every address it writes to onto a new history, which is the one thing around here that another person's copy cannot simply catch up with. The wording matters as much as the meaning: the refusal check reads one exact phrase, so the only thing that would stop a standing approval being written here is somebody opening the file first.";
  "It is two halves and neither is folded into the other. The rehearsing half does the whole rewrite on a copy nobody is using and proves that nothing but the files holding the words came out different, and is safe to run on its own, as often as you like. The accepting half is shared with the path-dropping neighbour, because past the rehearsal there is nothing about the two that differs - and the steps it holds are the ones where doing them out of order costs an afternoon.";
  "Dropping the path is the neighbour to reach for wherever it would do, and it is the stronger of the two: it takes the whole file out of the past rather than a word out of it, so nothing is left to have been missed. This is for the case that one cannot reach - a word in a file that has to go on existing - and for the messages, which no path drop touches.";
  "Which words belong here is not decided here and cannot be. A word short enough to be worth hiding is a word that sits inside innocent names, and only somebody who knows what each was for can say whether what is left behind afterwards is the innocent kind. The rehearsal hands that list back and refuses the faults it can prove.";
  arguments_assert(arguments, 3);
  let rehearsed = await git_history_texts_replace_rehearse(folder, words_text);
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
