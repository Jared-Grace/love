import { path_dirname } from "./path_dirname.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { song_image_glass_width } from "./song_image_glass_width.mjs";
import { song_image_kept_large_asset_path } from "./song_image_kept_large_asset_path.mjs";
import { song_image_glass_width_large } from "./song_image_glass_width_large.mjs";
import { song_image_couplets_hash_name } from "./song_image_couplets_hash_name.mjs";
import { lyric_video_song_document_read } from "./lyric_video_song_document_read.mjs";
import { song_image_glass_light_filters } from "./song_image_glass_light_filters.mjs";
import { song_image_glass_credentials_sources } from "./song_image_glass_credentials_sources.mjs";
import { song_image_glass_path } from "./song_image_glass_path.mjs";
import { ffmpeg_image_filter_write } from "./ffmpeg_image_filter_write.mjs";
import { property_get } from "./property_get.mjs";
import { image_content_credentials_copy } from "./image_content_credentials_copy.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { song_image_couplet_kept } from "./song_image_couplet_kept.mjs";
import { song_image_couplet_key } from "./song_image_couplet_key.mjs";
import { song_image_couplets } from "./song_image_couplets.mjs";
import { song_image_kept_asset_path } from "./song_image_kept_asset_path.mjs";
import { web_assets_folder_join } from "./web_assets_folder_join.mjs";
export async function song_image_kept_publish() {
  "Writes every couplet's stained-glass picture - the one its line shows in the lyric video - into the assets folder, shrunk for a phone and carrying the credentials of the drawing it came from, which is where the upload reads from and where a reader's browser ends up fetching it.";
  "IT PUBLISHES THE STAINED GLASS AND NOT THE FLAT DRAWING THE GLASS WAS MADE FROM, because the human asked for the page to show the pictures the video shows. The page showed the flat drawings until the video was made; they stay where they were drawn, and the address a reader fetches is the same address it was, so nothing that links to a picture has to change.";
  "IT FINDS ITS OWN SET rather than being handed one, so it cannot be run against a stale list. Every couplet is asked which attempt it settled on, and the ones that have settled on none are simply not written - which is also what makes it safe to run at any moment, part way through choosing.";
  "IT REDRAWS RATHER THAN COPIES, and the reason is a phone on a house network. Copied whole, the flat set that stood here before was thirteen megabytes and the person it was drawn for watched the pictures paint downwards a line at a time; the stained glass the video was made from is over four hundred. So each one is shrunk and cut to fewer colours by the filters the glass is given, which keeps the set to a few megabytes on pictures nobody can tell apart from the originals at the size the page shows them.";
  "THE CREDENTIALS ARE CARRIED FROM THE ORIGINAL DRAWING AND NOT FROM THE PICTURE THE COPY IS MADE FROM, because the sharpened pictures the video was made from carry none - the sharpening dropped them, as most of the lightening before it had - and the terms these pictures are drawn under forbid dropping them. Which drawing each one came from is a list somebody wrote, read once before the loop.";
  "THE CUT HAPPENS HERE AND NOT WHERE THE PICTURES ARE DRAWN, so every attempt ever drawn is kept exactly as it arrived. Only what is published is reduced, which means a different attempt can be chosen later and cut afresh, and nothing that was drawn is ever thrown away to make a page load faster.";
  "WRITING IS NOT PUBLISHING. This only puts the file where the uploader will find it; nothing a reader can reach changes until the assets are uploaded. The two are apart on purpose, because this half is cheap and reversible and the upload is neither.";
  "THE ATTEMPTS STAY WHERE THEY ARE, all of them, kept out of the repo's history. Only the chosen ones are written in, because those are the ones a cut has actually used - which is the line the folder of attempts was drawn along in the first place.";
  arguments_assert(arguments, 0);
  let couplets = song_image_couplets();
  let published = [];
  let unchosen = [];
  let sources = await song_image_glass_credentials_sources();
  let song_name = song_image_couplets_hash_name();
  let document = await lyric_video_song_document_read(song_name);
  for (let couplet of couplets) {
    let n = couplet.n;
    let kept = song_image_couplet_kept(n);
    let none = equal(kept, 0);
    if (none) {
      list_add(unchosen, n);
      continue;
    }
    let key = song_image_couplet_key(n);
    let glass = song_image_glass_path(key, "chosen_2x");
    let asset_path = song_image_kept_asset_path(n);
    let destination = web_assets_folder_join(asset_path);
    let property_name = String(key);
    let source = property_get(sources, property_name);
    let original = song_image_glass_path(key, source);
    let width = song_image_glass_width();
    let filters = song_image_glass_light_filters(document, key, width);
    await ffmpeg_image_filter_write(glass, filters, destination);
    await image_content_credentials_copy(original, destination);
    list_add(published, asset_path);
    let large_path = song_image_kept_large_asset_path(n);
    let large_destination = web_assets_folder_join(large_path);
    let large_folder = await path_dirname(large_destination);
    await folder_exists_ensure(large_folder);
    let large_width = song_image_glass_width_large();
    let large_filters = song_image_glass_light_filters(
      document,
      key,
      large_width,
    );
    await ffmpeg_image_filter_write(glass, large_filters, large_destination);
    await image_content_credentials_copy(original, large_destination);
    list_add(published, large_path);
  }
  let result = {
    published,
    unchosen,
  };
  return result;
}
