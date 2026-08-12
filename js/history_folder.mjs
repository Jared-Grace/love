export function history_folder() {
  "Where records of what was already found out are kept - one folder up from the working files, so nothing sweeping the data folder mistakes a record of the past for something the present depends on";
  "A record of the past spells names, and the two commands that ask whether a name is still spoken for both read every file in the data folder. So a function named once by a red gate could never be deleted again, and a rename would rewrite what a past run actually said. Measured the day this folder was made: sixty-nine commits recorded, two hundred and fifty-two live functions held undeletable by nothing but that record, and seven names in it belonging to functions already gone. Being a separate folder is the whole mechanism - those sweeps start at the data folder and never see this one.";
  let v = "history";
  return v;
}
