import 'babel-register'
import 'babel-polyfill'
import { expect, assert } from 'chai'
import sinon from 'sinon'
import { shallow, mount } from 'enzyme'

global.document = require('jsdom').jsdom('<body><div id="app"></div></body>')
global.window = document.defaultView
global.navigator = window.navigator
global.expect = expect
global.assert = assert
global.sinon = sinon
global.shallow = shallow
global.mount = mount
