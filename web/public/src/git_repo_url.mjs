import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function git_repo_url(user, repo) {
  let v = text_combine_multiple([
    "https://github.com/",
    user,
    "/",
    repo,
    ".git",
  ]);
  return v;
}
