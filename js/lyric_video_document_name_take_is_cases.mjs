import { text_frozen } from "./text_frozen.mjs";
export function lyric_video_document_name_take_is_cases() {
  "Lyric video document names, each with whether the name says it is a superseded take.";
  "★ A WRONG YES IS THE ANSWER THAT DOES HARM, SO THE VERSION IN USE GETS A CASE OF EVERY SHAPE IT COMES IN. Answering yes about the document in use lets a repair take a picture out of a video somebody is about to render, and nothing downstream can tell that from a psalm whose scenes were never drawn. Answering no about a real take only leaves a stale name in the giveaway, which a report already says out loud. So the two shapes the live name actually takes on this disk - a verse range, and a whole chapter with no range at all - are both asked about, rather than one standing in for the other.";
  "The names are the names on the disk rather than invented ones, because the thing being tested is a rule read off how this repo files its own documents, and a made-up name can agree with a rule the real files break.";
  let cases = [
    {
      name: "a take of a verse range is a take",
      asked: text_frozen("bsb_PSA_149_1-5_take1"),
      take: true,
    },
    {
      name: "a later take is a take",
      asked: text_frozen("bsb_PSA_91_9-16_take3"),
      take: true,
    },
    {
      name: "a two digit take is a take",
      asked: text_frozen("bsb_PSA_91_9-16_take10"),
      take: true,
    },
    {
      name: "the verse range version in use is not a take",
      asked: text_frozen("bsb_PSA_91_9-16"),
      take: false,
    },
    {
      name: "the whole chapter version in use is not a take",
      asked: text_frozen("bsb_PSA_94"),
      take: false,
    },
    {
      name: "the bare word with no number is not a take",
      asked: text_frozen("bsb_PSA_91_9-16_take"),
      take: false,
    },
    {
      name: "the word anywhere but the end is not a take",
      asked: text_frozen("bsb_PSA_91_take1_9-16"),
      take: false,
    },
  ];
  return cases;
}
