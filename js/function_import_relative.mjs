import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_get } from "./property_get.mjs";
export async function function_import_relative(f_name) {
  "$plain f_name";
  "One function, fetched at the moment it is wanted rather than when the file asking for it loads - found by its own name beside this one, without asking anything where it lives.";
  "THE POINT IS WHAT IS NOT LOADED. A plain import is followed before the file holding it runs a line, so a branch that almost never runs still costs its whole tree every time - and in a bundled page that tree is not merely loaded, it is CARRIED, whether the branch is ever walked or not. Fetched this way the tree is not in the page at all.";
  "The other importer here looks a function's file up, which needs a disk and a map of the repo - so it is the one to ask on a build machine and the one thing that cannot be reached from a page. This asks for nothing: a file here is named after the function it hands out, so the name IS the address.";
  "The bundler cannot see through an address that is built rather than written, which is exactly why the tree leaves the page - and is also why it says so. That complaint is the mechanism working, not a fault to be quietened.";
  arguments_assert(arguments, 1);
  let path = text_combine_multiple(["./", f_name, ".mjs"]);
  let module = await import(path);
  let fn = property_get(module, f_name);
  return fn;
}
