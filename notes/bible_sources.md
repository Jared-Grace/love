# Where Bible text comes from, and how to check you may ship it

Read this before adding a translation, and before arguing about a licence.

## The one rule

**The words on the page are the licence. The label is not.** Every check below ends
by reading the terms in full and quoting them. A translation labelled "CC BY-ND"
and a translation labelled "CC BY-NC-ND" are refused for opposite reasons, and one
of those reasons has since been withdrawn. Reading the label alone gets that wrong
in both directions.

## eBible.org

Almost everything shipped today comes from here. The downloader puts each
translation in its own folder:

```
/media/j/JPM/a/user/storage/function/ebible_version_download/<bible_folder>/
```

The terms are in `copr.htm` in that folder — the same page eBible shows a reader.
It states the copyright holder, the language, and the licence in words. Read it as
text:

```
sed -e 's/<[^>]*>//g' .../<bible_folder>/copr.htm | tr -s ' \n' ' \n'
```

The judgement is already coded: `ebible_licences_commercial` holds the terms this
repo may ship on, and `ebible_licence_commercial_is` answers for one translation.
`ebible_languages_commercial` derives the whole free list from that. Never write a
list of allowed folder names by hand — it goes stale the next time eBible
regenerates a page.

Two of their published translations are missing text, and a letter telling them so
is drafted and **not yet sent**: `letters/ebible_letter.md`. Read it before writing
to them about anything else, so they get one letter rather than two. It lives outside
`notes/` because it is a thing to send, not an instruction to follow — `notes/` holds
only what a Claude reads before acting, and `instructions_notes_gate_run` enforces
that by refusing any note `CLAUDE.md` does not link.

### What the four refusals actually forbid

- **Non-commercial.** Refused. The mission is to earn and give away what is earned,
  so terms forbidding earning forbid the mission. This is the refusal that bites
  hardest and it is not negotiable by being careful.
- **All rights reserved.** Refused. Nothing was granted at all.
- **No derivatives.** *Accepted*, if the restriction is known and respected. See
  below.
- Everything else named in `ebible_licences_commercial` — public domain, CC BY,
  CC BY-SA, GFDL — is allowed, with the credit and share-alike duties kept by
  showing the credit rather than by leaving the text alone.

### No derivatives: settled, and what it costs

eBible's own ND wording is the same on every ND page:

> You may share and redistribute this Bible translation or extracts from it **in
> any format**, provided that: You include the above copyright and source
> information. You do not make any derivative works that **change any of the actual
> words or punctuation** of the Scriptures.

So format is expressly free — colour, circling, layout, a column beside the verse.
Only the characters of the text are frozen. That means:

- **Allowed:** a note held *beside* the text ("in this verse, 'x' is closer to the
  Greek than 'y'"), colouring a word, circling a phrase, colour-coded notes keyed
  to what is circled. None of these adds a character, and all of them survive a
  reader copying the verse out.
- **Forbidden:** an inserted `*`, a bracket, an inline gloss — anything that puts a
  character into the text. An added `*` is punctuation added to the Scriptures,
  which is the one thing named.

The gloss corpus (`app_original_bible`, `app_ceb_bible`) inserts nothing into the
verse either, but before shipping an ND text into a glossing app, check that the
renderer for it holds notes apart from the words.

### What accepting ND actually changes

`ebible_languages_licences_commercial_not_bible_folders` answers **three** today.
It answered six when this was first measured on 2026-08-18; here is the whole six,
with the licence each page states and what became of it:

| folder | language | licence as read | freed by accepting ND? | now |
| --- | --- | --- | --- | --- |
| `turytc` | Turkish | `cc_by_nd` | **yes** | **allowed** 2026-08-19, words frozen |
| `zlmKSZI` | Malay | `cc_by_nd` | **yes** | **allowed** 2026-08-19, words frozen |
| `polubg` | Polish (Updated Gdańsk) | `cc_by_nd` | **yes** | **allowed** 2026-08-19, words frozen |
| `thaKJV` | Thai | `cc_by_nc_nd` | no — non-commercial | **dropped** 2026-08-19 |
| `wolmbs` | Wolof | `cc_by_nc_nd` | no — non-commercial | **dropped** 2026-08-19 |
| `amh` | Amharic | `unknown` | no — prose terms, no readable grant | **replaced** by `am_ulb` |

So the three that remain are all freed by accepting ND, and nothing else stands in
their way. Amharic's page stated its terms in prose the mark-reader cannot
classify, which counts as refused: an unread page has granted nothing that can be
pointed at. It was replaced rather than dropped, because Door43 carries the same
language under CC BY-SA — see below.

### The seventeen unread pages, and what reading them found

`ebible_versions_licences_unknown` names every downloaded translation whose page
states terms no machine here could classify — seventeen on 2026-08-19. An unread
page is **not** a refusal: a page granting nothing and a page granting everything
in prose look identical from here, so the set is a reading list.

`ebible_versions_licences_unknown_language_new` narrows it to the ones worth
reading first — those in a language this app offers nothing in. Seven, and all
seven were read on 2026-08-19:

| folder | language | what the page states | verdict |
| --- | --- | --- | --- |
| `thantv` | Thai (New Thai Version) | bare copyright notice, no grant | refused |
| `swef` | Swedish (Folkbibeln) | bare copyright notice, no grant | refused |
| `bod` | Tibetan (Central) | bare copyright notice, no grant; NT+ only | refused |
| `hwc` | Hawai'i Pidgin | no grant; names a contact for permissions | refused — **ask** |
| `apyNT` | *(page is wrong — see below)* | Khmer notice, quotation limited to under 1,000 verses without written permission | refused |
| `dan1931` | Danish (OT 1931, NT 1907) | Project Gutenberg "Small Print": distribution allowed, **20% of net profits** owed as royalty, plus indemnity | **refused** 2026-08-19 |
| `amh` | Amharic | prose terms, no readable grant | replaced by `am_ulb` |

So no language is unlocked by the unread set today. Two follow-ups came out of it:

- **Danish is the only one that grants anything.** It permits distribution and does
  not forbid earning — it taxes it, at 20% of net profits payable to the Project
  Gutenberg Association at Carnegie Mellon, and adds an indemnity. That is not the
  non-commercial refusal, so the rule does not decide it. It is a duty nobody here
  is set up to keep, aimed at an arrangement that has long since been superseded,
  and whether to take it on is a decision for the human rather than for a gate.
- **`apyNT`'s copyright page carries the wrong translation's notice.** The title is
  Aparai (Brazil); the body is the Khmer Standard Version's. That is a third defect
  to tell eBible about — add it to `letters/ebible_letter.md` before sending.

### Why Thai and Wolof were dropped rather than replaced

Both were searched for before being dropped, and the search is recorded here so
nobody has to repeat it.

**Wolof: nothing exists.** eBible carries exactly two Wolof texts and both are the
same publisher on the same terms — `wol2010` (New Testament, © 2010) and `wolmbs`
(whole Bible, © 2025), La Mission Baptiste du Sénégal, CC BY-NC-ND. Door43's
catalogue returns an empty list for `wo`. Nothing on open.bible or in the
open-bibles index. The only route to a Wolof Bible here is asking that publisher
for terms.

**Thai: two candidates, neither shippable today.**

- **TNBT, the Thai New Buddhist Translation** (Banpote Wetchgama, © 2014–2022) is
  **CC BY-SA 4.0** — a licence this repo may ship on, and the author expressly
  permits modification provided the result is shared on the same terms. It is at
  `github.com/pepa65/TNBT`, as HTML, PDF, EPUB, the author's original `.doc`, and a
  custom `.tx` text format; not usfm, so it would need its own reader. It is
  **New Testament only**.

  **Read on 2026-08-19, and the licence is not what decides it.** The licence is
  clean and the format cost is real but ordinary. What decides it is the
  translation's own aim, and that is a judgement for the human rather than for a
  gate. Banpote translated deliberately for Thai Buddhist readers, and the approach
  reaches into the theological vocabulary itself — the words carrying Spirit,
  angel, baptism and Sabbath are chosen to land inside a Buddhist frame rather than
  to match what earlier Thai versions used. That is precisely the true-to-the-text
  question the choosing rule asks, and it cannot be settled by reading the terms.
  The repository documents its build process and states no translation philosophy,
  so the only way to settle it is somebody who reads Thai comparing passages.
  Nothing here should carry it until that has happened.
- **`thafb`, eBible's "Freedom Bible"** (พระคัมภีร์แห่งเสรีภาพ) is stated
  **public domain**, which would settle the licence question outright. It is one
  chapter and 45 verses as of 2026-08-19 — a translation that has just begun.
  Worth asking about again later; there is nothing to carry now.
- The **Thai Bible of 1940** is not free. Its copyright may have lapsed in Thailand
  after fifty years, but in the United States a 1940 work is protected until about
  2036, so it cannot be treated as public domain here.

### ND is on, and what holds the words frozen

`ebible_licence_derivatives_forbidden_is` and
`ebible_languages_derivatives_forbidden_bible_folders` answer which shipped
translations have frozen words. They are deliberately **separate** from the
shippable question, because the two answers come apart: ND is shippable *and*
frozen; NC is unfrozen *and* refused. Folding them together is what kept ND
refused for a reason that belonged to NC.

`ebible_licence_cc_by_nd()` is now in `ebible_licences_commercial`, and the
licence baseline is at zero — no shipped translation offends any more. Three
ND translations are shipped: `turytc`, `zlmKSZI`, `polubg`.

The words are held frozen by one check at one door, not by a rule anybody has to
remember. `ebible_bible_folders_derivatives_allowed_assert` refuses a list of
folders if any of them forbids a derivative, and
`app_shared_gloss_bible_generate_generic` — the single function every gloss in
this repo is written through — asks it before doing anything else. Guarding the
choke point is total over present *and* future gloss apps, where a gate that
hand-listed callers would go stale the first time somebody added one.

`app_shared_gloss_bible_derivatives_gate_run` proves the two are joined, by
knocking on the **door** rather than on the check behind it: a check nothing
calls passes every time it is asked and protects nothing, which is exactly what
this repo left `ebible_languages_derivatives_forbidden_bible_folders` as for as
long as it existed — an answer computed and never acted on. The gate asserts the
door throws for a frozen folder and does not throw for `engbsb`.

What is *not* forbidden by ND is format. eBible's own wording grants sharing "in
any format" and forbids only "derivative works that change any of the actual
words or punctuation of the Scriptures". So colour, layout, circling a word, and
a note **beside** the verse are all free; only characters inserted into the verse
itself — a `*`, a bracket, an inline gloss — are not.

## Other sources, and how each states its terms

- **Door43 / unfoldingWord** — catalog API at `https://git.door43.org/api/v1/catalog`.
  Each resource carries an explicit SPDX-style licence field, and the unfoldingWord
  literal translations are CC BY-SA 4.0. Text ships as **USFM**, read by
  `usfm_chapters_verses` and gated by `usfm_chapters_verses_cases_gate_run`.
  `am_ulb` (Amharic, CC BY-SA 4.0, 66 books, v7.2 dated 2022-04-21, attribution
  "Original work available at https://door43.org/") replaced `amh`, which was
  CC BY-NC-ND and one of the six licence offenders.

  **How a second source is wired in.** Nothing outside these files knows there are
  two sources: `door43_versions` is the hand-written catalogue, pinned to a release
  tag, and `door43_version_or_null` is the one question that tells the sources
  apart. Five functions ask it and hand off — `ebible_version_chapters`,
  `ebible_chapter_codes`, `ebible_version_books`, `ebible_version_credit`,
  `ebible_verses_upload`. Everything downstream still knows only a folder name.

  **What a Door43 bible does not have, and what stands in for it:** no book index
  page (the books are files; the list is gathered from them, each book named from
  its own `\h` running header, so a reader sees the book's name in their own
  language), no copyright page (the credit is copied from the release's manifest
  and `LICENSE.md` into `door43_versions`, and a pinned release cannot change under
  it), and no read-aloud edition (there is nothing to cross-check, because usfm
  marks every verse exactly once — see the note below on why eBible needs two
  readings).

  Adding a second Door43 bible is one entry in `door43_versions`. Nothing else.
- **open.bible (Biblica)** — per-translation licence pages, usually CC BY-SA or
  CC BY-NC-ND. Stated clearly, but read the page: Biblica varies it by language.
- **seven1m/open-bibles** — an index rather than a source. Useful for finding a
  candidate, never for judging one; follow its link to the publisher and read the
  publisher's terms.
- **Digital Bible Library** — requires an account and per-text agreements. Nothing
  here may be assumed shippable; each text is its own negotiation.

## Worked example: the Thai KJV disagreement

Indexes list `thaKJV` as public domain, on the reasoning that a translation of the
King James Version inherits the KJV's status. eBible's own `copr.htm` for it says
otherwise, in the translator's own words:

> copyright © 2003 Philip Pope … Creative Commons Attribution-Noncommercial-No
> Derivatives license 4.0 … You do not sell this work for a profit.

The translation is a new work by a living translator, whatever it was translated
from, and the translator's terms are the ones that bind. The index is wrong.

**This is the reason the rule at the top is the rule.** An aggregator's summary is a
guess about a page it did not write; the page is the thing.
