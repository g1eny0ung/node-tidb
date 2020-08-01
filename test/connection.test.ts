import tidb from '..'

describe('connection', () => {
  let connection: tidb.Connection

  beforeAll(() => {
    connection = tidb.createConnection({
      host: 'localhost',
      port: 4000,
      user: 'root'
    })
    connection.connect()
  })

  afterAll(() => {
    connection.end()
  })

  it('successful connection without password', done => {
    connection.query('SELECT tidb_version();', (err, results) => {
      if (err) {
        throw err
      }

      expect(results).not.toBeNull()
      done()
    })
  })
})
