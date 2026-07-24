import { text_symbols_unique_multiple } from "./text_symbols_unique_multiple.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
export async function text_symbols_unique_adder(lambda$la) {
  async function lambda(la) {
    await lambda$la(la);
  }
  let list = await list_adder_async(lambda);
  let unique = text_symbols_unique_multiple(list);
  return unique;
}
