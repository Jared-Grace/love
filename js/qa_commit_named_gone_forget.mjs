import { arguments_assert } from "./arguments_assert.mjs";
import { repos_commits_names_all } from "./repos_commits_names_all.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { qa_commit_named_forget } from "./qa_commit_named_forget.mjs";
export async function qa_commit_named_gone_forget() {
  "Forgets every remembered judgement filed under a commit no repository here can reach any more, so that the record stops reading as though it held answers nobody is able to ask for.";
  "THIS HISTORY IS REWRITTEN ON PURPOSE AND A REWRITE RENAMES EVERY COMMIT IN IT, so the record fills up with judgements of commits that are gone - twice in three weeks, and nobody noticed either for a day or more. Measured 2026-09-05 it held 1646 names of which 70 were still reachable, so ninety-five in every hundred were answers to a question that can no longer be put.";
  "NOTHING IS BROKEN BY THEM AND THAT IS THE WHOLE DIFFICULTY. A name nobody can produce is simply never looked up, so a dead entry costs no wrong answer and raises no gate - it only makes the file read as holding sixteen hundred judgements when it holds seventy, and every count taken off it wrong. A fault that cannot fail is one that has to be gone looking for.";
  "IT ASKS EVERY REPOSITORY HERE AND NOT ONLY THIS ONE, though on the day that was written every name in the record belonged to this one and the two questions kept exactly the same seventy. It is not there to repair a fault that was found; it is there because the narrow question fails silently if the record is ever filed under a neighbour's commit, which is what a run of the gates actually looks at. A reader asked about a folder it cannot see answers not there, and not there is the same word it uses for destroyed.";
  "COUNTING THE KEYS IS THE ONE MEASUREMENT TO TAKE PROPERLY, and reading them out of the file as text is not it. Every judgement carries commit names inside it as well, so a count that scoops forty-character words out of the whole file counts those too and comes back high - which reads exactly like entries that a prune has since lost. That is how this function was accused of destroying sixteen hundred judgements it had never touched. Ask the record for its keys.";
  "It finds its own set rather than being handed one, because which names died is exactly the thing nobody remembers: it was settled by a rewrite that ran while everybody was doing something else.";
  "FORGETTING IS THE SAFE DIRECTION HERE, and that is not a hope about this case. A commit forgotten reads as never judged, and never judged already means a deployment waits rather than goes, so the worst this can cost is a judging done a second time and it cannot let anything out.";
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
