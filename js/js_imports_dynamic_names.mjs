import { arguments_assert } from "./arguments_assert.mjs";
import { js_import_expression_source_nodes } from "./js_import_expression_source_nodes.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { text_suffix_without } from "./text_suffix_without.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
export function js_imports_dynamic_names(ast) {
  "The names of every function in this repo that a file fetches while running rather than at the top, read straight off its own writing.";
  "THE READER BESIDE THIS ONE CANNOT SEE THESE AT ALL. The one that answers for the word from walks only the four kinds of writing a file may open with, and a fetch-while-running import is none of them - it sits down inside a body like any other call. So a file that reaches half of an app that way reads, to that reader, as though the half were not there.";
  "A SOURCE THAT IS NOT A PLAIN PIECE OF WRITING IS PASSED OVER RATHER THAN GUESSED AT. An address built out of pieces names no one file, and a builder handed one sets the whole folder aside instead; there is nothing here to answer with, and guessing would name a file that may not exist.";
  "A name is the file's own without the leading dot-slash and without the ending, which is the same spelling every other reader of this repo uses for a function.";
  arguments_assert(arguments, 1);
  let nodes = js_import_expression_source_nodes(ast);
  function literal_is(node) {
    let plain = js_node_type_is(node, "Literal");
    return plain;
  }
  let literals = list_filter(nodes, literal_is);
  function value_of(node) {
    let value = property_get(node, "value");
    return value;
  }
  let sources = list_map(literals, value_of);
  let prefix = "./";
  let suffix = ".mjs";
  function inside_is(source) {
    let near = text_starts_with(source, prefix);
    let ends = text_ends_with(source, suffix);
    let both = near && ends;
    return both;
  }
  let inside = list_filter(sources, inside_is);
  function name_of(source) {
    let unprefixed = text_prefix_without(source, prefix);
    let name = text_suffix_without(unprefixed, suffix);
    return name;
  }
  let names = list_map_unique(inside, name_of);
  return names;
}
