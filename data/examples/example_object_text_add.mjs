import { js_object_property_text_add } from "../../js/js_object_property_text_add.mjs";
import { js_find_declaration_named } from "../../js/js_find_declaration_named.mjs";
import { js_object_text_add } from "../../js/js_object_text_add.mjs";
export const example = {
  fn: js_object_text_add.name,
  select: js_find_declaration_named.name,
  select_args: ["notes"],
  args: ["example_second", "what the second one is there to show"],
  kind: "transform",
  title: "Add a labelled sentence to a record",
  note: [
    "The shape a note or a label takes: a key and a written sentence. Its ",
    "neighbour ",
    { fn: js_object_property_text_add.name },
    " puts a word into a list held inside a record; this puts a sentence directly ",
    "against a key.",
    " ",
    "Adding one entry is the only shape that cannot lose the others. The whole-",
    "statement verb aimed at a record of forty entries replaces all forty with ",
    "whatever was typed, and that silently cost forty-five of them once.",
    " ",
    "The sentence must carry no comma and no full stop. The splitter that hands a ",
    "joined list of arguments over reads either mark as the end of this argument ",
    "and the start of another, so a sentence containing one arrives torn into ",
    "extra arguments and the verb refuses on count.",
  ],
  before: `export function f() {
  let notes = {
    example_first: "what the first one is there to show",
  };
  return notes;
}`,
  after: `export function f() {
  let notes = {
    example_first: "what the first one is there to show",
    example_second: "what the second one is there to show",
  };
  return notes;
}`,
};
