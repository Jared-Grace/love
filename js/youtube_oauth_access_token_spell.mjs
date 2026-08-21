export function youtube_oauth_access_token_spell() {
  "How long a bought key to the channel goes on being reused before another is";
  "bought, counted in milliseconds. Ten minutes, against the hour the key really";
  "lasts, so that a clock running six times too slow would still hand over a key";
  "that works - which is what makes reusing one safe to reason about rather than";
  "merely usual. The saving barely suffers for the caution: a sweep of a thousand";
  "videos buys six keys an hour instead of a thousand.";
  let milliseconds = 600000;
  return milliseconds;
}
