/* eslint-env mocha */
'use strict'

const chai = require('chai')
chai.use(require('dirty-chai'))
const expect = chai.expect

const Libp2p = require('../src')

describe('private network', () => {
  before(() => {
    process.env.LIBP2P_FORCE_PNET = 1
  })
  after(() => {
    delete process.env.LIBP2P_FORCE_PNET
  })

  it('enforced throws an error without a protector', () => {
    expect(() => {
      return new Libp2p({}, {})
    }).to.throw('Private network is enforced, but not protector was provided')
  })

  it('enforced succeeds with a protector', () => {
    expect(() => {
      return new Libp2p({}, {}, null, {
        protector: {}
      })
    }).to.not.throw()
  })
})
