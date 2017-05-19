# Who Wants To Know?

An web app designed for an authenticated user to be able to create a customized
survey, take any survey, and view own survey dashboard.

- Live app: [Who Wants To Know? Client](https://threes-amigos.github.io/three-amigos-client/)
- Live API: [Who Wants To Know? API](https://hnd-api.herokuapp.com/)
- API repo on GitHub: [lisamsmith100/hnd-api](https://github.com/lisamsmith100/hnd-api)

![Screenshots of landing section for Who Wants To Know?](http://imgur.com/4OoFp5k)
![Screenshots of My Surveys section for Who Wants To Know?](http://imgur.com/sL6YGVZ)
![Screenshots of Create A Survey section for Who Wants To Know?](http://imgur.com/UEC57EG)
![Screenshots of Take A Survey section for Who Wants To Know?](http://imgur.com/PoR8AZo)
![Screenshots of Survey Dashboard section for Who Wants To Know?](http://imgur.com/OW3rPQ1)

## About Who Wants To Know?

Our squad, ThreeS Amigos, built this app to our requirements for project number three.  The deployment requirements change and database requirements change delayed our progress on this project approximately six hours.  Each of us, Don Powers, Tony Leo, and Lisa Smith all worked on every aspect of this project as a triplet, a pair, or individually.

[Who Wants To Know?](https://github.com/threes-amigos/three-amigos-client) lets users design their own survey that has answers on a range from 1 to 5.  The survey can be created from the browser, viewed, and deleted and the survey name can be updated.  At creation of a survey, three questions can be created with a choice for answers from 1 to 5. The questions persist and are related to that particular survey.  The dashboard displays a particular survey and it's associated questions.  Each question displays the number of times anyone has submitted an answer to the survey and then also the average score for a particular question.

Who Wants to Know? is built using HTML, Javascript, JQuery, CSS, Handlebars, Express and relies on Mongo DB/Mongoose to persist data. Code for that API can be found at [three-amigos-express-api](https://github.com/threes-amigos/three-amigos-express-api).

## Project Planning

[Our Project Plan](https://hnd-client/wdi-proj2-plan.xlsx}

### User Stories

Authentication:
As a user, I want to sign up.
As a user, I want to sign in.
As a user, I want to sign out.
As a user, I want to change password.
As a user, I want to see all available surveys.
As a user, I want to see a dashboard.
As a user, I want to see responses to a survey .

Creator:
As a creator, I want to create a survey.
As a creator, I want to add questions for my survey.
As a creator, I want to delete a survey.
As a creator, I want to have a scale from 1-5 for the survey questions (1=low, 5=high)
As a creator, I want takers to submit answers to my survey.
As a creator, I want to see the aggregated results of my survey.
As a creator, I want to see the average of all results per question of my survey.
As as creator, I want to preview the survey questions before submitting.
As a creator, I want to save my survey questions to database.
As a creator, I want to name my survey.
As a creator, I do not want to be able to answer questions to my survey.
As a creator, I want to update the name of my survey.

Takers:
As a taker, I want to choose a survey from the list of all available surveys.
As a taker, I want to answer questions to a survey.
As a taker, I want to update my answers to a survey before submitting.
As a taker, I want to submit my survey answers.
As a taker, I cannot take a survey more than once.

Stretch:
As a user, I want to configure my survey answer scale.
As a creator, I want to specify the number of questions in my survey before creating the questions.
As a taker, I want to see the results of other surveys.
As a user, I want to view all surveys that have been answered.
As a taker, I want to update my answers after submitting.
As a user, I want the dashboard to display total number of surveys.
As a user, I want the dashboard to display the number of  surveys with answers.
As a creator, I want to update my survey after any takers have answered my survey.
As a creator, I want to delete questions for survey.

### Wireframes
- [Original Wirefram](http://imgur.com/a/G4Gr3)
  Due to time constraints, we were unable to spend the time needed to create more elaborate wireframes.  We spent considerable time researching Bootstrap templates for our app.

### Data Model

- [ERD image 1](http://i.imgur.com/iSCmY74.jpg)
- [ERM image 2](http://i.imgur.com/VDSrGf9.jpg)

## Development Process

We spent a lot of time working the Github workflow, meeting during and after class hours in our own homes to have a solid plan.  We held regular standups--twice per day at minimum, discussed and updated our thorough project plan, and coded side-by-side for the entire project as a team.  We traded off roles several times so we all have a stake in every part of the project--coding/pair coding/individual, api/client.  Our cohesion as a team grew although integration of the various parts of the code was a challenge, as well as the Git commands/integration.  We revisited the plan often to make sure we were spending our time working on the most important tasks.


## Dependencies

Install build dependencies with `npm install`.

-   [Webpack](https://webpack.github.io/)
-   [Bootstrap](http://getbootstrap.com)
-   [Handlebars.js](http://handlebarsjs.com/)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3.
