function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}
function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
  if (string.toLowerCase(string) === string) {
    return "I can't hear you!";
  } else if (string.toUpperCase(string) === string) {
    return "YES INDEED!";
  } else if ("Let's have dinner together!" === string) {
    return "I would love to!";
  }
}
