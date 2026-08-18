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

### The ND change rescues nobody currently shipped

Measured 2026-08-18. All three translations the licence gate refuses are refused
for **non-commercial**, not for ND:

| folder | language | terms | why refused |
| --- | --- | --- | --- |
| `thaKJV` | Thai | CC BY-NC-ND 4.0 — "You do not sell this work for a profit" | non-commercial |
| `wolmbs` | Wolof | CC BY-NC-ND 4.0 (stated in French) | non-commercial |
| `amh` | Amharic | UBS — "Every commercial use … needs written permission" | non-commercial |

Accepting ND *adds* three translations that were previously refused, all CC BY-ND
4.0 with no non-commercial clause: `turytc` (Turkish), `zlmKSZI` (Malay),
`polubg` (Polish, Updated Gdańsk).

Thai and Wolof therefore need a source that is not eBible, or they come out of the
shipped list. Amharic has one: see below.

## Other sources, and how each states its terms

- **Door43 / unfoldingWord** — catalog API at `https://git.door43.org/api/v1/catalog`.
  Each resource carries an explicit SPDX-style licence field, and the unfoldingWord
  literal translations are CC BY-SA 4.0. Text ships as **USFM**, which nothing in
  this repo reads yet — that parser is the whole cost of using this source.
  `am_ulb` (Amharic, CC BY-SA 4.0, 66 books, v7.2 dated 2022-04-21, attribution
  "Original work available at https://door43.org/") is the replacement for `amh`.
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
