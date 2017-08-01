console.log((customers));
const cust = customers.results;
console.log(customers.results[0]);
console.log(cust[0].name.first);
let firstName = cust[0].name.first;
console.log(cust[0].name.last);
let lastName = cust[0].name.last;
let fullName = `${firstName} ${lastName}`;
console.log('fullName', fullName);

for (let i = 0; i < cust.length; i++) {
  let firstName = cust[i].name.first;
  let lastName = cust[i].name.last;
  let fullName = `${firstName} ${lastName}`;
  console.log('Customer Number', i+1, fullName);
}
