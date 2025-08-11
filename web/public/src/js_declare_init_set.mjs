import {object_property_set} from './object_property_set.mjs';
import {list_single} from './list_single.mjs';
import {js_node_type_is} from './js_node_type_is.mjs';
import {assert} from './assert.mjs';
export function js_declare_init_set(next, init) {
  assert(js_node_type_is(next, 'VariableDeclaration'));
  let {declarations} = next;
  let declaration = list_single(declarations);
  object_property_set(declaration, 'init', init);
}
