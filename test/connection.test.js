const tidb = require('..')
const axios = require('axios')

describe('TiDB connection', () => {
  let connection

  beforeAll(() => {
    connection = tidb.createConnection({
      host: 'localhost',
      port: 4000,
      user: 'root'
    })
  })

  afterAll(() => {
    connection.end()
  })

  it('successful connection without password', done => {
    connection.connect(async () => {
      const status = await axios.get('http://localhost:10080/status')

      expect(status.data.connections).toBe(1)
      done()
    })
  })
})
