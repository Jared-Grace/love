import { list_adder_single_message } from "./list_adder_single_message.mjs";
import { js_visit_calls_named_nodes } from "./js_visit_calls_named_nodes.mjs";
export function js_call_named_find(ast, unaliased) {
  "The one place a name is called, which is how a selector says where";
  "Naming what was looked for is the whole of the complaint's usefulness: a name called twice and a name called never fail here the same way, and told only that a list was the wrong length a reader cannot tell which happened, nor in whose code";
  function lambda(la) {
    js_visit_calls_named_nodes(ast, unaliased, la);
  }
  let asked = {
    hint: "a selector names one place, so this name was expected to be called exactly once here - would you like to pick a name that is called once, or say which of several places you meant?",
    name: unaliased,
  };
  let only = list_adder_single_message(lambda, asked);
  return only;
}
