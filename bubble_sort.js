'use strict'

function bubbleSort(items) {
   for (var i = items.length-1; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(items[j-1]>items[j]){
           var temp = items[j-1];
           items[j-1] = items[j];
           items[j] = temp;
        }
     }
   }
   return items;
}


// Driver code
function main() {

  sort_from_file('test_sortwordlist.txt')
  // sort_from_file('random_wordlist.txt')
  // sort_from_file('reversed_wordlist.txt')
  // sort_from_file('sorted_wordlist.txt')

}

function sort_from_file(filename) {
  let fs = require('fs')

  fs.readFile(filename, (err, data) => {

    if (err)
      return console.log(err)

    let items = data.toString()
      .split("\n")

    console.log(filename)
    console.log("--------")
    console.log(bubbleSort(items))

  })
}

main()
