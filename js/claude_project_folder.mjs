import { folder_repo_love } from "./folder_repo_love.mjs";
import { claude_project_slug } from "./claude_project_slug.mjs";
import { path_join } from "./path_join.mjs";
import { claude_config_folder } from "./claude_config_folder.mjs";
export function claude_project_folder() {
  "The folder the assistant keeps for this repo: one record per conversation, and the way through to the notes it remembers.";
  "The name of that folder is worked out from where this repo actually sits, so moving the repo carries this along with it. It used to be written out, and the explanation here said it was written out only once - which was not so; two other functions wrote it out as well, and one of those named this very same folder.";
  let config = claude_config_folder();
  let repo = folder_repo_love();
  let slug = claude_project_slug(repo);
  let folder = path_join([config, "projects", slug]);
  return folder;
}
