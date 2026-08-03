import { machine_load_average } from "./machine_load_average.mjs";
import { property_get } from "./property_get.mjs";
export async function load_average_recent() {
  "How many things this machine has been trying to run at once over the last minute";
  "The recent figure rather than the instant one, because the question being asked of it is whether to start several more processes, and a decision made on an instant reading would start them all in whichever moment happened to look quiet";
  "It counts every process on the machine, not only this program's. That is the point: several of us work in this one folder at the same time, and a run that measures only its own load will happily take a share of a machine that is already full";
  let os = await import("os");
  property_get(os, "loadavg");
  let recent = machine_load_average();
  return recent;
}
