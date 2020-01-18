import tidb from '..'
import axios from 'axios'

describe('connection', () => {
  let connection: tidb.Connection

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
