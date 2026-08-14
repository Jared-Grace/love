#!/usr/bin/env node
// Stop hook. The user established that reaching ANY stopping point is a
// standing "n" plus "s?": the turn must close with next steps, in plain
// words, ending in a recommendation and a brief why. A bare report of what
// was done is not that - it hands the future back to the user, who then
// spends a reply asking for what could have been handed over for free.
//
// The rule was written into memory four times on 2026-08-14 and broken four
// times the same day, which is the case for moving it out of a document that
// is read probabilistically and into a hook that fires deterministically at
// the exact moment it applies.
//
// Conservative on purpose: it blocks only when the closing message carries
// none of the markers a real next-steps list has. A false block costs a whole
// model turn across every parallel session, so anything ambiguous is let
// through. It also never blocks twice - stop_hook_active is the loop guard,
// and without it a closing message that still failed the check would stop
// the session forever.
//
// Fails open on every error. This is a nudge, not a safety floor: a hook that
// throws would break the turn, which is strictly worse than a missed reminder.
import process from "node:process";
import { readFileSync } from "node:fs";

let NEXT_STEPS_MARKERS = [
  /^\s*\d+\.\s/m,
  /\brecommend/i,
  /\bnext step/i,
  /\bI'd\b/,
  /\bI would\b/,
];

let REASON =
  "This turn is a stopping point, so it carries the user's standing \"n\" " +
  "plus \"s?\" - and the closing message shows no sign of either. Do not " +
  "repeat or re-narrate what was already done. Add only what comes next: a " +
  "short prioritized list in plain words, no jargon, ending with ONE " +
  'recommendation and a sentence saying why. "Stop" is a real ' +
  "recommendation - if nothing on the list is worth the budget, say so and " +
  "say why, rather than inventing work to look useful.";

function assistant_text_last(transcript_path) {
  let text = readFileSync(transcript_path, "utf8");
  let lines = text.split("\n");
  for (let i = lines.length - 1; i >= 0; i--) {
    let line = lines[i].trim();
    if (!line) {
      continue;
    }
    let entry = null;
    try {
      entry = JSON.parse(line);
    } catch {
      continue;
    }
    if (entry?.type !== "assistant") {
      continue;
    }
    let content = entry?.message?.content;
    if (!Array.isArray(content)) {
      continue;
    }
    let said = content
      .filter((part) => part?.type === "text")
      .map((part) => part.text)
      .join("\n")
      .trim();
    if (said) {
      return said;
    }
  }
  return null;
}

let input = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", () => {
  try {
    let event = JSON.parse(input);
    if (event.stop_hook_active) {
      process.exit(0);
    }
    let said = assistant_text_last(event.transcript_path);
    if (!said) {
      process.exit(0);
    }
    let has_next_steps = NEXT_STEPS_MARKERS.some((re) => re.test(said));
    if (has_next_steps) {
      process.exit(0);
    }
    process.stdout.write(
      JSON.stringify({
        decision: "block",
        reason: REASON,
      }),
    );
  } catch {
    process.exit(0);
  }
  process.exit(0);
});
