import { http_post_options } from "./http_post_options.mjs";
import { buffer_to_json } from "./buffer_to_json.mjs";
export async function app_shared_api_post_json(url, body) {
  "how a page posts a call to the machine serving it: one attempt, and a ceiling long enough for a call that is not an ordinary lookup.";
  "ASKING AGAIN IS TURNED OFF, and not because a retry is wasteful. A call here names a function on the serving machine and many of them WRITE. Giving up on a post is a decision made in the browser, and it says nothing at all about whether the far end ran it - so a second attempt after a ceiling can save the same thing twice, and the one thing a person tapping save wants is that it happened once.";
  "The other half is that asking again cannot help with what actually goes wrong here. A page served over the plain dev connection gets about six connections to the whole machine, and a post waits its turn among them; a page playing a song is holding one of those for as long as the song lasts. The ceiling covers that waiting as well as the far end's work, because the clock starts when the fetch is asked for and not when a connection is free. So an attempt that timed out queued behind something, and a fresh attempt queues behind the same thing.";
  "THE CEILING IS LONG FOR THAT SAME REASON, not because the work is slow. The work is fast - a pool of ready workers answers these - and the eight seconds a caller gets for saying nothing were chosen for a page asking a question answered in milliseconds. Eight seconds of waiting for a connection is nothing unusual on a phone reading over the air from this machine, and it was measured: three attempts, all three aborted, on a page saving tapped lyric times while a song played beside it.";
  let options_extra = {
    milliseconds_ceiling: 60000,
    tries: 1,
  };
  let buffer = await http_post_options(url, body, options_extra);
  let o = buffer_to_json(buffer);
  return o;
}
