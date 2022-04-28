export interface User {
  "id": 1,
  "name": string,
  "username": string,
  "email": string,
  "address": addressSchema,
  "phone": string,
  "website": string,
  "company": companySchema
}
export interface companySchema {
  "name": string,
  "catchPhrase": string,
  "bs": string
}

export interface addressSchema {
  "street": string,
  "suite": string,
  "city": string,
  "zipcode": string,
  "geo": {
    "lat": string,
    "lng": string
  }
}
