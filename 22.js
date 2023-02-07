/*The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method*/


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages);

// Sort the array
ages.sort((a, b) => a - b);

// Find the min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Find the median age
let medianAge;
if (ages.length % 2 === 0) {
    medianAge = (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2;
} else {
    medianAge = ages[Math.floor(ages.length / 2)];
}

// Find the average age
let sum = 0;
ages.forEach(age => {
    sum += age;
});
const averageAge = sum / ages.length;

// Find the range of ages
const range = maxAge - minAge;

// Compare the value of (min - average) and (max - average)
const minDiff = Math.abs(minAge - averageAge);
const maxDiff = Math.abs(maxAge - averageAge);
console.log(`min: ${minAge}\n max: ${maxAge}\n median: ${medianAge}\n average: ${averageAge}\n range: ${range}\n minDiff: ${minDiff} \nmaxDiff: ${maxDiff}`)