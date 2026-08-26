import { property_nested_or_null } from "./property_nested_or_null.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { property_initialize } from "./property_initialize.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { ebible_folder_references_texts } from "./ebible_folder_references_texts.mjs";
import { property_set } from "./property_set.mjs";
import { null_is } from "./null_is.mjs";
export async function app_music_references_versions_faults_add(
  versions,
  rested_on,
  wrong,
) {
  arguments_assert(arguments, 3);
  ("Adds a fault line for each passage the music page quotes from some other translation that no song rests on, or that its chosen bible hands over no words at.");
  ("THE PASSAGES ARE ASKED OF EACH BIBLE TOGETHER RATHER THAN ONE AT A TIME, and that is the whole reason this is a name of its own. The reader underneath answers a list of passages several at a time, and asking it for one passage twenty-five times over turns that into twenty-five waits one after another. Measured 2026-08-26 the gate above took three and a half minutes, of which thirteen seconds were spent computing and the rest was spent waiting for one chapter at a time to come down.");
  ("Twenty-five passages are seven bibles here, so seven askings answer what twenty-five were asking, and each of the seven waits on its own passages together instead of in turn.");
  ("THE FAULTS COME OUT IN THE ORDER THE PASSAGES WERE WRITTEN IN, which is why the answers are gathered first and judged afterwards rather than judged as they arrive. A list of faults is read by a person against the list they wrote, and one that came out grouped by bible would make them hunt.");
  ("A passage written down twice against the same bible is asked once. The answer cannot differ between the two askings, so this loses nothing, and it is a consequence of asking by bible rather than a thing that was decided.");
  ("A passage that no song rests on is never asked for at all. Its choice is already wrong at that point, and asking a bible about it would only be able to add a second fault about the same line.");
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
        reference,
        bible_folder,
        fault:
          "no song on this page rests on this passage, so this choice is never reached and the usual translation is shown instead",
      });
      continue;
    }
    let text = property_nested_or_null(answers, bible_folder, reference);
    let wordless = null_is(text);
    if (wordless) {
      list_add(wrong, {
        reference,
        bible_folder,
        fault:
          "this bible hands over no words at this passage, so the page would draw it empty",
      });
    }
  }
}
