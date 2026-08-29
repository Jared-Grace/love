import { http_post_options } from "./http_post_options.mjs";
import { buffer_to_json } from "./buffer_to_json.mjs";
export async function app_shared_api_post_json(url, body) {
  "how a page posts a call to the machine serving it: one attempt, and a ceiling long enough for a call that is not an ordinary lookup.";
  "ASKING AGAIN IS TURNED OFF, and not because a retry is wasteful. A call here names a function on the serving machine and many of them WRITE. Giving up on a post is a decision made in the browser, and it says nothing at all about whether the far end ran it - so a second attempt after a ceiling can save the same thing twice, and the one thing a person tapping save wants is that it happened once.";
  "The other half is that asking again cannot help with what actually goes wrong here. A page served over the plain dev connection gets about six connections to the whole machine, and a post waits its turn among them; a page playing a song is holding one of those for as long as the song lasts. The ceiling covers that waiting as well as the far end's work, because the clock starts when the fetch is asked for and not when a connection is free. So an attempt that timed out queued behind something, and a fresh attempt queues behind the same thing.";
  "THE CEILING IS LONG FOR THAT SAME REASON, not because the work is slow. The work is fast - a pool of ready workers answers these - and the eight seconds a caller gets for saying nothing were chosen for a page asking a question answered in milliseconds. Eight seconds of waiting for a connection is nothing unusual on a phone reading over the air from this machine, and it was measured: three attempts, all three aborted, on a page saving tapped lyric times while a song played beside it.";
  "THE FAR END'S HALF IS MEASURED NOW, and it is not what the minute is for. Asked on the serving machine itself, over the same address a page posts to, the same call answers in sixteen to seventy thousandths of a second once the workers are warm, and in about a second on the first call of a run while one is started. Twelve asked at once all answered inside seven tenths of a second, so they do not queue behind each other either. A minute is around a thousand times the work.";
  "So the whole of the ceiling is a budget for waiting, and the waiting is the phone's half of it. It cannot be produced on the machine that serves the page: there is no air in between, and six connections are never all busy at once. That half stays unmeasured here on purpose - the number to change it would have to be read on a phone, holding a connection for a song, and no reading taken on this machine can stand in for it.";
  let options_extra = {
    milliseconds_ceiling: 60000,
    tries: 1,
  };
  let buffer = await http_post_options(url, body, options_extra);
  let o = buffer_to_json(buffer);
  return o;
}
