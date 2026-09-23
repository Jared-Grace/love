import { property_get } from "./property_get.mjs";
export async function child_output_wait_code(child) {
  "Reads everything an already-started program printed on both channels and answers that together with the number it finished on, without judging any of it.";
  "The judging is what got split off. A program finishing on anything but nothing is a failure to almost every caller, and the shared waiter beside this one says so by throwing - but it is not a failure to all of them. A search finishing on one is a search that looked and found nothing, which is an answer rather than a fault, and a waiter that throws on it turns the commonest good outcome into an exception.";
  "So the reading and the verdict are two things now. Everything that listens to a running program listens the same way; what differs is which endings count as an answer, and that is the caller's to say.";
  "It takes the program already started, so nothing here chooses what runs - the same reason its caller could be shared in the first place.";
  let result = await new Promise(function lambda(resolve, reject) {
    let stdout = "";
    let stderr = "";
    function on_stdout(data) {
      stdout += data.toString();
    }
    child.stdout.on("data", on_stdout);
    function on_stderr(data) {
      stderr += data.toString();
    }
    child.stderr.on("data", on_stderr);
    function on_error(err) {
      reject(err);
    }
    child.on("error", on_error);
    function on_close(closed) {
      resolve({
        code: closed,
        stdout,
        stderr,
      });
    }
    child.on("close", on_close);
  });
  let code = property_get(result, "code");
  let out = property_get(result, "stdout");
  let said = property_get(result, "stderr");
  let r = {
    code,
    out,
    said,
  };
  return r;
}
