const mongoose = require('mongoose')
const externalapis = require('../external-apis')

const Receipt = new mongoose.Schema({
  item: String,
  fiatUsed: String,
  cryptocurrencyUsed: String,
  priceFiat: Number,
  priceCryptocurrency: Number, //in weis
  exchangeRate: Number,
  TimeStamp: Date,
  block: Number,
  hash: String
})

// Receipt.pre('save', () => {
//   return externalapis.rateETHtoEUR()
//   .then((res) => Receipt.exchangeRate = res)
//   .then(() => {
//       let fiat = Receipt.priceFiat
//       let rate = Receipt.exchangeRate
//       console.log(Receipt, "fiat:", Receipt.priceFiat, "rate:", Receipt.exchangeRate);
//       Receipt.priceCryptocurrency = fiat * rate
//     })
//   .then(() => console.log(Receipt.priceCryptocurrency))
// })


module.exports = mongoose.model('Receipt', Receipt);
