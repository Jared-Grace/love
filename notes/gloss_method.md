# Glossing method

**Read this before authoring gloss content for a passage.** It is the rubric for `app_original_bible` (Greek and Hebrew) and `app_ceb_bible` (Cebuano). One passage at a time, one entry per word.

The point of the note is that 260 chapters get authored across many sessions by many Claudes. Without a fixed method they drift, and drift is visible to the reader as unevenness. A settled method is also what lets review converge — you refine early chapters until corrections stop, then the rest is just reading.

## What the reader sees

The renderer is `app_shared_gloss_bible_home_generic`. It takes your array and paints **every entry, in order, in one linear list**:

```
<original passage>            green
word : gloss : explain        red : blue : purple
word : gloss : explain
...
```

Consequences you must author to:

- **Plain text only.** Each field goes into an `html_span_text`. Markdown does not render — asterisks, backticks, and underscores appear literally. No line breaks inside a field. No HTML.
- **Nothing is hidden or tapped.** The whole list is on screen at once. There is no expand, no tooltip, no ordering the reader controls.
- **The entries are read in passage order,** so entry N can assume the reader just read entry N−1. That is the one thing you may rely on.
- Quote marks are fine, and single quotes read better than double inside a sentence.

## The shape

```json
[{"word": "...", "gloss": "...", "explain": "..."}, ...]
```

- `word` — the original-language word, spelled **exactly** as it appears in the passage, accents and final form included. It is the reader's anchor to the green line above.
- `gloss` — the shortest honest English equivalent. One or two words. A slash is allowed when one word genuinely will not do (`with / toward`).
- `explain` — a few plain sentences. This is the body of the work.

## The grammar is GIVEN. Do not generate it.

You are handed the words, already parsed. `app_original_bible_gloss_write_next(chapter_code)` returns, in order, one record per word:

```
{ original, translit, parsing, parsing_long, gloss, strong,
  parsing_sentence, occurrence, lexicon: { lemma, translit, derivation, strongs_def, kjv_def } }
```

For John 1:1 the first six are `ἀρχῇ` / `archē` / `N-DFS` / `Noun - Dative Feminine Singular` / `[the] beginning` / `746`. (`bible_interlinear_verse(reference)` gives those six alone, without the three that are composed for you.)

This is the Berean Study Bible interlinear table, and it settles by data what used to be guessed:

- **`original` is your `word` field.** Copy it. Never retype an original-language word by hand — accents and final forms are exactly where a transcription slips.
- **`parsing_long` is the morphology.** It is not a hint, it is the answer. **Never contradict it, never restate it in code form, never add a grammatical claim it does not make.** If it says Dative Feminine Singular, your job is to say what the dative is *doing here* — not to decide the case.
- **`gloss` is a strong default** for your `gloss` field. Strip the square brackets the BSB uses for supplied words (`[the] beginning` → `beginning`). Override it only when it is actively misleading in this clause, and then say why in the explain.
- **`translit` is the transliteration.** Use it when you point at an English descendant; never invent your own spelling.
- **`strong` is the Strong's number** — the key the two fields below are looked up under.
- **`parsing_sentence` is the parsing already said in plain English**, composed by `gloss_parsing_sentence` and gated across the whole Greek NT. "This is a demonstrative pronoun, a word that points, in the accusative, the form Greek most often uses for what a sentence acts on, neuter and plural." Build on it; do not re-render the parsing yourself.
- **`occurrence` is the rarity sentence**, already written out of the counts — present only when the counts earned one.
- **`lexicon` is Strong's own entry** (1890, public domain), present only for Greek. `lemma` is the dictionary form — the word as a lexicon lists it, which the inflected `original` is not. **`derivation` is the etymology**: `ἀπέρχομαι` comes back as "from G575 (ἀπό) and G2064 (ἔρχομαι)". `strongs_def` is the meaning range and `kjv_def` is how the KJV rendered it. A word whose entry has no `derivation` simply has no `derivation` field — that absence is the lexicon declining to say, not a word without an origin.

So the authoring job is **the explain field, and only the parts no dataset holds**: saying what the form is doing *in this clause*, and choosing which of the given facts this reader needs.

A passage where you find yourself deciding a case or a tense means you are not reading the data. Stop and pull it.

## Who you are writing for

An English speaker with **no background in grammar at all** — someone who has not met the word "case", "dative", or "participle".

That single fact governs everything:

- **Define a grammar term the first time it appears in the passage**, in the same sentence that uses it. Not "it is in the dative case" but "it is in the dative case, which is the form Greek uses to mark where or when something happens."
- After it is defined once in this passage, you may use it bare. The passage is the scope, because the passage is one screen.
- Never use a term you did not define and would not define. If a distinction cannot be explained in one clause, it is not carrying its weight — cut it.
- Say what the grammar **is doing here**, not what it can do in general. "Imperfect tense" is a label. "The imperfect tense shows continuous action in the past — it was going on, not finished" is an explanation.

### The same rule, widened past grammar: every word you name a thing by

The rule above is usually read as being about grammar terms. It is not. **An explain may only name a thing by a word the reader has already been given** — and the only words this reader has been given are the glosses in this passage, plus ordinary English.

Two ways to break it, both found in Proverbs 31 and both flagged by the human:

- **A word lifted from the English rendering that is never one of your glosses.** The English line sitting beside the Cebuano is *not* the reader's vocabulary. Verse 1's `ang` was explained as pointing at "the burden they carry" — but "burden" appears nowhere as a gloss, so the reader meets a word nobody defined and cannot tell whether it is the meaning or a figure of speech. Check it mechanically: take every word your explains use, keep the ones that appear in the English rendering, and drop the ones that appear in your own glosses. What is left is what the reader was never told.
- **A figure of speech stacked on a figure of speech.** "The burden they carry" is a metaphor about a word that was itself glossed with a metaphor ("oracle"). A beginner has to unwind two before reaching anything real. One figure, glossed plainly, or none.

The repair for the first is nearly always the same: **say the plain thing the word points at** — "first the words, and now what those words are." The repair for the second is to make the *gloss* plain first ("oracle" → "prophecy"), because every explain that mentions it then inherits the plainer word for free.

**A gloss changed here changes every explain that quotes it.** When you replace a gloss, sweep the chapter for the old word — that is one edit's worth of work and it is how the chapter stays internally consistent.

## Every word gets a real entry

**Author an entry for every word in the passage, including repeats.** The list must line up with the green text above it. A missing word breaks that alignment.

**Never write "same as above."** It is the single worst failure in the existing content and it is everywhere in the gpt-4.1 output. It happens when the same word appears twice and the second entry gives up.

A repeat is an opportunity, not a duplicate. The word is doing a **different job in a different clause**, so say the job:

- Bad: `Λόγος : Word : Same as above: 'word,' 'reason,' or 'message.'`
- Good: `Λόγος : Word : The same noun again. Here it is the subject of the second clause — the Word is the one being said to be with God.`

The repeat entry can be shorter than the first. It cannot be empty. This is the same principle the sermon side already runs on: `g_sermon_glosses_for_word` exists so a term defined in an earlier chapter gets a **different facet** rather than the same sentence twice.

## What an explain contains

In this order, skipping what does not apply:

1. **What kind of word it is** — noun, verb, preposition, conjunction, article, pronoun. In those words, not in abbreviations.
2. **What it means** — the range, if the range matters. One meaning if it does not.
3. **The grammar that is actually doing work here** — read off `parsing_long`, rendered in plain words. For a verb: person, number, tense, and what the tense *shows*. For a noun: case, and what the case is *doing*. For an article or adjective: what it agrees with. Skip any part of the parsing that changes nothing for the reader — you may leave a detail out, you may never state one the parsing does not.
4. **How the parts build it** — prefix, root, ending — when the word visibly decomposes and the decomposition helps.
5. **Etymology, when it is a true hook.** An English word the reader already knows, sharing the root: `ἀρχή` → archaeology, archangel. `λόγος` → logic, dialogue. `θεός` → theology.

On etymology: it is the best tool in the box and the easiest to fake. **Never invent one — and now you never have to.** `lexicon.derivation` gives the word's own origin, and `lexicon.lemma` gives the dictionary form to name it by. Two rules still hold:

- **The English descendant is still yours to supply, and it is still the half that can be wrong.** `derivation` says where the Greek word came from; it does not say which English word shares the root. `ἀρχή` → archaeology is yours to assert. If no English descendant would be recognised, say nothing — do not reach for a distant or folk connection to fill the slot.
- **A wrong etymology is worse than none**, because the reader will remember it. Where `derivation` is absent, "its origin is uncertain" is a real and honest answer.

## Minimum additional meaning

Every explain has one point. Whatever it says beyond that point is additional meaning, and additional meaning can usually be dropped.

The test is not "is this shorter". It is **"does this word carry the point, or only decorate it?"** Two failures from one entry in Proverbs 31, both named by the human:

- *"a short word in front of a noun to show the job that noun does"* → *"to show what the noun does"*. The word **job** carried nothing. Because it was there, somebody could argue **purpose** was the better word — and that argument exists only because a word was chosen that made no point.
- *"It opens the book's last chapter by pointing straight at what follows: the words themselves."* — cut whole. It was reported as hard to understand on a first read, and it was hard because it made no new point: the sentence before it had already said which noun is marked. **A sentence that adds no meaning is the easiest to cut and the hardest to read.**

This does not soften the rule that an unfamiliar term must be explained. Spend freely on the point. Spend nothing beside it.

## Length

Two to five sentences for a content word. One or two for an article, a conjunction, a common preposition.

Do not pad. A reader facing a fifteen-word verse is reading fifteen of these in a row, and uniform length reads as filler. Let the important words be longer and the small words be short — that variation is itself information about which words matter.

## Where the grammar is contested

Some forms are the actual pivot of a long-standing dispute. John 1:1c is the standard case: `Θεὸς ἦν ὁ Λόγος`, where `Θεὸς` has no article and `ὁ Λόγος` does.

The rule: **report the form and what it shows. Do not argue, and do not conceal.**

- Say plainly that the article is absent, that the article is present on the other noun, and what that arrangement does — here, it marks which noun is the subject and which is the predicate.
- Do not summarise the debate, name the parties to it, or rule on it. That is not what a word-level gloss is for, and the reader did not ask.
- Equally, do not smooth it over. Leaving out the datum because it is contested is its own kind of dishonesty. The existing gpt-4.1 entry for `Θεὸς` in John 1:1 says only "used as a predicate" and never mentions the article — that is the gap to close.

The same discipline covers a textual variant. The source is a merged apparatus, so where the text is disputed, gloss the word that is in front of you and say nothing about the manuscripts.

## Consistency across 258 chapters

Small choices, fixed once, so chapters authored months apart match:

- **Start an explain by naming the word's kind**, not by repeating the word. Write "This is a preposition meaning 'in'." Do not write "ἐν is a preposition meaning 'in'." The word is already on the line, in red, immediately to the left. The existing content does it both ways *within a single chapter* — that is exactly the drift to eliminate.
- **Say "the form Greek uses for X"**, not "the X case", on first mention.
- **Transliterate only when you are pointing at an English descendant** — `ἀρχή` (archē) alongside archaeology. Not otherwise.
- **Refer to God, Jesus, and the Spirit with capitals**, and use the passage's own words for them rather than paraphrasing.
- **Gloss a proper name as the name.** `Ἰωάννης : John : ...`, then explain the name's meaning if it has one.

## Before saving

- [ ] One entry per word, in passage order, no word skipped — the count matches the interlinear record count.
- [ ] Every `word` field is copied from `original`, not retyped.
- [ ] No explain contradicts or exceeds its `parsing_long`. `app_original_bible_gloss_parsings_gate_run` (in `q`) settles the half of this a machine can: an explain naming a tense, mood or case that **no word of its passage** carries fails the build. Naming one that a *neighbouring* word carries is fine and expected — that is the comparison this rubric asks for — but it must still be a term you defined in this passage, because the passage is all the reader can see.
- [ ] No "same as above", no empty explain, no markdown, no line breaks.
- [ ] Every grammar term used is defined somewhere in this passage before or where it is used.
- [ ] No explain names a thing by a word borrowed from the English rendering that is never one of your own glosses, and no explain stacks a figure of speech on a figure of speech.
- [ ] Every etymology is one you are certain of.
- [ ] Valid JSON — it is stored as a string, so a stray quote is silent until it reaches a reader.

## Related

- `notes/transforms.md` — editing `js/*.mjs` at all.
- `app_shared_gloss_bible_home_generic` — the renderer described above; read it if you want to change the shape rather than fill it.
