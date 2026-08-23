import { app_shared_name_search_info } from "./app_shared_name_search_info.mjs";
import { property_get } from "./property_get.mjs";
import { firebase_public_app_expected_write } from "./firebase_public_app_expected_write.mjs";
import { app_shared_build } from "./app_shared_build.mjs";
import { firebase_deploy_locked_generic } from "./firebase_deploy_locked_generic.mjs";
import { html_public_from_latest } from "./html_public_from_latest.mjs";
export async function html_update_latest_promote(search) {
  "$plain search";
  "build the app (latest AND dev, together) before promoting the latest bundle to prod, so shipping an app to prod never leaves its local dev copy behind";
  "The copying holds the sending lock, and the building does not. A sending puts out whatever is in the published folder at the moment it walks it, so a copy running loose beside one sends half of this app and half of the last - and neither half is anything anybody judged. The building writes nowhere the sending looks and takes minutes, so holding the lock through it would only make everybody else wait on a compile.";
  "This is the whole reason the sending itself is allowed to ask so little. It asks nothing about whether the code is correct, because a correct build is what generating latest is for; what it does insist on is that nothing is writing the folder underneath it, and that insisting only works if every writer takes the same lock. This was the one that did not.";
  await app_shared_build(search);
  ("The copying is written down as soon as it is finished, and inside the same block. That note is what turns promoting into approving: a sending later reads it and refuses a folder holding anything else. Written outside the block, or later, it would describe a folder somebody else had already begun changing.");
  async function lambda() {
    let copied = await html_public_from_latest(search);
    let info = await app_shared_name_search_info(search);
    let a_name = property_get(info, "a_name");
    await firebase_public_app_expected_write(a_name);
    return copied;
  }
  let r = await firebase_deploy_locked_generic(
    lambda,
    html_update_latest_promote.name,
  );
  return r;
}
