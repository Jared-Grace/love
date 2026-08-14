import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
import { wolff_dictionary_parsed } from "./wolff_dictionary_parsed.mjs";
import { wolff_entry_nodes } from "./wolff_entry_nodes.mjs";
import { wolff_entry_read } from "./wolff_entry_read.mjs";
export async function wolff_entries() {
  "The whole of Wolff's dictionary as plain readable things, one for each entry the book prints, in its own order.";
  "This is where the page stops being a page. Everything above it is markup and a parser, and everything below it can be written without knowing that the book was ever HTML at all - which is what lets the reading be kept on a disk, counted, searched, and handed to somebody writing an explanation.";
  let parsed = await wolff_dictionary_parsed();
  let d = property_get(parsed, "d");
  let nodes = await wolff_entry_nodes();
  function node_read(node) {
    let entry = wolff_entry_read(d, node);
    return entry;
  }
  let r = list_map(nodes, node_read);
  return r;
}
