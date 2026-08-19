import { js_hash_object_names_written } from "./js_hash_object_names_written.mjs";
import { js_hash_object_names_handled } from "./js_hash_object_names_handled.mjs";
import { js_hash_object_names_declared } from "./js_hash_object_names_declared.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_visit_type } from "./js_visit_type.mjs";

export function js_hash_object_names_pair(ast) {
  "The names this file gives to the object a page's address is read into, said as {own, outgoing} - the addresses that are this page's own, and the ones being built to hand to another page.";
  "One walk and two answers, because the two are told apart by nothing a later reading could recover. An address built for another tab starts life as an empty object and becomes an address only at the line that turns it into a link; separated afterwards, the separating would have to guess.";
  "Which of the two a reading wants depends on what it is asking. A word this page will one day read back out of its own address is this page's to answer for. A word written into a link to somewhere else is the other page's word, spelled here on the way out.";
  "Both matter to the question of freezing, and that reading takes the pair together: a word published in a link somebody saves is lost the same way whichever page the link opens.";
  arguments_assert(arguments, 1);
  let own = [];
  function declared(v) {
    let r = js_hash_object_names_declared(v, own);
    return r;
  }
  js_visit_type(ast, "VariableDeclarator", declared);
  let outgoing = [];
  let handed = [];
  function handled(v2) {
    let r2 = js_hash_object_names_handled(v2, outgoing, handed);
    return r2;
  }
  js_visit_type(ast, "CallExpression", handled);
  function written(v3) {
    let r3 = js_hash_object_names_written(v3, handed, own);
    return r3;
  }
  js_visit_type(ast, "FunctionDeclaration", written);
  let pair = {
    own,
    outgoing,
  };
  return pair;
}
