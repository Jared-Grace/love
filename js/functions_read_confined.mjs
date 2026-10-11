import { fn_name } from "./fn_name.mjs";
export function functions_read_confined() {
  "The functions that reach the machine only to look: whatever they are handed, they change nothing outside, run nothing and send nothing, and what they hand back is plain data - true or false, text, or what JSON reads as. The walks stop at each of these rather than going through, and none of them counts as handing back a power.";
  "Each name here carries a proof, and the proof is the price of the entry. The existence check asks the file system whether a path can be reached and answers true or false; the reader asks for a file's text, read as utf-8, or the last version kept in the browser's own store. Neither writes, and neither hands back the module it used. The worst an argument can do is name a path that is slow to answer - a pipe nobody writes to - which stalls the run but harms nothing.";
  "The project download looks over the network rather than at the disk, and the one thing it sends is the asking. It asks this project's own file store, whose host and bucket it spells itself, with a plain GET; the name it is handed is joined in with every slash turned into %2F, so no name can climb out of the bucket or reach another host. What comes back is read as JSON, so it is data and never a power. The worst an argument can do is ask for another file that anyone may already read from that same store.";
  "What such a function hands back can still matter: text read from a file may go on to become a path or a command, and that is caught where it does - a caller whose result matters follows the call like any other.";
  "Spelled rather than imported, for the reason the delete roster gives: an import would give every checker consulting this list an edge to the readers themselves.";
  let names = [
    fn_name("file_exists"),
    fn_name("file_read"),
    fn_name("firebase_storage_download_json_jg"),
  ];
  return names;
}
