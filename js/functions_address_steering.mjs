import { functions_names } from "./functions_names.mjs";
import { function_ast } from "./function_ast.mjs";
import { function_address_record } from "./function_address_record.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { function_address_record_read } from "./function_address_record_read.mjs";
export async function functions_address_steering() {
  "every function an argument of which can choose the site an address goes to, each with the positions of the arguments that can";
  "the question is the beginning of the address, not any part of it: an argument filling in a part after a fixed site can only ever reach that site, and most commands that fetch anything are that";
  "an argument handed to url_opened_unasked_assert first is not counted, because that check refuses every site not already on the list";
  let f_names = await functions_names();
  async function read(f_name) {
    let ast = await function_ast(f_name);
    return function_address_record(f_name, ast);
  }
  let read_all = await list_map_unordered_async(f_names, read);
  let records = read_all.filter((record) => record !== null);
  let steering = new Map([
    ["http_generic", new Set([0])],
    ["http_generic_node", new Set([0])],
    ["http_browser_bytes", new Set([3])],
  ]);
  let starts = new Map();
  let grew = true;
  while (grew) {
    grew = false;
    for (let record of records) {
      if (function_address_record_read(record, steering, starts)) {
        grew = true;
      }
    }
  }
  return steering;
}
