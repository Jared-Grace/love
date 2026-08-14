import { js_tokens_parenthesis_group_tokens } from "./js_tokens_parenthesis_group_tokens.mjs";
import { list_map } from "./list_map.mjs";
import { list_size } from "./list_size.mjs";
import { list_sort_number } from "./list_sort_number.mjs";
export function js_tokens_parenthesis_group_sizes(tokens) {
  "How much each ( in a line of tokens has gathered up, one number per bracket pair, put in order so two lines can be asked whether their brackets gather the same amount each.";
  "It answers how much a bracket is FOR rather than which tiles happened to land inside it. A bracket around one tile is a bracket doing nothing - (3 === 5) === false and (3) === 5 === false are built from one set of tiles, and a lesson about brackets must not accept the second - and a bracket around the whole line is the same fault the other way. Both are told apart by how much was gathered, and neither needs the tiles themselves named.";
  "Asking which tiles landed inside was what this used to do, and it was too much to ask. Rearranging the tiles is the whole of what the learner is doing, so an answer that moves them between brackets of the same size has moved nothing about the brackets: (3 !== 2) !== (8 === 6) and (8 !== 6) === (2 !== 3) bracket a comparison on each side either way. Whether the rearranged line still says what the question said is a different question, asked separately and by something that can read.";
  let groups = js_tokens_parenthesis_group_tokens(tokens);
  let sizes = list_map(groups, list_size);
  list_sort_number(sizes);
  return sizes;
}
