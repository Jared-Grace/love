import { arguments_assert } from "./arguments_assert.mjs";
export function firebase_hosting_stages_unsent() {
  "The folders under the one that is sent which must never reach the public internet, spelled the way the sending asks to be told to leave a folder behind.";
  "There are three stages and only the last of them is finished. The first is where a change is tried out and is meant to be broken, and it sits inside the folder that goes out whole, so leaving it behind has to be said rather than assumed.";
  "The second stage was here too until 2026-08-27, and was taken out the same day it was put in. What decided it is where a browser keeps what it saves: it is kept per address, so a build reached at a different address is handed no saved progress at all and none of the words this app has already written into storage. Judging that build then means starting from nothing, which is not the thing anybody wants to look at. Served under the same address as the finished app, it shares the saving, and a person can open the change with their own progress already in it.";
  "That sharing is the price as well as the point. A build standing here writes into the very same saving the finished app reads, so one that changes the shape of what is saved can spoil what the finished app then finds - and it does it to a person who never asked to be testing anything. Whoever puts a build here owns that.";
  "The address is guessable, and a build standing here is by definition one believed ready and not yet agreed to be. That was the whole reason this folder was named here in the morning; it is named as a cost now rather than settled, because the human weighed it against the saving and chose.";
  arguments_assert(arguments, 0);
  let folders = ["dev/**"];
  return folders;
}
