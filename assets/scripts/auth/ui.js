'use strict'

const store = require('../store')
const surveysUI = require('../survey/ui.js')
const surveysAPI = require('../survey/api.js')
const signUpSuccess = (data) => {
  console.log('signUpSuccess called: ', data)
  // Clear the form data entered
  $('#sign-up').trigger('reset')
  $('#sign-up-modal').toggle()
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  showModalMessage('You have signed up.  Please sign in.')
  // $('#sign-out-navbar').show()
  // $('#change-password-navbar').show()
  // $('#sign-up-navbar').hide()
  // $('#sign-in-navbar').hide()
  // $('.sign-in').addClass('hidden')
}

const signUpFailure = (error) => {
  $('#sign-up').trigger('reset')
  $('#sign-up-modal').toggle()
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  // $('#sign-up-modal').toggle()
  // $('body').removeClass('modal-open')
  // $('.modal-backdrop').remove()
  showModalMessage('Your sign-up was not successful.  Try again.')
  console.error(error)
}

const signInSuccess = (data) => {
  console.log('Sign-in success: ', data)
  // Clear the form data entered
  $('#sign-in').trigger('reset')
  store.user = data.user
  console.log('Token: ', store.user.token)
  $('#sign-in-modal').toggle()
  // $('.first-display').addClass('hidden')
  $('.btn-default').show()
  $('.sign-in').hide()
  $('.sign-out').show()
  $('.change-password').show()
  $('.sign-up').hide()
  $('.show-when-logged-in').show()
  // $('.change-password').removeClass('hidden')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  // get the user's surveys and display them
  surveysAPI.onGetSurveys()
    .then(surveysUI.getSurveysSuccess)
    .catch(surveysUI.getSurveysFailure)
  showModalMessage('You have signed in.  Survey Time!')
}

const signInFailure = (error) => {
  console.log('Sign In Failure')
  $('#sign-in').trigger('reset')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  showModalMessage('Your sign-in was not successful.  Try again.')
  console.error(error)
}
const signOutSuccess = () => {
  console.log('Sign Out success: ')
  // clean up the stored value
  store.user = null
  $('#sign-out-modal').toggle()
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  showModalMessage('You have signed out.  Bye!')
  $('.sign-in').show()
  $('.sign-out').hide()
  $('.change-password').hide()
  $('.sign-up').show()
  $('.btn-default').hide()
  // don't show User's surveys
  $('#userSurveys').empty()
  $('#allTakeSurveys').empty()
  $('.show-when-logged-in').hide()
  $('.dashboard-content').empty()
}
const signOutFailure = (error) => {
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  showModalMessage('Your sign-out was not successful.  Hmmm.')
  console.error(error)
}
const changePasswordSuccess = () => {
  // Clear the form data entered
  console.log('Change Password success')
  $('#change-password').trigger('reset')
  $('#change-password-modal').toggle()
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  showModalMessage('You have changed your password. Carry on!')
}
const changePasswordFailure = (error) => {
  console.log('Change Password Out Failure')
  $('#change-password').trigger('reset')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  showModalMessage('Your password change was not successful.  Try again.')
  console.error(error)
}

const showModalMessage = function (message) {
  $('#infoModalText').text(message)
  $('#infoModal').modal('show')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutFailure,
  signOutSuccess,
  changePasswordFailure,
  changePasswordSuccess,
  showModalMessage
}
