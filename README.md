# JavaScriptQualtrics

Hi! This is the JavaScript to capture reaction times I used in the papers dealing with RTs. I integrated it into Qualtrics and it required a few extra steps to make it work.


The JavaScript must be added to **EVERY** question you want to time. Time will start when the participant plays the video and will stop when they select an alternative. 
To get participants' reaction times, go to your survey, click on the question, and go to Edit question > JavaScript.

![EditJava](https://github.com/SebastianLealArenas/JavaScriptQualtrics/assets/129341907/fca658f3-63b7-4617-9281-d9f40f6aa5c6)

Paste the JavaScript and assign a name to the video in the Javascript. I went for time1-1. You must assign a different name to every video. Hit 'Save.'

![JavaScript](https://github.com/SebastianLealArenas/JavaScriptQualtrics/assets/129341907/ce8518a4-a527-4616-91e1-4a6b1f8b97b9)

Once you have done that with every video, go to Survey Flow (Survey > Survey Flow).

![SurveyFlow](https://github.com/SebastianLealArenas/JavaScriptQualtrics/assets/129341907/40774e46-9726-4555-a7c4-7a82bae2e496)

Click on 'Add a New Element Here.'

![AddNewElement](https://github.com/SebastianLealArenas/JavaScriptQualtrics/assets/129341907/4c570ed9-181b-42c5-9056-451a6482484d)

A yellow rectangle will appear. Select the green option, 'Embedded Data.'

![EmbeddedData](https://github.com/SebastianLealArenas/JavaScriptQualtrics/assets/129341907/0a0e29e6-30fa-42f2-8fec-c8ee108b67c9)

A white rectangle that says 'Create New Field or Choose From Dropdown...,' will appear, click on the arrow beside it, select 'Survey Metadata,' and click on 'Embedded Data.'

![SurveyMetadata](https://github.com/SebastianLealArenas/JavaScriptQualtrics/assets/129341907/651633cd-9c84-4488-a7e0-cafa3d8bbef7)

With that done, click on 'Add a New Field.' A white rectangle will appear. This time, time the name you gave your video in the JavaScript, time1-1 in this case. Repeat this step for every video.

![VideoName](https://github.com/SebastianLealArenas/JavaScriptQualtrics/assets/129341907/b96d740f-6845-4c45-91d0-bfd33a49b3db)

![VideoName2](https://github.com/SebastianLealArenas/JavaScriptQualtrics/assets/129341907/5fa3c551-afa0-4725-94f9-49dcb2282146)

When you have finished with all your videos, hit 'Apply' in the bottom right of the page. Times will show in miliseconds and will not appear in Qualtrics. You will have to download the answers/excel file to see the times. 


@SebastianLealArenas
