//( ͡° ͜ʖ ͡°)
//(  ͡°  ͜ ʖ  ͡° ) w i d e  l e n n y  i s  h e r e  t o  t e s t  i f  c e l i n e  c a n  g i t
//(° ͜ʖ°) she could
function searching() {
  var requiredCourse = [];
  var recommendedCourse = [];
  let jsondata;
  var recommendedCoursesArray = [];
  var requiredCoursesArray = [];

  try {

    var x = document.getElementById("coursecode").value;
    /*fetch the json file from the yrl of the course code*/
    fetch('https://api.kth.se/api/kopps/v2/course/'+ x +'/detailedinformation').then(
      function(u){
        return u.json();}
    ).then(function(json) {
    //turns json into a workable object
      jsondata = json;
      var jsonOBJ = jsondata;

      //adds data from the place required courses can be found to string
      if(jsonOBJ.publicSyllabusVersions[0].courseSyllabus.eligibility){
          var requiredCourse = jsonOBJ.publicSyllabusVersions[0].courseSyllabus.eligibility;
          //finds all coursecodes in the required courses string
          var reqArray = new Array(requiredCourse.match(/[A-Z][A-Z][0-9][0-9][0-9][0-9]/g)); //reqs;
          if(reqArray.length > 0) {
            for (i = 0; i < reqArray.length; i++) {
              requiredCoursesArray.push((reqArray[i]));
            }
          }
      }
      //adds data from the place recommended courses can be found to string
      if(jsonOBJ.course.prerequisites){
          var recommendedCourse = jsonOBJ.course.prerequisites;
          //finds all coursecodes in the recommended courses string
          var recArr = new Array(recommendedCourse.match(/[A-Z][A-Z][0-9][0-9][0-9][0-9]/g));//recs;
          if(recArr.length > 0) {
            for (i = 0; i < recArr.length; i++) {
              recommendedCoursesArray.push((recArr[i]));
            }
          }
      }
  

      var i;
    /*pushing name of the course searched for, so that the index 0 of courses
    array always contains the name of the searched course, and the rest is two
    arrays with required and recommended courses*/
            var namn = new String(jsonOBJ.course.title);
                // recommendedCoursesArray.push(namn);
            console.log([namn , requiredCoursesArray, recommendedCoursesArray]);

            return [namn , requiredCoursesArray, recommendedCoursesArray];

     }


    ).catch(function(){
      console.log("klar")
      return([]);})
      }
  catch(err) {
    return([]);
    // document.getElementById("demo").innerHTML = err.message;
  }
}
