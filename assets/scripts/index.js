'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})
const authEvents = require('./auth/events.js')
const surveyEvents = require('./survey/events.js')
$(() => {
  authEvents.addHandlers()
  surveyEvents.addSurveyHandlers()
  $('.show-when-logged-in').hide()
  $('intro-header').show()
  $('intro-message').show()
})
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
