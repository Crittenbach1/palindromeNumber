let int = 121;

var isPalindrome = function(x) {
    array = x.toString().split(""); // turn integer into a string and then split into an array

    if (array[0] == '-' || array.length > 1 && array.reverse()[0] == "0") {
      return false; // if the first index of array is "-" OR the last index is 0, return false
    }

    reverse = parseInt(array.join("")); // reverse the array

    if (reverse === x) { // if the reversed array is equal to the original integer return true, if not return false
      return true;
    } else {
      return false;
    }

};

isPalindrome(int);
