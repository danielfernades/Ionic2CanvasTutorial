"# Ionic2CanvasTutorial" 


git init

git add .

git commit -m "first commit"

git remote add origin https://github.com/hectorcuper82/Ionic2CanvasTutorial.git

git push -u origin master

-- FOR CORDOVA

cordova plugin add cordova-plugin-crosswalk-webview

ionic cordova platform add android@6.2.3

cordova build android --gradleArg=-PcdvMinSdkVersion=19
