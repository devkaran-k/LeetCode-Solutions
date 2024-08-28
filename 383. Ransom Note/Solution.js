/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  ransomNote = Array.from(ransomNote.toLowerCase());
  magazine = Array.from(magazine.toLowerCase());
  for (let key of ransomNote) {
    if (magazine.includes(key) == false) {
      return false;
    } else {
      let index = magazine.indexOf(key);

      //  console.log(magazine.splice(index, 1));
      magazine.splice(index, 1);
      console.log(magazine);
    }
  }

  return true;
};

console.log(canConstruct("a", "b"))