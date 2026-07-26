import { text_starts_with } from "./text_starts_with.mjs";
import { list_any } from "./list_any.mjs";
import { assert_json } from "./assert_json.mjs";
export function app_code_screens_manifest_path_assert(path) {
  "A manifest belongs either in the committed data folder, where the baseline lives and a diff can find it, or in the scratchpad, where a throwaway run belongs. Anywhere else means the repo root, and a stray manifest there has to be noticed and removed by hand every time.";
  let folders = ["data/", "/tmp/claude-1000/"];
  function inside_is(folder) {
    let b = text_starts_with(path, folder);
    return b;
  }
  let inside = list_any(folders, inside_is);
  assert_json(inside, {
    hint: "write the screen manifest under data/ or in the scratchpad — was a bare file name meant to land in the repo root?",
    path,
    folders,
  });
}
