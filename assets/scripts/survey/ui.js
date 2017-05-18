'use strict'

const store = require('../store')
const showSurveysTemplate = require('../templates/survey-listing.handlebars')
const api = require('./api')

const getSurveysSuccess = (data) => {
  console.log('Get Surveys success', data)
  console.log('data.surveys is, ', data.surveys)
  const surveys = []
  for (let i = 0; i < data.surveys.length; i++) {
    const item = data.surveys[i]
    if (item.editable) {
      surveys.push(data.surveys[i])
    }
  }
  const showSurveysHtml = showSurveysTemplate({ surveys: surveys })
  $('#content').html(showSurveysHtml)
  console.log('this user surverys only: ', surveys)
  // store.surveys = data.surveys
  store.surveys = surveys
}
const getSurveysFailure = (error) => {
  console.log('Get Surveys Failure')
  console.error(error)
}
const onCreateSurveySuccess = (data) => {
  console.log('Create Survey success', data)
  console.log('Data.name', data.survey.name)
  store.name = data.survey.name
  store.surveyID = data.survey.id
  console.log(store.name)
  $('#question-form-survey-name').html(store.name)
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('#create-questions-modal').modal('toggle')
  // store.surveys = data.surveys
}
const onCreateSurveyFailure = (error) => {
  console.log('Get Surveys Failure')
  console.error(error)
}
const onDeleteSurveySuccess = (data) => {
  // update the store with the vaild surveys
  api.onGetSurveys()
    .then(getSurveysSuccess)
    .catch(getSurveysFailure)
  console.log('Delete Survey success', data)
  // store.surveys = data.surveys
}
const onDeleteSurveyFailure = (error) => {
  console.log('Delete Surveys Failure')
  console.error(error)
}
const onUpdateSurveySuccess = () => {
  // update the store with the vaild surveys
  console.log('Update Survey success')
  // update the store with the vaild surveys
  api.onGetSurveys()
    .then(getSurveysSuccess)
    .catch(getSurveysFailure)
}
const onUpdateSurveyFailure = (error) => {
  console.log('Update Surveys Failure')
  console.error(error)
}

const onCreateQuestionSuccess = (data) => {
  console.log('Create Question success', data)
  // store.surveys = data.surveys
}
const onCreateQuestionFailure = (error) => {
  console.log('create-survey Question Failure')
  console.error(error)
}
const onDeleteQuestionSuccess = () => {
  console.log('Delete Question success')
  // store.surveys = data.surveys
}
const onDeleteQuestionFailure = (error) => {
  console.log('Delete Question Failure')
  console.error(error)
}
module.exports = {
  getSurveysSuccess,
  getSurveysFailure,
  onCreateSurveySuccess,
  onCreateSurveyFailure,
  onDeleteSurveySuccess,
  onDeleteSurveyFailure,
  onUpdateSurveySuccess,
  onUpdateSurveyFailure,
  onCreateQuestionSuccess,
  onCreateQuestionFailure,
  onDeleteQuestionSuccess,
  onDeleteQuestionFailure
}
