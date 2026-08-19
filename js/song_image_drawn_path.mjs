import { path_join } from "./path_join.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
export function song_image_drawn_path(number) {
  "where the drawn picture for one couplet is saved";
  "it sits in the ignored folder rather than in the repo's own history on purpose. A repo keeps every copy of every picture forever, and this repo is already carrying more weight than it should; a picture is moved somewhere lasting once a cut has actually used it, and the ones that were only tried cost nothing.";
  let folder = folder_repo_love();
  let name = "couplet_" + String(number) + ".png";
  let path = path_join([folder, "gitignore", "song_images", name]);
  return path;
}
