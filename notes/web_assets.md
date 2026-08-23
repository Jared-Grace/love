# Pictures and data files: `web_assets/`, not `public/`

**Where they live now.** Every picture and every data file a browser fetches sits in the repo folder **`web_assets/`** — at the repo root, *outside* `public/` — and is uploaded to Firebase Storage under the matching **`web_assets/`** prefix. The two layouts are the same string, deliberately: `web_assets/img/game/tiles/seamless/grass.png` on disk is `web_assets/img/game/tiles/seamless/grass.png` in storage.

What moved, on 2026-08-23:

| was | is |
| --- | --- |
| `public/img/**` | `web_assets/img/**` |
| `public/bible/uplifting/references.json` | `web_assets/bible/uplifting/references.json` |
| `public/replace_card.png` | `web_assets/app/replace/replace_card.png` |
| `public/verses-192.png`, `public/verses-512.png` | `web_assets/app/verses/…` |

**Why.** `public/` is what hosting deploys, so every one of those 559 files rode along in every deploy of every app. They are not code, they change on their own schedule, and a change to one of them should reach a reader without a deploy. Storage gives that, and the repo copy stays under version control so storage is never the only copy.

## Never spell an address — ask for one

Storage writes the slashes in a download address as `%2F`. **So there is no such thing as a folder prefix you can stick the rest of a path onto** — the whole path has to be built first and encoded once. Every builder here therefore takes the *whole* remaining path and hands back the *whole* address:

- `web_assets_url(path)` — any asset.
- `web_assets_img_url(path)` — under `img/`.
- `g_img_game_url(path)` — under `img/game/`, the game's art.
- `web_assets_bible_uplifting_url(file_name)` — under `bible/uplifting/`.
- `web_assets_app_img_url(app_name, img_name)` — one app's own picture (link card, installed-app icons).

The single spellings, each the one edit that moves a folder: `web_assets_folder_name` (`web_assets`), `web_assets_img_folder_name` (`img`), `web_assets_bible_uplifting_folder_name` (`bible/uplifting`), `web_assets_app_folder_name` (`app`).

On-disk twins, for anything that *writes* an asset: `web_assets_folder()` and `web_assets_folder_join(path)` — the same piece of path that names the storage end.

## Writing a new asset

1. Put the file under `web_assets/…` (or write it there with `web_assets_folder_join`).
2. Send it up: `node scripts/ai.mjs web_assets_upload_all` mirrors the whole folder (total and idempotent — writing a file that is already there leaves it as it was), or `web_assets_upload(path)` for one.
3. A command that *generates* an asset should upload it in the same breath — `pwa_icons_write`, `app_replace_card_image_write` and `uplifting_references_write` all do. A generated file left in the repo looks done and changes nothing for anybody.

Uploads go through `firebase_upload_settings`, not `firebase_upload_generic`: the generic one merges a `cacheControl: "no-cache"` default **strictly**, so any caller that says anything about metadata collides with it rather than replacing it. Assets are written with `file_content_type(path)` and `cache_control_asset_value()` — answer from the kept copy at once, revalidate afterwards — and `resumable: false`, without which a run of large pictures fails every retry with no reason given.

## Reading is public, and that is deployed state

`storage.rules` grants `match /web_assets/{allPaths=**} { allow read; }`. A rule in the file is not a rule in force: deploy it with `firebase_deploy_storage_only`, and `storage_rules_gate_run` (in `q`) is what proves it landed.

## Two things deliberately left alone

- **The uplifting verse-text packages stay at `bible/uplifting/<folder>.json`** in storage, under the older readable `bible/` prefix — they were never in `public/` and moving them would mean regenerating them. So that one name is spelled in two places: `uplifting_package_destination` for the packages, `web_assets_bible_uplifting_folder_name` for the references list beside them.
- **`public/` still holds the built pages and bundles.** Only things a browser *fetches as content* moved.
