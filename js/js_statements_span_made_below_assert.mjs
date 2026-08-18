import { js_statements_span_made_below_names } from "./js_statements_span_made_below_names.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export function js_statements_span_made_below_assert(span, tail, f_name_new) {
  "$plain f_name_new";
  "Refuses a run of lines that reads a name only the lines below it bring into being, and lets every other run through";
  "A run may name something that is not there yet, so long as nothing looks at it yet either - which is what a function made in the run and called afterwards does. The cut breaks that patience: the name becomes something the new function is handed, handed over at the call site, which stands above the line that fills it. A read that was waiting becomes a read taken at once, from nothing.";
  "The mirror of the refusal on writing back into a name born above the run, and the pair is one rule. A run of lines may not reach backwards to write, and may not reach forwards to read. Either way it is asking to be somewhere other than where it is, and a cut can only move it to one place.";
  "Refused for every such name rather than only the ones a reading can prove are looked at too early, because when a function made in a run is called is not a thing reading the lines in order can settle - a button, a timer, or a list somebody saved it in all decide it elsewhere. A refusal costs a message and a second choice of ends. Being wrong here costs a set of pieces that can be put in no order at all, which is what was measured.";
  let late = js_statements_span_made_below_names(span, tail);
  list_empty_is_assert_json(late, {
    hint: "this run of lines reads a name that only the lines below it bring into being, so a cut would hand that name over before anything has filled it. Would you like to choose ends that reach down to the line making it, or ends that stop before the part reading it?",
    f_name_new,
  });
}
