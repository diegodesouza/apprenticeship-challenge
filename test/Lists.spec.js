/* eslint-env mocha */
const React = require('react')
const { expect } = require('chai')
const { shallow } = require('enzyme')
const Lists = require('../app/components/Lists')

//////////////////////////////////////////////////////
// dummy tests
//////////////////////////////////////////////////////

describe('<Lists />', () => {
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

describe('<Lists />', () => {
  it('should contain a + button on the home page', () => {
    const wrapper = shallow(<Lists />)
    expect(wrapper.contains(<button>+</button>)).to.be.true
  })
})
