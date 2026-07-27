import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
export async function cpu_count() {
  "How many processors this machine has to work with";
  let os = await import("os");
  let cpus = property_get(os, "cpus");
  let list = cpus();
  let count = list_size(list);
  return count;
}
