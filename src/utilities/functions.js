export function convertPluralToSingular(plural) {
  //check the last three letters
  if ([...plural.slice(plural.length - 3, plural.length)].join("") === "ies") {
    console.log("Plural ends in 'ies'. Converting to 'y'.");
    return [...plural.slice(0, plural.length - 3), "y"].join("");
  }
  //else check if it's an "s" and remove it
  else if (plural[plural.length - 1] === "s") {
    console.log("Plural ends in 's'. Removing 's'.");
    return [...plural.slice(0, plural.length - 1)].join("");
  }
  //default leave it as it is
  return plural;
}
