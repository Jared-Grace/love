# How to edit `ebible_letter.md`

**`ebible_letter.md` is exactly what gets sent.** Nothing else may go in it — no header, no bookkeeping, no note to a future editor. Everything of that kind lives here. That is the whole reason this file exists: a draft that carries its own instructions has to be trimmed by hand before sending, and a hand trim before sending is the step that eventually takes a real line with it.

So the rule is one line long: **if a reader at eBible.org should not see it, it goes in this file.**

## State

**The first letter went on 2026-08-27**, all eleven items. What actually left is `ebible_letter_sent.txt` — the letter with a short preamble added saying the faults were found by Claude Code, the "found by a free Bible reading app" line taken out, and the method note at the end dropped. `ebible_letter.md` stays the source for the next one.

Every item was checked against the downloaded files. Re-check before sending if the downloads have been refreshed since.

**Each item is mentioned once, ever.** `data/given/ebible_letter_accounted.json` says what has been said and what was judged no fault. `ebible_letter_unaccounted_names` and `ebible_verse_marks_gaps_unexplained` answer what neither covers; both are empty as of 2026-08-22, so the letter is the whole of what is outstanding.

**Three of the eleven items are in no record at all**, because the record only holds chapters where the verse marks and the spoken lines disagree, and these are not that shape: item 2 (bgg Matthew with numbers and no words), item 5 (the apyNT copyright page), item 9 (engbsb 'A Psalms'). Item 1 is recorded separately, in the JSON the letter links. Anyone writing the next letter has to read this paragraph, because the record alone will offer those three again.

The record is keyed by chapter, not by item number, so items in the letter can be reordered freely.

## Getting it into an email

`ebible_letter.txt` next to it is the paste target. `ebible_letter_plain_text_write` generates it from the markdown; re-run that after any edit.

**Paste it as plain text, not rich text.** The letter quotes markup as its evidence, and eight of those quotes hold `&#160;`. Rich-text mail can render those six characters as a space, which would show the reader something other than the page being reported. Mail clients link a bare url on their own, so nothing that matters is lost.

## On sending

1. Save what actually went as `ebible_letter_sent.txt` — the sent copy, not the source, since the two differ by whatever was changed at the last moment.
2. Run `ebible_letter_sent_mark <date>`. It turns every chapter waiting in a draft into one sent on that day, and refuses when it finds none waiting, which is what asking twice looks like.
3. Re-run `ebible_verse_marks_displaced_letter_write` so the linked JSON matches what was sent.

## Rules the letter is written to

**One line per paragraph, on purpose.** The letter is pasted into an email, and a hard-wrapped paragraph breaks in the wrong place at every window width. Do not re-wrap it.

**No greeting, no sign-off, no preamble.** Every line is a fault, its evidence, or a possible correction. Each heading names the versions affected, or their count where there are too many to name.

**Every item says which pages it affects, and where on them.** Name the chapters where they can be named, give their count where they cannot, and link a JSON file where the count is too large to read — item 1 does that. Give the verse number too, unless the fault is a whole chapter or a superscription, which sits above verse 1 and carries no number. The test is that a reader can go straight to each page without asking us anything.

**"possible correction", never "correction".** Two reasons, and the first is the weaker one: it protects the writer if the writer is the one who is wrong. The second is why it stays even when we are certain — "possible" asks what he thinks and lets him reach the answer himself, where the bare word says *this is the truth, I already know it, and disagreeing makes you wrong.* Paul writes with authority and does not hedge, so this is not absolute; it is not ours to claim here.

**Counts offered as a breakdown must add up to the total.** Item 1 once said ranges and part-verses were 1,384 and 1,168 against a total of 2,690. They come to 2,552, and the missing 138 were a whole shape of label nobody had looked at. Add the numbers before writing the sentence.

**A claim of absence has to be checked in the numbering the file itself uses.** The letter once closed by saying neither Brenton edition showed Psalm 119. Both do, complete — Psalm 119 in the Septuagint's numbering is the Hebrew's 120.
