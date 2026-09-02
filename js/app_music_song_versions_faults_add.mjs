import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { property_initialize } from "./property_initialize.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { ebible_folder_references_texts } from "./ebible_folder_references_texts.mjs";
import { property_set } from "./property_set.mjs";
import { property_nested_or_null } from "./property_nested_or_null.mjs";
import { null_is } from "./null_is.mjs";
export async function app_music_song_versions_faults_add(song, wrong) {
  "$plain song";
  "Adds a fault line for each passage one song quotes from some other translation that the song rests on nowhere, or that its chosen bible hands over no words at.";
  "IT IS ASKED ONE SONG AT A TIME, AND THAT IS WHAT MAKES THE FIRST OF THE TWO QUESTIONS WORTH ASKING. The choices used to be one list for the page and were checked against every passage any song named, so a choice written under the wrong song passed as long as some other song happened to sing that verse - and the song it was written under went on being served the usual wording. Asked of the song that wrote it, the same check catches that.";
  "EVERY FAULT SAYS WHICH SONG IT IS IN. Two songs may write a choice at the same passage, and both are right; a fault line naming only the passage would send a reader looking through both lists for the one that is wrong.";
  "THE PASSAGES ARE ASKED OF EACH BIBLE TOGETHER RATHER THAN ONE AT A TIME, and that is the whole reason this is a name of its own. The reader underneath answers a list of passages several at a time, and asking it for one passage twenty-five times over turns that into twenty-five waits one after another. Measured 2026-08-26 the gate above took three and a half minutes, of which thirteen seconds were spent computing and the rest was spent waiting for one chapter at a time to come down.";
  "Twenty-five passages are seven bibles here, so seven askings answer what twenty-five were asking, and each of the seven waits on its own passages together instead of in turn.";
  "THE FAULTS COME OUT IN THE ORDER THE PASSAGES WERE WRITTEN IN, which is why the answers are gathered first and judged afterwards rather than judged as they arrive. A list of faults is read by a person against the list they wrote, and one that came out grouped by bible would make them hunt.";
  "A passage written down twice against the same bible would be asked for twice, because what is handed over is the passages as they were written rather than a set of them. Measured 2026-08-26 no such pair occurs, so nothing is spent on this today, and were one ever written the second answer would replace the first with the same words.";
  "A passage the song rests on nowhere is never asked for at all. Its choice is already wrong at that point, and asking a bible about it would only be able to add a second fault about the same line.";
  arguments_assert(arguments, 2);
  let title = property_get(song, "title");
  let versions = song.versions();
  let rested_on = song.references();
  let asking = {};
  for (let version of versions) {
    let reference = property_get(version, "reference");
    let bible_folder = property_get(version, "bible_folder");
    let rests = list_includes(rested_on, reference);
    if (not(rests)) {
      continue;
    }
    let asked = property_initialize(asking, bible_folder, []);
    list_add(asked, reference);
  }
  let folders = object_property_names(asking);
  let answers = {};
  for (let bible_folder of folders) {
    let asked = property_get(asking, bible_folder);
    let texts = await ebible_folder_references_texts(bible_folder, asked);
    property_set(answers, bible_folder, texts);
  }
  for (let version of versions) {
    let reference = property_get(version, "reference");
    let bible_folder = property_get(version, "bible_folder");
    let rests = list_includes(rested_on, reference);
    if (not(rests)) {
      list_add(wrong, {
        song: title,
        reference,
        bible_folder,
        fault:
          "this song rests on no such passage, so this choice is never reached and the usual translation is shown instead",
      });
      continue;
    }
    let text = property_nested_or_null(answers, bible_folder, reference);
    let wordless = null_is(text);
    if (wordless) {
      list_add(wrong, {
        song: title,
        reference,
        bible_folder,
        fault:
          "this bible hands over no words at this passage, so the page would draw it empty",
      });
    }
  }
}
