const sum = require('../sum')

it('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

it('dataから!nullの値を取得できる条件文のテスト', () => {
  const data = {
    test1: 'a',
    test2: [],
    test3: ['1'],
    test4: '',
    test5: null
  }
  const expected = {
    test1: 'a',
    test3: ['1']
  }
  let actual = {}
  for (let [key, val] of Object.entries(data)) {
    if (val && val.length > 0) {
      actual[key] = val
    }
  }
  expect(actual).toEqual(expected)
})
