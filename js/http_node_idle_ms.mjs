export function http_node_idle_ms() {
  "How long a socket may go without sending or receiving a byte before the ask it carries is given up as failed.";
  "IT IS LONG ON PURPOSE. Some far ends think for minutes before they send the first byte - a picture being drawn, a model writing an answer - and an ask cut off while it was still being worked on is a failure invented here. Ten minutes of silence is past anything those were seen to take, and far short of forever.";
  "FOREVER WAS WHAT IT WAS BEFORE. Nothing bounded an answer that stopped arriving, so one quiet connection could hold a whole job still with nothing failing and nothing said. A LOW-CPU JOB IS NOT THAT, and it was mistaken for it on 2026-09-15: a rebuild asking storage for eight hundred chapters, each ask spread a few seconds from the last, uses almost no processor time while working normally. Tell the two apart by whether the connection changes between looks, not by the processor clock.";
  let idle_ms = 600000;
  return idle_ms;
}
