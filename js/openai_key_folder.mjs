import { path_join } from "./path_join.mjs";
import { folder_user_path } from "./folder_user_path.mjs";
export function openai_key_folder() {
  "The folder the OpenAI key is kept in, inside the human's own storage rather than in any repo, so that nothing holding it can be committed.";
  let p2 = folder_user_path();
  let p = path_join([p2, "ChristGPT"]);
  return p;
}
