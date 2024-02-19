# Microsoft Azure AI workshop with Azure Vision

This is a workshop to sharp Microsoft Azure cloud skills


This is a quick React app that allows you to type an image url.  For example: https://img.freepik.com/fotos-premium/chicos-jugando-al-futbol-campo-practica-futbol_43157-941.jpg

It returns a JSON response from the Azure Vision service with a description of what it found and identified in the image.

Steps to run locally
1. Clone repo: `git clone https://github.com/rortizv/analyze-and-generate-images-with-Azure-AI.git`
2. Run `npm install`
3. In /src/App.js
   Set your KEY and ENDPOINT values from your own Azure Vision subscription.
4. Run `npm start`


How to use?
1. Go to any website, right click on an image and select `Copy image address` option
2. Go to the app, paste the url and click on `Analyze` button
3. Wait for the Azure response in JSON format
