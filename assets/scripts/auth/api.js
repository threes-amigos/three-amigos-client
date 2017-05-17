'use strict'

const config = require('../config')
const store = require('../store')

const signUp = (data) => {
  // console.log('signUp in api called')
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}
const signIn = (data) => {
  // console.log('Api:signIn called')
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}
const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiOrigin + '/change-password/' + store.user.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const signOut = (data) => {
  // console.log('Api:sign OUT called')
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token}
  })
}

const onGetSurveys = () => {
  // console.log('getUserHives Called')
  return $.ajax({
    url: config.apiOrigin + '/surveys',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token}
  })
}

const onCreateSurvey = (data) => {
  console.log('onCreateSurvey data: ', data)
  console.log('store.user.token ', store.user.token)
  return $.ajax({
    url: config.apiOrigin + '/surveys',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token},
    data
  })
  // return $.ajax({
  //   url: config.apiOrigin + '/surveys',
  //   method: 'POST',
  //   headers: {
  //     'Authorization': 'Token token=' + store.user.token,
  //     'Content-Type': 'application/json'
  //   },
  //   data
  // })
}
module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  onGetSurveys,
  onCreateSurvey
}
