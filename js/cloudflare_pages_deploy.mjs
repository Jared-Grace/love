import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_public_expected_unchanged_assert } from "./firebase_public_expected_unchanged_assert.mjs";
import { apps_frozen_names } from "./apps_frozen_names.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { firebase_prod_app_unchanged_assert } from "./firebase_prod_app_unchanged_assert.mjs";
import { cloudflare_pages_firebase_hosting } from "./cloudflare_pages_firebase_hosting.mjs";
import { folder_public_absolute } from "./folder_public_absolute.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { folder_copy_fresh } from "./folder_copy_fresh.mjs";
import { cloudflare_pages_headers_text } from "./cloudflare_pages_headers_text.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { path_join } from "./path_join.mjs";
import { cloudflare_pages_redirects_text } from "./cloudflare_pages_redirects_text.mjs";
import { cloudflare_pages_project_name } from "./cloudflare_pages_project_name.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { firebase_deploy_deadline_ms } from "./firebase_deploy_deadline_ms.mjs";
import { npx_run } from "./npx_run.mjs";
import { retry_standard } from "./retry_standard.mjs";
import { firebase_deploy_locked_generic } from "./firebase_deploy_locked_generic.mjs";
export async function cloudflare_pages_deploy() {
  arguments_assert(arguments, 0);
  ("Sends the folder that goes live to Cloudflare Pages, behind the same two proofs and the same lock as ",
    fn_name("firebase_deploy"),
    ", so this second door cannot let out anything the first would hold back.");
  ("Cloudflare reads its serving rules from two files inside what it is sent, and the folder that goes live must hold only approved apps, so the folder is copied aside and the rules are written into the copy.");
  async function lambda() {
    await firebase_public_expected_unchanged_assert();
    let app_names = apps_frozen_names();
    await list_map_unordered_async(
      app_names,
      firebase_prod_app_unchanged_assert,
    );
    let hosting = await cloudflare_pages_firebase_hosting();
    let source = folder_public_absolute();
    let stage = folder_gitignore_join("cloudflare_pages");
    await folder_copy_fresh(source, stage, ["dev"]);
    let headers = cloudflare_pages_headers_text(hosting);
    let file_path = path_join([stage, "_headers"]);
    await file_overwrite(file_path, headers);
    let redirects = cloudflare_pages_redirects_text(hosting);
    let file_path2 = path_join([stage, "_redirects"]);
    await file_overwrite(file_path2, redirects);
    let project = cloudflare_pages_project_name();
    let words = [
      "wrangler",
      "pages",
      "deploy",
      stage,
      "--project-name",
      project,
      "--branch",
      "main",
      "--commit-dirty=true",
    ];
    let repo = folder_repo_love();
    async function send() {
      let ms = firebase_deploy_deadline_ms();
      let out = await npx_run(
        words,
        {
          cwd: repo,
        },
        ms,
      );
      return out;
    }
    let printed = await retry_standard(send);
    let r = {
      stdout: printed,
    };
    return r;
  }
  let published = await firebase_deploy_locked_generic(
    lambda,
    cloudflare_pages_deploy.name,
  );
  return published;
}
