import { log } from "./log.mjs";
import { each_async } from "./each_async.mjs";
import { range_from } from "./range_from.mjs";
import { marker } from "./marker.mjs";
export async function each_range_from_async(from, to, lambda) {
  marker("1");
  let list = range_from(from, to);
  log({
    list,
  });
  await each_async(list, lambda);
}
