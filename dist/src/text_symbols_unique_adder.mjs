import { text_symbols_unique } from "../../../love/public/src/text_symbols_unique.mjs";
import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
export async function text_symbols_unique_adder(lambda$la) {
  async function lambda3(la) {
    await lambda$la(la);
  }
  let list = await list_adder_async(lambda3);
  let joined = list_join_empty(list);
  let unique = text_symbols_unique(joined);
  return unique;
}
