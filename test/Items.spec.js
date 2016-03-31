/* eslint-env mocha */
const React = require('react')
const { expect } = require('chai')
const { shallow } = require('enzyme')
const Item = require('../app/components/Item')
// const Lists = require('../../app/components/Lists')

//////////////////////////////////////////////////////
// dummy tests
//////////////////////////////////////////////////////

describe('<Item />', () => {
  it('should pass', () => {
    expect(1 + 1 === 2).to.be.true
  })
  it('should not pass', () => {
    expect(1 + 2 === 2).to.not.be.true
  })
})

//////////////////////////////////////////////////////
// real tests
//////////////////////////////////////////////////////

describe('<Item />', () => {
  it('should be able to create an item', () => {

  })
})
