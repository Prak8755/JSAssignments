// /21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const countries = ["Australia", "Ethiopia", "New Zealand"];
let country = "Ethiopia"
const check = countries.includes(country);
if (check){
    console.log(country.toUpperCase());
} else{
    const include = countries.push(country)
    console.log(countries)
}