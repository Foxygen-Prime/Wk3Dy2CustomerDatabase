// console.log((customers));
// const cust = customers.results;
// console.log(customers.results[0]);
// console.log(cust[0].name.first);
// let firstName = cust[0].name.first;
// console.log(cust[0].name.last);
// let lastName = cust[0].name.last;
// let fullName = `${firstName} ${lastName}`;
// console.log('fullName', fullName);
//
// for (let i = 0; i < cust.length; i++) {
//   let firstName = cust[i].name.first;
//   let lastName = cust[i].name.last;
//   let fullName = `${firstName} ${lastName}`;
//   console.log('Customer Number', i+1, fullName);
// }


//variables//
const cust = customers.results;
let custImg = cust[i].picture.large;
let custFirstName = cust[i].name.first;
let custLastName = cust[i].name.last;
let custFullName = `${custFirstName} ${custLastName}`;
let custEmail = cust[i].email;
let custAddress1 = cust[i].location.street
let custAddCity = cust[i].location.street.city
let custAddState = cust[i].location.street.state
let custAddZip = cust[i].location.street.postcode
let custAddress2 = `${custAddCity} ${custAddState} ${custAddZip}`;
let custPhone = cust[i].phone
let custSSN = cust[i].id.value

//template//
let employeeProfiles = `
  <img src="${custImg}" alt="">
  <h3>${custFullName}</h3>
  <p${custEmail}
  <div class="contact">
    <p class = "custoAddyPh">${custAddress1}</p>
    <p class = "custoAddyPh">${custAddress2}</p>
    <p class = "custoAddyPh">${custPhone}</p>
  </div>
  <p class = custoSoc> ${custSSN}</p>
`
// loop //
