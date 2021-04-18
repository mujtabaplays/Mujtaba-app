onEvent("button1", "click", function() {
  setScreen("discover");
});
onEvent("button2", "click", function() {
  if (getChecked("radio1")) {
    setScreen("screen3");
  } else if ((getChecked("radio2"))) {
    setScreen("screen4");
  } else {
    
  }
});
onEvent("dropdown1", "change", function() {
  if (getText("dropdown1") == "discover") {
    setScreen("discover");
  }
});
onEvent("dropdown2", "change", function() {
  if (getText("dropdown2") == "home") {
    setScreen("home");
  }
});
onEvent("radioeasy1", "click", function( ) {
  if (getChecked("radioeasy1")) {
    setScreen("easyforyou");
  }
});
onEvent("radioeasy2", "click", function( ) {
  if (getChecked("radioeasy2")) {
    setScreen("hardforyou");
  }
});
onEvent("buttonnex1", "click", function() {
  setScreen("start");
});
onEvent("buttonnex2", "click", function() {
  setScreen("start");
});
onEvent("start1", "click", function( ) {
  setScreen("thequiz");
});
onEvent("start2", "click", function( ) {
  setScreen("thequiz");
});
onEvent("radio_buttontq1", "click", function( ) {
  setScreen("rockstar");
});
onEvent("radio_buttontq2", "click", function( ) {
  setScreen("infintyward");
});
onEvent("bth", "click", function( ) {
  setScreen("home");
});
onEvent("button5", "click", function() {
  setScreen("updates");
});
onEvent("nextr", "click", function( ) {
  setScreen("quiz2");
});
onEvent("nexti", "click", function( ) {
  setScreen("quiz2");
});
onEvent("fortnitebutton1", "click", function( ) {
  setScreen("2017");
});
onEvent("fortnitebutton4", "click", function( ) {
  setScreen("2018");
});
onEvent("thenextbutton1", "click", function( ) {
  setScreen("quiz3");
});
onEvent("thenextbutton2", "click", function( ) {
  setScreen("quiz3");
});
