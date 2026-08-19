import { promise_wrap } from "./promise_wrap.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import node_http from "node:http";
export async function http_status_answering_server(status_code) {
  "$plain status_code";
  "A server on this machine answering every ask with one given status and no body, handed back with the address it is answering at and a way to stop it.";
  "IT EXISTS SO A GATE CAN ASK A REAL QUESTION AND GET A REAL REFUSAL. What is being checked is how this repo tells one kind of failed download from another, and that answer is built in one place and read in another. A check that wrote the failure out by hand would be a third copy of the same shape, agreeing with the other two by construction - including on the day one of them changes and the other does not. Asking for real leaves nothing to agree with: the request goes out, the far end refuses, and whatever this repo makes of that is what gets judged.";
  "IT IS NOT THE NETWORK. Nothing leaves the machine, nothing needs to be reachable, and the answer is the same on a laptop with the cable out. That is what lets it sit in a gate at all, since a gate that needed the internet would go red for a reason nobody could fix.";
  "THE PORT IS WHICHEVER ONE IS FREE. Around ten of these run in the same folder at the same time, so a number written down here would be two of them fighting over it, and the gate would fail for whoever asked second.";
  function handler(request, response) {
    response.statusCode = status_code;
    response.end();
  }
  let made = node_http.createServer(handler);
  function lambda(resolve, reject) {
    made.on("error", reject);
    function listening() {
      resolve(null);
    }
    made.listen(0, "127.0.0.1", listening);
  }
  await promise_wrap(lambda);
  let address = made.address();
  let port = property_get(address, "port");
  let url = text_combine_multiple(["http://127.0.0.1:", port, "/"]);
  async function close() {
    function lambda2(resolve) {
      made.close(resolve);
    }
    await promise_wrap(lambda2);
  }
  let answering = {
    url,
    close,
  };
  return answering;
}
