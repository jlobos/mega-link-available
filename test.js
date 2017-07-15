import test from 'ava'
import available from './index'

test('is available', async t => {
  const fixtures = [
    'https://mega.nz/#F!lg8WibJY!8auQ5Col_rVfEzG2eaZRDQ',
    'https://mega.nz/#!phknATgQ!4a68sHcwfqMPKCXiPGqur7HLgaOysaCNSMK0QnQ9XL8'
  ]

  for (const link of fixtures) {
    t.true(await available(link))
  }
})

test('not available', async t => {
  const fixtures = [
    'https://mega.nz/#!vAZ0XbqR!TKhT4kZpfRtanihHGa3SAG7TYqdcTTCAIeJ83zs7_dI'
  ]

  for (const link of fixtures) {
    t.false(await available(link))
  }
})
