'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onGetSurveys = function (event) {
  console.log('onGetSurveys called')
  event.preventDefault()
  api.onGetSurveys()
    .then(ui.getSurveysSuccess)
    .catch(ui.getSurveysFailure)
}
const onCreateSurvey = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.onCreateSurvey(data)
    .then(ui.onCreateSurveySuccess)
    .catch(ui.onCreateSurveyFailure)
}

const onUpdateSurvey = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.onUpdateSurvey(data)
    .then(ui.onUpdateSurveySuccess)
    .catch(ui.onUpdateSurveyFailure)
}
const onDeleteSurvey = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('onDeleteSurvey data: ', data)
  api.onDeleteSurvey(data)
    .then(ui.onDeleteSurveySuccess)
    .catch(ui.onDeleteSurveyFailure)
}
const onCreateQuestion = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.onCreateQuestion(data)
    .then(ui.onCreateQuestionSuccess)
    .catch(ui.onCreateQuestionFailure)
}
const addSurveyHandlers = () => {
  $('#create-survey').on('submit', onCreateSurvey)
  $('#get-surveys').on('submit', onGetSurveys)
  $('#delete-survey').on('submit', onDeleteSurvey)
  $('#update-survey').on('submit', onUpdateSurvey)
  $('#create-question').on('submit', onCreateQuestion)
}
module.exports = {
  addSurveyHandlers
}
