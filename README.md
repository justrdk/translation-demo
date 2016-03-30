# translation-demo
Translation UI using google translate api. 

1. Clone repo, 
2. Run npm install 
3. Run the webpack server. `webpack-dev-server --progress --colors` 
4. Create your project on google cloud platform and put the api key on 
**translation-demo/src/app.jsx**

Right now it just translates to english or arabic, you can modify the translation request 
and change the destination language. No origin language is set, so translate api will autodetect the language you typed the 
original text.
