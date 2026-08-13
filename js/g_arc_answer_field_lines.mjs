import { list_join_empty } from "./list_join_empty.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function g_arc_answer_field_lines(fields) {
  "One level's fields written out the way the arc prompt lists them - two spaces, the name, a dash, and what it means.";
  "It takes the group rather than fetching one, so the prompt says which level it is introducing and this only writes the lines. Three headings each want their own sentence and none of them belongs to a renderer.";
  "The two-space indent is the prompt's own convention for a listed thing and is checked by its style gate, so it is spelled once here rather than at each of the three call sites.";
  let lines = [];
  function field_add(field) {
    let name = property_get(field, "name");
    let description = property_get(field, "description");
    let said = list_join_space([name, "-", description]);
    let line = list_join_empty(["  ", said]);
    list_add(lines, line);
  }
  each(fields, field_add);
  return lines;
}
