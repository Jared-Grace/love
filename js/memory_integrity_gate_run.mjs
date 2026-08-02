import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { json_to } from "./json_to.mjs";
import { memory_orphans } from "./memory_orphans.mjs";
import { memory_dangling_pointers } from "./memory_dangling_pointers.mjs";
import { memory_dangling_links } from "./memory_dangling_links.mjs";
import { greater_than } from "./greater_than.mjs";
export async function memory_integrity_gate_run() {
  "Gate: the memory index and the files it indexes must agree. Three ways they can drift, and each is a leak in a different direction - an entry no line reaches, a line reaching no entry, and a double-bracket link whose target is spelled under the wrong type prefix. All three read clean today, which is what makes them safe to hold to.";
  "Held here rather than left to whoever remembers to type them, because the index is the only part of memory a session loads by itself. A hook pointing nowhere costs a Claude a wasted read and then a wrong belief about what it knows, and nothing else in the build would ever say so.";
  "Clearing a failure is one edit either way: restore the entry, or drop the line that promises it.";
  let orphans = await memory_orphans();
  let dangling_pointers = await memory_dangling_pointers();
  let dangling_links = await memory_dangling_links();
  console.log("orphan entries (no line reaches them): " + orphans.join(", "));
  console.log(
    "dangling pointers (no entry behind them): " + dangling_pointers.join(", "),
  );
  console.log("mis-prefixed links: " + json_to(dangling_links));
  let all = list_concat_multiple([orphans, dangling_pointers, dangling_links]);
  if (greater_than(all.length, 0)) {
    throw new Error("memory integrity gate: " + all.length + " to reconcile");
  }
  let r = {
    orphans: orphans.length,
    dangling_pointers: dangling_pointers.length,
    dangling_links: dangling_links.length,
  };
  return r;
}
