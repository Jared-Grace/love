import { subtract } from "./subtract.mjs";
import { list_map } from "./list_map.mjs";
import { path_join } from "./path_join.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { file_move } from "./file_move.mjs";
import { file_parent_exists_ensure } from "./file_parent_exists_ensure.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { song_image_drawn_path } from "./song_image_drawn_path.mjs";
export async function song_image_drawn_files_migrate() {
  "move the pictures drawn under the old one-file-per-couplet name into the numbered folders, each becoming that couplet's first attempt";
  "the pictures already on disk are the only ones that will ever exist for the wordings that made them, since every draw before this overwrote the last. Leaving them under the old name would strand them: nothing looks there any more, so they would be present and invisible, which is worse than absent.";
  "each becomes attempt one rather than the newest attempt, because that is what they are - the earliest surviving picture for that couplet. Anything drawn after this is two, and the order on disk is then the order they were drawn in.";
  let folder2 = folder_repo_love();
  let folder = path_join([folder2, "gitignore", "song_images"]);
  let names = await folder_read_files_exists_ensure(folder);
  function name_is_old(name) {
    let b = text_starts_with(name, "couplet_");
    return b;
  }
  let old = names.filter(name_is_old);
  let moved = [];
  for (let name of old) {
    let difference = subtract(name.length, ".png".length);
    let digits = name.slice("couplet_".length, difference);
    let number = Number(digits);
    let path_from = path_join([folder, name]);
    let path_to = song_image_drawn_path(number, 1);
    await file_parent_exists_ensure(path_to);
    await file_move(path_from, path_to);
    moved.push({
      number,
      path_to,
    });
  }
  let names_after = await folder_read_files_exists_ensure(folder);
  let left = names_after.filter(name_is_old);
  function moved_to_path(one) {
    let r = one.path_to;
    return r;
  }
  let report = {
    moved: list_map(moved, moved_to_path),
    left,
  };
  return report;
}
