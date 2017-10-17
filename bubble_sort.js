'use strict'

function bubbleSort(items) {
  let temp;
  let index = 0;

  while (index < items.length) {
    for (let i = 0; i < items.length; i++) {
      if (items[i] > items[i + 1]) {
        temp = items[i]
        items[i] = items[i + 1]
        items[i + 1] = temp
      }
    }
    index++
  }
  return items;
}


// Driver code
function main() {

  sort_from_file('random_wordlist.txt')
  sort_from_file('reversed_wordlist.txt')
  sort_from_file('sorted_wordlist.txt')

}

function sort_from_file(filename) {
  let fs = require('fs')

  fs.readFile(filename, (err, data) => {

    if (err)
      return console.log(err)

    let items = data.toString()
      .split("\r\n")

    console.log(filename)
    console.log("--------")
    console.log(bubbleSort(items))

  })
}

main()
