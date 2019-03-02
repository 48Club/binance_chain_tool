const BnbApiClient = require('@binance-chain/javascript-sdk')

function generateAddress () {
  const privateKey = BnbApiClient.crypto.generatePrivateKey()
  const publicAddress = BnbApiClient.crypto.getAddressFromPrivateKey(privateKey)
  return [publicAddress, privateKey]
}

module.exports.generateAddress = generateAddress
