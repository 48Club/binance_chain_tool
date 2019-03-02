const db = require('./utilities/db')
const ad = require('./blockchain/address')

function newAddress () {
  const newAddress = ad.generateAddress()
  return db.createAddress(newAddress[0], newAddress[1]).then(res => {
    return res
  })
}

(async () => {
  for (let i = 0; i < 20000; i++) {
    const res = await newAddress()
    console.log(res)
  }
})()
