var listElement = s('.js-list');

function educationList () {
  var educationList = [];
  var educations = [
    ['Informatics MS', 'KTU', 'https://ktu.edu/', '2016-2018', 'Changed my field from physics to informatics. Have been creating an AI music composer for my thesis.'],
    ['Physics BS', 'KTU', 'https://ktu.edu/', '2012-2016', 'Graduated with a Bachelor of Science in applied physics.'],
    ['Erasmus studies', 'Trieste', 'https://www.units.it/', '2015 fall', 'Met outstanding lads and lasses that enriched me wholly. Struggled really hard in grasping quantum field physics while being an undergraduate.'],
    ['Erasmus studies', 'Bilkent', 'http://w3.bilkent.edu.tr/bilkent/', '2014 fall', 'Opened up all of my horizons. Met amazing people that made the 10x person than I have been before.']
  ];
  makeList(educationList, educations);
  listElement.innerHTML = list(educationList);
}

function jobList () {
  var jobList = [];
  var jobs = [
    ['Software Engineer', 'Icybit', 'https://icybit.co/', '2017 April-September', "Working my ass off further enriching my skills as a developer. Maintaining and updating mainly the front-end of a huge b2b e-commerce shop for most of the time. Later on working on analysis for tons of data."],
    ['Software Engineer Intern', 'Valuetech', 'http://www.valuetech.eu/', '2017 January-April', 'Giving it all to learning to code. My web development career starts from here. "Started from the bottom, now I`m here."'],
    ['Junior Laboratory Coordinator', 'KTU', 'https://ktu.edu/', '2016 Autumn', 'Demonstrations of picturesque and interactive physics and chemistry experiments to students.'],
    ['Back Waiter', 'P F Changs Hawaii', 'http://www.pfchangshawaii.com/', '2016 Summer', 'Crazy summer surfing and hiking while not serving food in one of the busiest restaurants in the world.']
  ];
  makeList(jobList, jobs);
  listElement.innerHTML = list(jobList);
}

function lifeList() {
  var lifeList = [];
  var lives = [
    ['24 year old developer, physicist and a trying to be traveler'],
    ['Languages: Lithuanian, English, German, Italian'],
    ['Fancy playing with my dog']
  ];
  makeList(lifeList, lives);
  listElement.innerHTML = list(lifeList);
}
