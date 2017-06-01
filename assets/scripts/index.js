'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
// const resetForm = function () {
//   $('#sign-up-modal').trigger('reset')
// }
$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
  surveyEvents.addSurveyHandlers()
  $('.show-when-logged-in').hide()
  $('intro-header').show()
  $('intro-message').show()
  $('#sign-up-modal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset')
  })
  $('#sign-in-modal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset')
  })
  $('#create-questions-modal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset')
  })
  $('#change-password-modal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset')
  })
})

const authEvents = require('./auth/events.js')
const surveyEvents = require('./survey/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
