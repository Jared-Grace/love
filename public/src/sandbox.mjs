import { repo_functions_move_acronym } from "../../../love/public/src/repo_functions_move_acronym.mjs";
export async function sandbox() {
  let v = await repo_functions_move_acronym(
    ["emoji_no", "text_alphabet_includes"],
    "l",
  );
}
