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

// The one closing that is complete WITHOUT a list. Established 2026-08-16:
// a list of options is something to choose between now, so if the answer is
// "keep waiting" there is nothing to choose and the list is noise. Three
// turns in a row offered "wait for the check" as item 1, the user picked it
// each time, and each pick cost a reply to say "wait" again about a thing
// that announces itself on its own.
//
// Both halves are required. "waiting" alone would excuse any report that
// happens to use the word; the promise to report back is what makes the
// closing complete, because it is what tells the user no reply is wanted.
//
// The promise is matched by the promise itself, never by the pronoun in
// front of it. The first attempt asked for "I'll", spelled with a straight
// apostrophe, and blocked a closing that said exactly the right thing -
// because the apostrophe that reached the transcript was the typographic
// one. A marker that turns on a character nobody chose deliberately is a
// marker that fails at random.
let WAITING_MARKERS = [
  /\bwaiting (on|for)\b/i,
  /\b(let you know|say when|tell you when|report back|come back to you|update you)\b/i,
];

let REASON =
  "This turn is a stopping point, so it carries the user's standing \"n\" " +
  "plus \"s?\" - and the closing message shows no sign of either. Do not " +
  "repeat or re-narrate what was already done. Add only what comes next: a " +
  "short prioritized list in plain words, no jargon, ending with ONE " +
  'recommendation and a sentence saying why. "Stop" is a real ' +
  "recommendation - if nothing on the list is worth the budget, say so and " +
  "say why, rather than inventing work to look useful. The one exception is " +
  "waiting: if the honest answer is that something already running has to " +
  "finish first, close with only that - what is being waited on, and that " +
  "you will say when it is over. No list, because there is nothing to choose.";

// A tool_result is carried on an entry typed "user", so the newest entry of
// that type is not the newest thing the user actually typed. Only a genuine
// prompt marks where this turn began.
function user_prompt_is(entry) {
  if (entry?.type !== "user") {
    return false;
  }
  let content = entry?.message?.content;
  if (typeof content === "string") {
    return true;
  }
  if (!Array.isArray(content)) {
    return false;
  }
  return !content.some((part) => part?.type === "tool_result");
}

function assistant_text(entry) {
  if (entry?.type !== "assistant") {
    return null;
  }
  let content = entry?.message?.content;
  if (!Array.isArray(content)) {
    return null;
  }
  let said = content
    .filter((part) => part?.type === "text")
    .map((part) => part.text)
    .join("\n")
    .trim();
  return said || null;
}

// The closing message is appended to the transcript around the same moment
// this hook runs, so a single read can find only the PREVIOUS turn's text and
// judge that instead. It cost a false block the first time it ever fired: the
// message being judged had a numbered list and a recommendation, and the one
// actually read was two turns old.
//
// So the read is anchored rather than trusted. Whatever it finds has to sit
// AFTER the last thing the user typed, which is the only proof it belongs to
// the turn now ending. Until it does, the message is still being written.
function assistant_text_closing(transcript_path) {
  let text = readFileSync(transcript_path, "utf8");
  let lines = text.split("\n");
  let prompt_at = -1;
  let said_at = -1;
  let said = null;
  for (let i = 0; i < lines.length; i++) {
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
    if (user_prompt_is(entry)) {
      prompt_at = i;
      continue;
    }
    let text_said = assistant_text(entry);
    if (text_said) {
      said_at = i;
      said = text_said;
    }
  }
  if (said_at < prompt_at) {
    return null;
  }
  return said;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Fails open at the end of the window on purpose. A closing message that never
// arrives is a reason to say nothing, not a reason to block a turn on a guess.
async function assistant_text_closing_await(transcript_path) {
  for (let attempt = 0; attempt < 12; attempt++) {
    let said = assistant_text_closing(transcript_path);
    if (said) {
      return said;
    }
    await sleep(250);
  }
  return null;
}

let input = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => {
  input += chunk;
});
process.stdin.on("end", async () => {
  try {
    let event = JSON.parse(input);
    if (event.stop_hook_active) {
      process.exit(0);
    }
    let said = await assistant_text_closing_await(event.transcript_path);
    if (!said) {
      process.exit(0);
    }
    let has_next_steps = NEXT_STEPS_MARKERS.some((re) => re.test(said));
    if (has_next_steps) {
      process.exit(0);
    }
    let waiting_is = WAITING_MARKERS.every((re) => re.test(said));
    if (waiting_is) {
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
