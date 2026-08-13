import { js_hash_read_is } from "./js_hash_read_is.mjs";
import { js_equality_function_names } from "./js_equality_function_names.mjs";
import { hash_read_names } from "./hash_read_names.mjs";
import { js_bare_call_names } from "./js_bare_call_names.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { property_in_list } from "./property_in_list.mjs";
import { property_list_empty_is } from "./property_list_empty_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
export function js_hash_key_compared_nodes(ast) {
  "Every place this file names a field of the address of a page by asking whether something out of that address is that field, as {called, key} - the sameness question doing the asking, and whatever stands where the name of the field goes.";
  "The third way in, and the one the other reading cannot see. A page may take its address as text and pull it apart itself, and then the field is never handed to anything - it is compared against, one field at a time. The other reading looks for the field standing in an argument of a call that reaches an address, so it walks straight past this and reports the page as reading no fields at all.";
  "It costs nothing to be wrong here in the safe direction and everything to be wrong in the other. A comparison judged a field when it was not adds a word somebody has to answer for; a field never seen is a word a reader can get wrong forever with nothing watching.";
  "Only files that touch the address are looked at, and the address readers themselves are never counted as fields, so the very call that fetched the address is not read back as a name inside it.";
  let touches = js_hash_read_is(ast);
  if (not(touches)) {
    let r = [];
    return r;
  }
  let questions = js_equality_function_names();
  let readers = hash_read_names();
  let lifted = js_bare_call_names(ast);
  let sites = [];
  function getter_name(arg) {
    let called = js_node_type_is(arg, "CallExpression");
    if (called) {
      let callee = property_get(arg, "callee");
      let plain = js_node_type_is(callee, "Identifier");
      if (not(plain)) {
        return null;
      }
      let bare = property_list_empty_is(arg, "arguments");
      if (not(bare)) {
        return null;
      }
      let name = property_get(callee, "name");
      return name;
    }
    let named = js_node_type_is(arg, "Identifier");
    if (not(named)) {
      return null;
    }
    let word = property_get(arg, "name");
    let stood = property_or_null(lifted, word);
    return stood;
  }
  function lambda(v) {
    let node = property_get(v, "node");
    let callee2 = property_get(node, "callee");
    let plain2 = js_node_type_is(callee2, "Identifier");
    if (not(plain2)) {
      return;
    }
    let asks = property_in_list(callee2, "name", questions);
    if (not(asks)) {
      return;
    }
    let asked = property_get(callee2, "name");
    let args = property_get(node, "arguments");
    for (let arg of args) {
      let name2 = getter_name(arg);
      if (null_is(name2)) {
        continue;
      }
      let reader = list_includes(readers, name2);
      if (reader) {
        continue;
      }
      let site = {
        called: asked,
        key: arg,
      };
      list_add(sites, site);
    }
  }
  js_visit_type(ast, "CallExpression", lambda);
  return sites;
}
