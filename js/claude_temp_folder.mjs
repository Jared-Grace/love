import { path_join } from "./path_join.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { claude_project_slug } from "./claude_project_slug.mjs";
export function claude_temp_folder() {
  "The folder the assistant uses for working files it does not intend to keep, for this repo.";
  "The end of it is the same name the conversations are filed under, so it is worked out rather than written out, and moving the repo carries it along.";
  "The number in the middle is written out, and that is on purpose. It is the same as the number this machine gives the human, which makes it very tempting to work out - but the other folders sitting beside it are named after a person, or after nothing in particular, so the sameness is a likeness rather than a rule. Working it out from a likeness and being wrong would not complain: it would name a folder that is not there, and writing to a folder that is not there is a line that never appears rather than a fault anybody sees.";
  let folder2 = folder_repo_love();
  let slug = claude_project_slug(folder2);
  let folder = path_join(["/tmp", "claude-1000", slug]);
  return folder;
}
