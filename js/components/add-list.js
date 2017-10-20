var listElement = s('.js-list');

function educationList () {
  var educationList = [];
  var educations = [
    ['Informatics MS', 'KTU', 'https://ktu.edu/', '2016-2018', 'Changed my field from physics to informatics. Have been creating an AI music composer for my thesis.'],
    ['Physics BS', 'KTU', 'https://ktu.edu/', '2012-2016', 'Graduated with a Bachelor of Science in applied physics.'],
    ['Erasmus studies', 'Trieste', 'https://www.units.it/', '2015 fall', 'Met outstanding lads and lasses that enriched me wholly. Struggled really hard in grasping quantum field physics while being an undergraduate.'],
    ['Erasmus studies', 'Bilkent', 'http://w3.bilkent.edu.tr/bilkent/', '2014 fall', 'Opened up all of my horizons. Met amazing people that made me the 10x person than I have been before.']
  ];
  makeList(educationList, educations);
  (function () {
    listElement.innerHTML = list(educationList);
  })();
}

function jobList () {
  var jobList = [];
  var jobs = [
    ['Software Engineer', 'Icybit', 'https://icybit.co/', '2017 April-September', "Working my ass off further enriching my skills as a developer. Maintaining and updating mainly the front-end of a huge b2b e-commerce shop for most of the time. Later on working on analysis for tons of data."],
    ['Software Engineer Intern', 'Valuetech', 'http://www.valuetech.eu/', '2017 January-April', 'Giving it all to learning to code. My web development career starts from here. "Started from the bottom, now we`re here."'],
    ['Junior Laboratory Coordinator', 'KTU', 'https://ktu.edu/', '2016 Autumn', 'Demonstrations of picturesque and interactive physics and chemistry experiments to students.'],
    ['Back Waiter', 'P F Changs Hawaii', 'http://www.pfchangshawaii.com/', '2016 Summer', 'Crazy summer surfing and hiking while not serving food in one of the busiest restaurants in the world.']
  ];
  makeList(jobList, jobs);
  (function () {
    listElement.innerHTML = list(jobList);
  })();
}

function lifeDiv() {
  var div = `
    <div class="life">
      <div class="life-text">
          <h1>
            Hi, stranger. My name is Azis. 
          </h1>
          <h3>
            I am a software developer and a physicist trying to bring life to the internet and earn a dollar.
          </h3>
          <h3>
            <a class="enhanced enhance-animate" onclick="goToDesign()">Try this page out!<a>
          </h3>
      </div>
      <img src="https://i.imgur.com/TiY7WFV.jpg">
    </div>
  `;
  (function () {
    listElement.innerHTML = div;
  })();
}
