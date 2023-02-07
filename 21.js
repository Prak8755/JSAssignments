// /21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const countries = ['India', 'USA', 'UK', 'China','ETHIOPIA','Ethiopia'];

// check if 'Ethiopia' exists in the countries array
if (!countries.includes('Ethiopia')) {
  // if it does not exist, add it to the countries list
  countries.push('Ethiopia');
  console.log('Ethiopia added to the countries list');
} else {
  console.log('ETHIOPIA');
}
console.log(countries);