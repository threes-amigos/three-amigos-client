// 'use strict'
//
// const getFormFields = require(`../../../lib/get-form-fields`)
// const api = require('./api')
// const ui = require('./ui')
// const config = require('../config')
// const store = require('../store')
// const showDashboardTemplate = require('../templates/survey-dashboard.handlebars')
//
// const onSurveyDashboard = function (event) {
//   console.log('onSurveyDashboard called')
//   event.preventDefault()
//   onSurveyDashboardAPICall()
//     .then(surveyDashboardSuccess)
//     .catch(surveyDashboardFailure)
// }
//
// const onSurveyDashboardAPICall = () => {
//   console.log('onSurveyDashboardAPICall called')
//   return $.ajax({
//     url: config.apiOrigin + '/survey/id',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token}
//   })
// }
//
// const onGetSurveyQuestions = (data) => {
//   console.log('get Survey questions')
//   return $.ajax({
//     url: config.apiOrigin + '/questionsbysurvey',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token,
//       'Content-type': 'application/json'
//     },
//     data
//   })
// }
//
// const surveyDashboardSuccess = (data) => {
//   // console.log('data is ', data)
//
//   data.questions.sort(function (a, b) {
//     return a.id - b.id
//   })
//   const showDashboardHtml = showDashboardTemplate({ surveys: data.surveys })
//   $('.content-survey-dashboard').html(showDashboardHtml)
//   // console.log('showEntries is a success')
// }
//
// const surveyDashboardFailure = (error) => {
//   // console.log('showEntries failed')
//   // console.error(error)
// }
//
// // content-survey-dashboard
//
// const addSurveyHandlers = () => {
//   $('#survey-dashboard').on('submit', onSurveyDashboard)
//   // $('#get-surveys').on('submit', onGetSurveys)
//   // $('#delete-survey').on('submit', onDeleteSurvey)
//   // $('#update-survey').on('submit', onUpdateSurvey)
//   // $('#create-question').on('submit', onCreateQuestion)
//   // $('#delete-question').on('submit', onDeleteQuestion)
// }
// module.exports = {
//   addSurveyHandlers
// }
