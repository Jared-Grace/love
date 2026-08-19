import { fn_name } from "./fn_name.mjs";
export function page_capture_settle_ms() {
  "how long to leave a page after asking it to draw a different screen, before capturing what it now shows - long enough for the drawing to have happened, and no longer, because a crawl pays this wait once per screen and there are hundreds of them";
  ("the other wait in the repo is ",
    fn_name("page_settle_ms"),
    ", which is more than eight times this and is the right one for a page arriving over the network and fading its parts in. This one is for a page served by the machine it is being read on, where the drawing is the only thing being waited for. Choosing that one here would turn a crawl of a few minutes into most of an hour; choosing this one there would measure a page still half dressed. So they are two values, not one that somebody should have merged.");
  ("it was written out as a bare 180 in six places, every one of them a line before a capture, so a reader wanting to know whether the wait was long enough had six numbers to change and no reason recorded beside any of them.");
  let v = 180;
  return v;
}
