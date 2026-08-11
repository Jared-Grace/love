export async function catch_message_async(lambda) {
  "Runs what it is given and answers either with what came back or with why it would not, so that one refusal is an answer rather than the end of whoever asked";
  "This is the opposite of the catches that answer nothing when something fails. Those turn a total refusal into a result shaped exactly like an empty one, and at the call there is no way to tell the two apart. Here the reason is carried back out in the open, so a caller can carry on and still say afterwards precisely what did not happen and why it did not";
  "It is meant for a run over many things where one of them refusing is an ordinary fact about that one and not a fault in the run. A caller who has nothing to do without the value should not catch at all, and let the refusal travel";
  try {
    let value = await lambda();
    let done = {
      ok: true,
      value,
      message: "",
    };
    return done;
  } catch (e) {
    let message = e.message;
    let stopped = {
      ok: false,
      value: null,
      message,
    };
    return stopped;
  }
}
