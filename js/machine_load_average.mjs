import { loadavg } from "os";
import { list_first } from "./list_first.mjs";
export function machine_load_average() {
  "How much work this machine has had waiting for it over the last minute.";
  "Roughly the number of things wanting a processor at once. Below the number of processors means there was room to spare; well above it means everything was taking turns, and a time measured then was spent waiting as much as working.";
  "It belongs next to any measurement taken here because several of us share this one machine, and nothing a single program can see tells it whether the others were busy. A number measured under load reads exactly like a slow program - which is how a gate that takes five seconds got written down as taking thirty.";
  let averages = loadavg();
  let minute = list_first(averages);
  return minute;
}
