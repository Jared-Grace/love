export function git_history_heavy_bytes_least() {
  "How much a file left behind in the history has to weigh before it is worth stopping for.";
  "Set where it is because the thing that prompted it weighed a little under a hundred thousand - a scripture translation nobody had the right to publish, added and deleted a year before anyone noticed, and travelling in every copy of the repo the whole time. Half that is low enough to catch the next one of those while it is still one commit old, and high enough that the ordinary come-and-go of source files does not reach it.";
  "It is a place to stop and look rather than a rule about size. Something over this is not wrong for being big; it is only big enough that somebody should say out loud whether it belongs in the past for ever.";
  let bytes = 50000;
  return bytes;
}
