const { test, mock } = require('tap')
const sinon = require('sinon')

const mockSum = sinon.stub()

// mock is a nice helper to allow mock require and replace some dependencies with a mock/stub/spy
const { calculator } = mock('../index', {
  '../lib': {
    sum: mockSum
  }
})

test('it should call sum when the argument of sum is provided', async (assert) => {
  mockSum.returns(1)
  const result = calculator('sum', 100)
  assert.same(result, 1)
  assert.ok(mockSum.calledOnce)
  assert.ok(mockSum.calledWith(100))
})
