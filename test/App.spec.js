import React from 'react'
import App from '../app/components/App'

describe('<App />', () => {
  it('should contain a + button on the home page', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('.add-list')).to.have.length(1)
    expect(wrapper.find('button')).to.have.length(1)
  })

  it('should add a list on click', () => {
    const onButtonClick = sinon.spy()
    const wrapper = mount(<App onButtonClick={onButtonClick}/>)
    wrapper.find('.add-list').simulate('click')
    // Eventually change the text here, it has the ++ and x from buttons
    expect(wrapper.text()).to.equal('++New Shopping Listx')
  })
})
