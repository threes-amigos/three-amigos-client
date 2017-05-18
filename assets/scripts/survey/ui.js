'use strict'

const store = require('../store')
const showSurveysTemplate = require('../templates/survey-listing.handlebars')
const showQuestionsTemplate = require('../templates/survey-questions.handlebars')
const api = require('./api')
const showDashboardTemplate = require('../templates/survey-dashboard.handlebars')
const showAllSurveysTemplate = require('../templates/all-survey-listing.handlebars')

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
  const onQuestionSubmit = function (event) {
    event.preventDefault()
    console.log('submit question')
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
  $('.question-survey-button').on('click', onQuestionSubmit)
  console.log('this user surverys only: ', surveys)
  // store.surveys = data.surveys
  store.surveys = surveys
  store.allSurveys = data.surveys
  // $(document).ready(function () {
  //   $('.delete-survey').on('click', function () {
  //     console.log('Delete Clicked')
  //   })
  // })
  // when calling the code below from api for some reason
  // the it was not getting called, hence the reason
  // the code is not called from there
  // Delete and refresh front end(via onDeleteSurveySuccess)
  // Use the class and add handler.
  $('.delete-survey').on('click', function (event) {
    event.preventDefault()
    // console.log('onDeleteSurvey: ', event)
    console.log('target_id: ', event.target.id)
    // the button id has the ID, parse it out
    const data = event.target.id.split('-')
    console.log('id: ', data[2])
    api.onDeleteSurvey(data[2])
      .then(onDeleteSurveySuccess)
      .catch(onDeleteSurveyFailure)
  })
  $('.update-survey').on('click', onUserUpdateSurvey)
  $('.take-survey').on('click', onUserTakeSurvey)
  // show all surveys
  const showAllSurveys = showAllSurveysTemplate({ surveys: store.allSurveys })
  $('#allTakeSurveys').empty()
  $('#allTakeSurveys').html(showAllSurveys)
  $('#allTakeSurveys').show()
  $('.take-survey').on('click', onUserTakeSurvey)
  // adding even handler for the the take survey link
  $('.survey-dashboard-link').on('click', onUserTakeSurvey)
  // const showSurveysHtml = showSurveysTemplate({ surveys: surveys })
}

const onSurveyDashboard = function () {
  store.dashboardID = $(this).attr('id')
  console.log('onSurveyDashboard id ', store.dashboardID)
  const surveyData = {
    'survey': {
      'id': store.dashboardID
    }
  }
  console.log('surveyData is ', surveyData)
  api.onGetSurveyQuestions(surveyData)
    .then((questionsData) => {
      console.log('onGetSurveyQuestions databack is ', questionsData)
      return questionsData
    })
    .then((questionsData) => {
      api.onGetSingleSurvey(store.dashboardID)
        .then((databack) => {
          console.log('databack is ', databack)
          const showDashboardHtml = showDashboardTemplate({ survey: databack.survey, questions: questionsData.questions })
          console.log('databack name is ', databack.survey.name)
          $('.dashboard-content').html(showDashboardHtml)
        })
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
const onUserUpdateSurvey = (event) => {
  console.log('onUserUpdateSurvey', event)
  const data = event.target.id.split('-')
  // let's store the ID. The Modal that handles update does
  // not have the ID associated with the button
  store.updateSurveyID = data[2]
  const name = findSurveyNameByID(data[2])
  console.log('survey current name: ' + name)
  $('#current-survey-name').val(name)
  $('#surveyUpdateModal').modal('show')
}
const findSurveyNameByID = function (id) {
  for (let i = 0; i < store.surveys.length; i++) {
    const item = store.surveys[i]
    if (item.id === id) {
      return item.name
    }
  }
}
const onUserTakeSurvey = function (event) {
  console.log('onUserTakeSurvey called')
  const data = event.target.id.split('-')
  console.log('Survey id: ', data[2])
  const surveyID = {
    'survey': {
      'id': data[2]
    }
  }
  console.log('Survey id: ', data[2])
  console.log('Survey data: ', surveyID)
  api.onGetSurveyQuestions(surveyID)
  .then(onGetSurveyQuestionsSuccess)
  .catch(onGetSurveyQuestionsFailure)
}
const onGetSurveyQuestionsFailure = (error) => {
  console.log('onGetSurveyQuestionsFailure Failure')
  console.error(error)
}
const onGetSurveyQuestionsSuccess = (data) => {
  console.log('onGetSurveyQuestionsSuccess success', data)
  $('#takeSurvey').empty()
  const showQuestions = showQuestionsTemplate({ questions: data.questions })
  $('#takeSurvey').html(showQuestions)
  $('#surveyTakeModal').modal('show')

  // store.surveys = data.surveys
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
