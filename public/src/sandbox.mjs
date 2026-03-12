import { repo_new } from "../../../love/public/src/repo_new.mjs";
export async function sandbox() {
  let repo_name = "portfolio_qa";
  let joined = await repo_new(repo_name);
  return joined;
}
