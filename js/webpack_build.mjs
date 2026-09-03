import { folder_web_latest } from "./folder_web_latest.mjs";
import { webpack_build_generic } from "./webpack_build_generic.mjs";
export async function webpack_build(search) {
  "Rebuild the client bundles for the latest stage, the one students read from. It is the plain twin of the generic build: the generic one is handed whichever config folder the caller names, and this one asks for the latest folder itself, so there is no argument that could point a build somewhere else. That is also why this is the one with a standing approval and the generic one is not.";
  let words_after = [];
  let config_folder = folder_web_latest();
  let result = await webpack_build_generic(search, config_folder, words_after);
  return result;
}
