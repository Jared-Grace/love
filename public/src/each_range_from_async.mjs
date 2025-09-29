import { each_async } from "../../../love/public/src/each_async.mjs";
import { range_from } from "../../../love/public/src/range_from.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function each_range_from_async(from, to, lambda) {
  marker("1");
  let list = range_from(from, to);
  await each_async(list, lambda);
}
