const config = require('../config/config')

let dbPromise = config.getKnex()

async function createAddress (publicAddress, privateKey) {
  let db = await dbPromise
  let insertObject = {
    PublicAddress: publicAddress,
    PrivateKey: privateKey
  }
  return db('Address').insert(insertObject).then(_ => insertObject)
}

module.exports.createAddress = createAddress
