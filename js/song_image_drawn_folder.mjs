import { path_join } from "./path_join.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
export function song_image_drawn_folder(number) {
  "the folder holding every picture ever drawn for one couplet, one folder per couplet, the attempts numbered inside it from one";
  "a couplet has many pictures rather than one, because the wording for a symbol is arrived at by drawing it and looking at what came back. Saving each attempt over the last threw that away: the six-horned lamb replaced the lamb with a cross-staff, and nothing was left to compare it against but a memory of it.";
  "it sits in the ignored folder rather than in the repo's own history on purpose. A repo keeps every copy of every picture forever, and this repo is already carrying more weight than it should; a picture is moved somewhere lasting once a cut has actually used it, and the ones that were only tried cost nothing.";
  let folder = folder_repo_love();
  let name = String(number);
  let path = path_join([folder, "gitignore", "song_images", name]);
  return path;
}
