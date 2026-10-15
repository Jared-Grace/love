import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_documents_read } from "./lyric_video_documents_read.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_video_bible_document_name_read_or_null } from "./lyric_video_bible_document_name_read_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_single_message } from "./list_single_message.mjs";
export async function lyric_video_documents_version() {
  arguments_assert(arguments, 0);
  ("The one translation every timing document on this disk names, or a stop where the documents do not all name the same one.");
  ("★ IT IS READ OFF THE DOCUMENTS RATHER THAN TYPED, BECAUSE A PLACE THAT TYPES IT IS A PLACE THAT CAN BE WRONG WHILE NOTHING GOES RED. The word is wanted for building what a video is called, and a video named with the wrong translation is not an error anywhere - it is a file that simply is not found beside its song, and a caller looking for it gets an empty answer and no reason. The documents are the thing the word is a fact about: each one is addressed by its translation, so the folder already holds the answer and cannot disagree with itself.");
  ("★ IT INSISTS ON ONE AND STOPS ON TWO, WHICH IS THE WHOLE REASON THIS IS A FUNCTION AND NOT A WORD TYPED WHERE IT IS WANTED. Every one of the timing documents on this disk names bsb today, and a caller asking for the translation these were timed in is asking something that only has an answer while that stays true. The day a second translation is timed, a typed word would go on answering for the first and quietly leave the second's videos unreachable; stopping is what makes somebody say which of the two was meant, and a stop is cheap where a silent wrong answer is not.");
  ("A name this cannot place is passed over rather than stopping it, because a gate already insists every timing document's name can be read back, and a second refusal here would only say the same thing somewhere worse.");
  let held = await lyric_video_documents_read();
  let words = [];
  for (let one of held) {
    let name_document = property_get(one, "name");
    let read = lyric_video_bible_document_name_read_or_null(name_document);
    let unread_is = null_is(read);
    if (unread_is) {
      continue;
    }
    let word = property_get(read, "version");
    list_add(words, word);
  }
  let unique = list_unique(words);
  let only = list_single_message(unique, {
    hint: "the timing documents do not all name one translation, so there is no single one for a video name to be built from - say which translation was meant",
    versions: unique,
  });
  return only;
}
