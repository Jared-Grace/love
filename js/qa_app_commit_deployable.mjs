import { git_commits_back_to } from "./git_commits_back_to.mjs";
import { git_head_commit } from "./git_head_commit.mjs";
import { qa_app_commit_gate_run_at } from "./qa_app_commit_gate_run_at.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_last } from "./list_last.mjs";
export async function qa_app_commit_deployable(search, commit_floor) {
  "The newest commit this app can be shipped from, going no further back than the one named. Read-only - it answers which commit, and ships nothing.";
  "Two things are true at once and this is where they meet. A commit older than the newest is fine to ship, because ready-for-deploy is a property of the code and not of its age. A commit older than the one carrying this app's own work is not fine at all, because then the thing being shipped is missing the reason for shipping it. So the walk goes backwards for as long as the first stays true and stops dead where the second would break.";
  "The oldest one to ship is named by the caller and never guessed. Which commit carries this app's work is known to whoever did the work and to nobody else here, and a guess at it would be wrong in the one direction that matters - quietly shipping a build without the fix it was built for.";
  "Answering with nothing is a real answer and the useful one. It says that no commit back to the floor is sound for this app, which is the case where the break really does belong to whoever is asking, and the gates that said so are named alongside it.";
  "Every commit walked past is reported with what blocked it, so the cost of the walk and the reason for it are both visible. Whether each answer was already known is reported too, because a known one costs about a second and an unknown one costs a run of every gate.";
  let folder = folder_current_absolute();
  let head = await git_head_commit();
  let commits = await git_commits_back_to(folder, commit_floor);
  let walked = [];
  let chosen = null;
  for (let commit of commits) {
    let at = await qa_app_commit_gate_run_at(search, commit);
    let deployable = property_get(at, "deployable");
    let blocking = property_get(at, "blocking");
    let remembered = property_get(at, "remembered");
    list_add(walked, {
      commit,
      deployable,
      remembered,
      blocking,
    });
    if (deployable) {
      chosen = commit;
      break;
    }
  }
  let stopped = chosen ? "found" : "reached the floor";
  let r = {
    app: search,
    head,
    commit_floor: list_last(commits),
    chosen,
    stopped,
    walked,
  };
  return r;
}
