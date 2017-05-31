'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const store = require('../store')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  // console.log('Data is:', data)
  event.preventDefault()
  if (data.credentials.password !== data.credentials.password_confirmation) {
    // console.log('error with passwords')
    ui.showModalMessage('Passwords do not match')
    $('#sign-up').trigger('reset')
  } else {
    api.signUp(data)
      .then(ui.signUpSuccess)
      .catch(ui.signUpFailure)
  }
}
const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log('events onSignIn data: ', data)
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.signInFailure)
}
const onSignOut = (data) => {
  event.preventDefault()
  // console.log('events onSignOut called')
  if (store.user == null) {
    console.log('invalid because not signed out; No One to Sign Out')
    return
  }
  // console.log('Api:sign OUT called')
  api.signOut()
  .then(ui.signOutSuccess)
  .catch(ui.signOutFailure)
}
const onChangePassword = function (event) {
  // console.log('onChangePassword called')
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log('events onChangePassword called', data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out-navbar').hide()
  $('#change-password-navbar').hide()
}
module.exports = {
  addHandlers
}
