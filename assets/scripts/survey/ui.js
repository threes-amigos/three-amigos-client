'use strict'

const store = require('../store')
const showSurveysTemplate = require('../templates/survey-listing.handlebars')

const getSurveysSuccess = (data) => {
  console.log('Get Surveys success', data)
  console.log('data.surveys is, ', data.surveys)
  const showSurveysHtml = showSurveysTemplate({ surveys: data.surveys })
  $('#content').html(showSurveysHtml)
  store.surveys = data.surveys
}
const getSurveysFailure = (error) => {
  console.log('Get Surveys Failure')
  console.error(error)
}
const onCreateSurveySuccess = (data) => {
  console.log('Create Survey success', data)
  // store.surveys = data.surveys
}
const onCreateSurveyFailure = (error) => {
  console.log('Get Surveys Failure')
  console.error(error)
}
module.exports = {
  getSurveysSuccess,
  getSurveysFailure,
  onCreateSurveySuccess,
  onCreateSurveyFailure
}
