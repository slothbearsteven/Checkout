function filter_list(l) {
  // Return a new array with the strings filtered out
  let results = []
  for (var i = 0; i < l.length; i++) {
    if (typeof l[i] == 'number') {
      results.push(l[i])
    }
  }
  return results
}

