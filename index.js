'use strict'
const Hapi = require('@hapi/hapi')
const Joi = require('joi')
const sampleData = {
  "content": [
    {
      "id": "efa289b2-3565-42e6-850b-8dad25727e99",
      "date": "2018-01-31T12:42:11.000+0000",
      "date_available": null,
      "is_recurring": false,
      "is_cleansed": true,
      "is_disputed": false,
      "is_read": true,
      "portfolio_id": "8ec467e6-6faa-4916-b380-6af0b21a34cc",
      "model_id": null,
      "price": null,
      "quantity": null,
      "currency_code": "USD",
      "amount": 8.75,
      "balance": null,
      "merchant_id": null,
      "mid": null,
      "merchant": "Starbucks",
      "merchant_category_code": null,
      "transaction_category_id": null,
      "category": "Food & Beverage",
      "subcategory": null,
      "description": null,
      "memo": null,
      "status": null,
      "location": {},
      "check": {},
      "funding_id": null,
      "security_id": null,
      "transaction_code_id": "f5af397b-7d22-433f-b01e-8202184a6386",
      "create_date": "2018-02-07T19:29:37.000+0000",
      "update_date": "2018-02-012T09:00:00.000+0000"
    },
    {
      "id": "efa289b2-3565-42e6-850b-8dad25727e24",
      "date": "2018-01-31T06:30:00.000+0000",
      "date_available": null,
      "is_recurring": false,
      "is_cleansed": false,
      "is_disputed": false,
      "is_read": true,
      "portfolio_id": "8ec467e6-6faa-4916-b380-6af0b21a34cc",
      "model_id": null,
      "price": null,
      "quantity": null,
      "currency_code": "USD",
      "amount": 12.10,
      "balance": null,
      "merchant_id": null,
      "mid": null,
      "merchant": null,
      "merchant_category_code": null,
      "transaction_category_id": null,
      "category": null,
      "subcategory": null,
      "description": "Mcdonald's #4572",
      "memo": null,
      "status": null,
      "location": {},
      "check": {},
      "funding_id": null,
      "security_id": null,
      "transaction_code_id": "f5af397b-7d22-433f-b01e-8202184a6386",
      "create_date": "2017-08-02T04:30:25.000+0000",
      "update_date": "2017-11-18T09:00:00.000+0000"
    }
  ],
    "total_pages": 1,
    "total_elements": 2,
    "last": true,
    "sort": [
        {
            "direction": "DESC",
            "property": "id",
            "ignore_case": false,
            "null_handling": "NATIVE",
            "descending": true,
            "ascending": false
        }
    ],
    "first": true,
    "number_of_elements": 2,
    "size": 25,
    "number": 2
}
const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  })
  server.route({
    method: 'GET',
    path: '/card/{card_id}/transaction',
    handler: (request, h) => {
      console.log(`REQUEST GET /card/${request.params.card_id}/transaction`)
      console.log(`RESPONSE ${JSON.stringify(sampleData)}`)
      return sampleData
    },
    options: {
      validate: {
        params: Joi.object({
          card_id: Joi.string().min(10).max(50)
        })
      }
    }
  })
  await server.start()
  console.log('Server running on %s', server.info.uri)
}
process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})
init()
