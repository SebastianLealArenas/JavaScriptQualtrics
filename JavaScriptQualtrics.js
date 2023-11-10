Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place your JavaScript here to run when the page loads*/

});

Qualtrics.SurveyEngine.addOnReady(function()
{
	/*Place your JavaScript here to run when the page is fully displayed*/
	jQuery("#videoid").on("click", () => {
		starttime = new Date().getTime();
  });
	

});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/
	var pastWT = new Date().getTime()-starttime; // elapsed time is the button clicked time - start time
    Qualtrics.SurveyEngine.setEmbeddedData('time1-1', pastWT); // 'time1-1' is the video ID on the survey flow section > embedded data. update the embedded data value
});