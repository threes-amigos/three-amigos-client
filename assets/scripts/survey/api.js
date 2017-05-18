'use strict'

const config = require('../config')
const store = require('../store')

const onGetSurveys = () => {
  console.log('getUserHives Called')
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
}

const onDeleteSurvey = (id) => {
  console.log('onDeleteSurvey Called data:', id)
  return $.ajax({
    url: config.apiOrigin + '/surveys/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token}
  })
}
const onUpdateSurvey = (data, id) => {
  console.log('onUpdateSurvey Called data:', data)
  return $.ajax({
    url: config.apiOrigin + '/surveys/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token},
    data
  })
}
const onCreateQuestion = (data) => {
  console.log('onCreateQuestion data: ', data)
  console.log('store.user.token ', store.user.token)
  return $.ajax({
    url: config.apiOrigin + '/questions',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token},
    data
  })
}
const onDeleteQuestion = (data) => {
  console.log('onDeleteQuestion data: ', data)
  console.log('store.user.token ', store.user.token)
  return $.ajax({
    url: config.apiOrigin + '/questions/' + data.deleteId.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token}
  })
}
  // return $.ajax({
  //   url: config.apiOrigin + '/surveys',
  //   method: 'POST',
  //   headers: {
  //     'Authorization': 'Token token=' + store.user.token,
  //     'Content-Type': 'application/json'
  //   },
  //   data
  // })

module.exports = {
  onGetSurveys,
  onCreateSurvey,
  onDeleteSurvey,
  onUpdateSurvey,
  onCreateQuestion,
  onDeleteQuestion
}
