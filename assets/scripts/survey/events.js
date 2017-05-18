'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const store = require('../store.js')

const onGetSurveys = function (event) {
  console.log('onGetSurveys called')
  event.preventDefault()
  api.onGetSurveys()
    .then(ui.getSurveysSuccess)
    .catch(ui.getSurveysFailure)
}
const onCreateSurvey = function (event) {
  event.preventDefault()
  console.log('create survey')
  const data = $('#survey-create-input').val()
  console.log('Data is: ', data)
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
  const questionArray = []
  console.log("Create questions form data: ", data.questionSchema)
  for (const prop in data.questionSchema) {
    questionArray.push(data.questionSchema[prop])
  }
  console.log(questionArray)
  // api.onCreateQuestion()
  questionArray.forEach((e, i, a) => {
    const questionNum = i + 1
    api.onCreateQuestion(e, questionNum, store.surveyID)
    .then(ui.onCreateQuestionSuccess)
    .catch(ui.onCreateQuestionFailure)
  })
  $('#create-questions-modal').modal('toggle')
}
const onDeleteQuestion = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.onDeleteQuestion(data)
    .then(ui.onDeleteQuestionSuccess)
    .catch(ui.onDeleteQuestionFailure)
}
const addSurveyHandlers = () => {
  $('#create-survey-form').on('submit', onCreateSurvey)
  $('#get-surveys').on('submit', onGetSurveys)
  $('#delete-survey').on('submit', onDeleteSurvey)
  $('#update-survey').on('submit', onUpdateSurvey)
  $('#create-questions-form').on('submit', onCreateQuestion)
  $('#delete-question').on('submit', onDeleteQuestion)
}
module.exports = {
  addSurveyHandlers
}
