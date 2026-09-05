import { arguments_assert } from "./arguments_assert.mjs";
import { repos_commits_names_all } from "./repos_commits_names_all.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { qa_commit_named_forget } from "./qa_commit_named_forget.mjs";
export async function qa_commit_named_gone_forget() {
  "Forgets every remembered judgement filed under a commit no repository here can reach any more, so that the record stops reading as though it held answers nobody is able to ask for.";
  "THIS HISTORY IS REWRITTEN ON PURPOSE AND A REWRITE RENAMES EVERY COMMIT IN IT, so the record fills up with judgements of commits that are gone - twice in three weeks, and nobody noticed either for a day or more.";
  "NOTHING IS BROKEN BY THEM AND THAT IS THE WHOLE DIFFICULTY. A name nobody can produce is simply never looked up, so a dead entry costs no wrong answer and raises no gate - it only makes the file read as holding seventeen hundred judgements when it holds far fewer, and every count taken off it wrong. A fault that cannot fail is one that has to be gone looking for.";
  "IT ASKS EVERY REPOSITORY HERE AND NOT ONLY THIS ONE, because a run of the gates does not see one repository and so the name a judgement is filed under need not belong to this one. Written first against this folder alone it deleted 1650 of 1720 judgements in a single run, and the ones belonging to a neighbour were destroyed for no reason beyond which folder the question happened to be put in. That is the shape to be afraid of here: a narrowed reader answers no, no reads exactly like gone, and the deletion is silent in both directions.";
  "It finds its own set rather than being handed one, because which names died is exactly the thing nobody remembers: it was settled by a rewrite that ran while everybody was doing something else.";
  "FORGETTING IS THE SAFE DIRECTION HERE, and that is not a hope about this case. A commit forgotten reads as never judged, and never judged already means a deployment waits rather than goes, so the worst this can cost is a judging done a second time and it cannot let anything out. Safe is not the same as free, though, and the first writing of this spent 1650 judgements to prove it.";
  "It cannot instead put them right. A judgement of a commit that is gone can never be looked up again and there is nothing it could be migrated onto, so keeping it against some later reading is keeping it against nothing.";
  arguments_assert(arguments, 0);
  let names = await repos_commits_names_all();
  let live = {};
  for (let name of names) {
    live[name] = true;
  }
  function gone_lambda(entry, commit) {
    "The judgement itself is never looked at. Every other reason for disbelieving one of these is a question about the entry; this is the one that is a question about the name it is filed under, and the entry cannot answer it because the entry does not know what it is about.";
    let here = property_get_or_null(live, commit);
    let missing = null_is(here);
    return missing;
  }
  let r = await qa_commit_named_forget(gone_lambda);
  return r;
}
