var listElement = s('.js-list');

function educationList () {
  var educationList = [];
  var educations = [
    ['Informatics MS', 'KTU', 'https://ktu.edu/', '2016-2018'],
    ['Physics BS', 'KTU', 'https://ktu.edu/', '2012-2016'],
    ['Erasmus studies', 'Trieste', 'https://www.units.it/', '2015 fall'],
    ['Erasmus studies', 'Bilkent', 'http://w3.bilkent.edu.tr/bilkent/', '2014 fall']
  ]
  makeList(educationList, educations);
  listElement.innerHTML = list(educationList);
}

function jobList () {
  var jobList = [];
  var jobs = [
    ['Software Engineer', 'Icybit', 'https://icybit.co/', '2017 April-September'],
    ['Software Engineer Intern', 'Valuetech', 'http://www.valuetech.eu/', '2017 January-April'],
    ['Junior Laboratory Coordinator', 'KTU', 'https://ktu.edu/', '2016 Autumn'],
    ['Server', 'P F Changs Hawaii', 'http://www.pfchangshawaii.com/', '2016 Summer']
  ]
  makeList(jobList, jobs)
  listElement.innerHTML = list(jobList);
}
