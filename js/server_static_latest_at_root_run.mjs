import { arguments_assert } from "./arguments_assert.mjs";
import { folder_web_latest_absolute } from "./folder_web_latest_absolute.mjs";
import { server_static_free_port_run_generic } from "./server_static_free_port_run_generic.mjs";
export async function server_static_latest_at_root_run(lambda) {
  "put a web server up on a spare port with the latest build served at the top of the site, ahead of the published folder, hand its address to what was given, and take it down again afterwards - so the build waiting to go out can be opened at the address the public opens, before it is put there";
  arguments_assert(arguments, 1);
  let folder = folder_web_latest_absolute();
  await server_static_free_port_run_generic(lambda, [folder]);
}
