import { arguments_assert } from "./arguments_assert.mjs";
import { webpack_build_dev } from "./webpack_build_dev.mjs";
import { html_update_dev_webpack } from "./html_update_dev_webpack.mjs";
import { app_shared_name_search } from "./app_shared_name_search.mjs";
import { app_shared_dev_stamp_write } from "./app_shared_dev_stamp_write.mjs";
export async function app_shared_dev_build(search) {
  arguments_assert(arguments, 1);
  ("$plain search");
  ("Builds one app for dev, writes the page that loads it, and records what it was built out of - the whole of making a change visible in the browser.");
  ("THE RECORD IS WRITTEN HERE AND NOWHERE ELSE, AND LAST. It is a claim that the bundle beside it stands for the sources as they read at that moment, and the only moment that claim is certainly true is just after the build. Written anywhere else it would promise something nobody looked at, and a bundle running last week's code would then have a record saying it does not.");
  await webpack_build_dev(search);
  await html_update_dev_webpack(search);
  let a_name = await app_shared_name_search(search);
  await app_shared_dev_stamp_write(a_name);
}
