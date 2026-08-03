import { js_identifier_rename_referenced } from "./js_identifier_rename_referenced.mjs";
export function js_identifier_rename(ast, name_from, name_to) {
  "Give a new name to a value, everywhere this file reads that value.";
  "Every word that reads the value moves, and nothing else does. A word that merely names a property or a key is not a value this file is free to call something else - it belongs to whatever object is being asked - so it stays where it is. Renaming those used to happen here too, which turned Math.abs into Math.absolute and console.log into console.anything the moment either name moved, with nothing said about it.";
  js_identifier_rename_referenced(ast, name_from, name_to);
}
