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

const onDeleteSurvey = (data) => {
  console.log('onDeleteSurvey Called data:', data)
  return $.ajax({
    url: config.apiOrigin + '/surveys/' + data.deleteId.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token}
  })
}
const onUpdateSurvey = (data) => {
  console.log('onUpdateSurvey Called data:', data)
  return $.ajax({
    url: config.apiOrigin + '/surveys/' + data.survey.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token},
    data
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
  onUpdateSurvey
}
