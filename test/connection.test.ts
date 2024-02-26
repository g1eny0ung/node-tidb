import tidb from '..'
import { describe, beforeAll, afterAll, it, expect } from 'vitest'

describe('test connection', () => {
  let connection: tidb.Connection

  beforeAll(() => {
    connection = tidb.createConnection({
      host: '127.0.0.1',
      port: 4000,
      user: 'root',
    })

    connection.connect()
  })

  afterAll(() => {
    connection.end()
  })

  it('should connect to TiDB successfully', () =>
    new Promise((done) => {
      connection.query('select tidb_version();', (err, results) => {
        if (err) {
          throw err
        }

        expect(results).not.toBeNull()
        done(results)
      })
    }))
})
