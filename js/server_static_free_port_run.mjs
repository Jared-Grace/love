import { arguments_assert } from "./arguments_assert.mjs";
import { server_static_free_port_run_generic } from "./server_static_free_port_run_generic.mjs";
export async function server_static_free_port_run(lambda) {
  "put a web server of THIS copy of the repo up on a port nobody else is using, hand its address to what was given, and take it down again afterwards - serving the published folder at the root, with nothing in front of it";
  arguments_assert(arguments, 1);
  await server_static_free_port_run_generic(lambda, []);
}
