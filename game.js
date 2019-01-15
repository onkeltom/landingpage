// start creating the actual test routine in an empty timeline
var timeline = [];


var landingpage = {
  type: "external-html",
  url: "static/html/landingpage.html",
  cont_btn: "consent"
};

timeline.push(landingpage)


/* start the experiment */
jsPsych.init({
  timeline: timeline
});
