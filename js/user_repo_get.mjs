import { user_data_get } from "./user_data_get.mjs";
import { repo_current_name } from "./repo_current_name.mjs";
import { repo_exists_assert } from "./repo_exists_assert.mjs";
export async function user_repo_get() {
  "The repository the person at this keyboard is currently working in, refusing a name no repository answers to - and where nobody has said, the repository this process is standing in.";
  "Where the answer is kept is a file this repo deliberately never commits, so there are real places with no answer in them at all: a fresh clone, a machine that has never been sat at, and - the one that was actually costing something - the frozen copy the whole-repo run asks its questions of, which holds only what git tracks. In all three the stored answer came back as nothing, nothing is not a repository name, and what a reader saw was a repository being refused by a name that was never a name.";
  "A missing answer and a wrong answer are different things and were being told apart nowhere. A wrong one still refuses, and now refuses while naming a word somebody actually chose. A missing one is answered instead, by the only other thing in the room that knows which repository this is: the folder the process is standing in.";
  "That is a last resort and not a preference. Where a person has said which repository they are working in, that still wins outright, and it has to - a run dispatched from one repository while the work sits in another is exactly the case the stored answer exists for. This only speaks when nothing was said.";
  let property_name = "repo_current";
  let stored = await user_data_get(property_name);
  let repo_name = stored || repo_current_name();
  await repo_exists_assert(repo_name);
  return repo_name;
}
