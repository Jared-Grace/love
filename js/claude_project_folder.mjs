import { folder_home_repo } from "./folder_home_repo.mjs";
import { claude_project_slug } from "./claude_project_slug.mjs";
import { path_join } from "./path_join.mjs";
import { claude_config_folder } from "./claude_config_folder.mjs";
export function claude_project_folder() {
  "The folder the assistant keeps for this repo: one record per conversation, and the way through to the notes it remembers.";
  "The name of that folder is worked out from where this repo belongs on the machine, so moving the repo carries this along with it. It used to be written out, and the explanation here said it was written out only once - which was not so; two other functions wrote it out as well, and one of those named this very same folder.";
  "Where it belongs, deliberately, and not where the code doing the asking happens to sit. The gates run inside a frozen copy of the tree in memory, and that copy asking where its own code sits names a folder the assistant has never kept anything under - so two gates that read the notes and the settings failed there and only there, every time the whole gate was run, while both passed when asked on their own. The conversations and the notes belong to the checkout the human works in; which copy of the code is asking about them does not change the answer.";
  let config = claude_config_folder();
  let repo = folder_home_repo("love");
  let slug = claude_project_slug(repo);
  let folder = path_join([config, "projects", slug]);
  return folder;
}
