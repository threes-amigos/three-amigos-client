'use strict'

const store = require('../store')
const showSurveysTemplate = require('../templates/survey-listing.handlebars')
const api = require('./api')
const showDashboardTemplate = require('../templates/survey-dashboard.handlebars')

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
  // // console.log('data.surveys', surveys[3].id)
  // // const surveyData = {
  // //   'survey': {
  // //     'id': surveys[3].id
  // //   }
  // // }
  // api.onGetSurveyQuestions(surveyData)
  // .then((databack) => {
  //   console.log('here is the databack: ', databack)
  // })
  const showSurveysHtml = showSurveysTemplate({ surveys: surveys })
  $('#content').html(showSurveysHtml)
  $('#userSurveys').empty()
  // const showSurveysHtml = showSurveysTemplate({ surveys: surveys })
  $('#userSurveys').html(showSurveysHtml)

  $('.survey-dashboard-link').on('click', onSurveyDashboard)

  console.log('this user surverys only: ', surveys)
  // store.surveys = data.surveys
  store.surveys = surveys
}

const onSurveyDashboard = function () {
  store.dashboardID = $(this).attr('id')
  console.log('onSurveyDashboard id ', store.dashboardID)
  api.onGetSurveyQuestions(store.dashboardID)
    .then((questionsData) => {
      console.log('onGetSurveyQuestions databack is ', questionsData)
    })
  api.onGetSingleSurvey(store.dashboardID)
    .then((databack) => {
      console.log('databack is ', databack)
      const showDashboardHtml = showDashboardTemplate({ survey: databack.survey })
      console.log('databack name is ', databack.survey.name)
      $('.dashboard-content').html(showDashboardHtml)
    })
}

const getSurveysFailure = (error) => {
  console.log('Get Surveys Failure')
  console.error(error)
}
const onCreateSurveySuccess = (data) => {
  console.log('Create Survey success', data)
  $('.create-survey-modal').modal('toggle')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()

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
