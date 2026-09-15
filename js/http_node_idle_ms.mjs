export function http_node_idle_ms() {
  "How long a socket may go without sending or receiving a byte before the ask it carries is given up as failed.";
  "IT IS LONG ON PURPOSE. Some far ends think for minutes before they send the first byte - a picture being drawn, a model writing an answer - and an ask cut off while it was still being worked on is a failure invented here. Ten minutes of silence is past anything those were seen to take, and far short of forever.";
  "FOREVER WAS WHAT IT WAS BEFORE, and it was measured. On 2026-09-15 a rebuild of the picture Bible's language files sat for over half an hour, twice, on one connection to storage that was open and sending nothing, using no time at all. Nothing failed, so nothing said so; the job simply never ended, and the only sign was that the clock kept going while the work did not.";
  let idle_ms = 600000;
  return idle_ms;
}
