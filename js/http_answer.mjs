import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export async function http_answer(url, options) {
  "$plain url";
  "$plain options";
  "Asks an address for something and hands back the whole of what came back - the number it answered with, the notes it answered with, and the bytes.";
  "The notes are the reason this exists beside the fetch that already answers bytes. A file sent up in the safe way is sent in two asks, and the address the second ask uses is not in the reply's body at all - it is written in a note beside it. A reader that keeps only the bytes throws that address away, and the second half of the sending then has nowhere to go.";
  "The number is handed back rather than being turned into a refusal, for the same reason. A sending that is only partly finished answers with a number that is not a success and is not a failure either, and a reader that stopped on everything outside the two hundreds could never carry on from where it left off.";
  "What is sent is sent exactly as it is given, and nothing is added on top. The reading fetch here writes whatever it is handed out as a record and says so in a note, which is right for asking a question and wrong for handing over a film - a film written out as a record is no longer a film.";
  arguments_assert(arguments, 2);
  let method = property_get(options, "method");
  let headers = property_get(options, "headers");
  let body = property_get(options, "body");
  let asked = {
    method: method,
    headers: headers,
    body: body,
  };
  let answered = await fetch(url, asked);
  let status = answered.status;
  let notes = {};
  for (let [name, said] of answered.headers) {
    notes[name] = said;
  }
  let carried = await answered.arrayBuffer();
  let bytes = Buffer.from(carried);
  let whole = {
    status: status,
    headers: notes,
    bytes: bytes,
  };
  return whole;
}
