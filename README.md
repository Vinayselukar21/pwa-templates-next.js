# pwa-templates-next.js

# For starting the templates

Step 1: Run npm install in the project folder.

Step 2: Build the project using command 'npm run build'.

Step 3: Start the server using command 'npm start'

# Setup for basic PWA app:
Git Repository: https://github.com/Vinayselukar21/PWA-simple-starter 
# Step 1: Initialize a Next.js Project
• First create a new Next.js project using the following command: 

       npx create-next-app next-pwa
       
• Then navigate to the project folder and install all the dependencies:

       cd next-pwa
       npm i 
       
(you can use any package manager npm, pnpm or yarn)

# Step 2: Add necessary module
•	To add PWA capabilities to your Next.js project we will use next-pwa package:

       npm i next-pwa

# Step 3: Add icons and Create the Manifest file
•	Create a new file called manifest.json inside the public folder of your project and add the following rules to define your pwa along with icons

•	You can also create your manifest.json file for your project from: https://www.simicart.com/manifest-generator.html/  (With the manifest.json file it will include icons also)

 ![image](https://github.com/Vinayselukar21/pwa-templates-next.js/assets/88923859/4627abcb-ca8f-4c3e-a4b3-c70b75892873)

# Step 4: Configure Next.js PWA
•	Configure your next.config.js file to make your project installable with following content:

•	This configuration tells next-pwa to generate the necessary service worker and store it in the public folder.

 ![image](https://github.com/Vinayselukar21/pwa-templates-next.js/assets/88923859/254d0aca-11a0-4fdd-b6f3-610ff61f7155)

•	Now if you use git to manage the source code you will need to add below rules to .gitignore file:

 ![image](https://github.com/Vinayselukar21/pwa-templates-next.js/assets/88923859/6c73757c-a9a2-498d-86e6-30321ce9e5a3)

# Step 5: Update _document.js to add Head Meta
•	Now for letting your project know where the manifest file and the icons are, In the pages folder open _document.js and add the following code inside the <Head> component which will look like this.

 ![image](https://github.com/Vinayselukar21/pwa-templates-next.js/assets/88923859/9bd84d07-bc72-41bb-a6a2-1816dc1ba764)

# Step 6: Testing your PWA Locally
•	Once you complete all the steps it is time to test your pwa using command npm run build.

•	Now in root directory a  .next folder is created which contains all your build files now start the server by running command npm start

Output: This is the output you should be able to se

Link: https://pwa-simple-starter.vercel.app/

![image](https://github.com/Vinayselukar21/pwa-templates-next.js/assets/88923859/64114abb-e3bf-4058-be21-a34eafe57483)

Desktop View                                                                                 

![image](https://github.com/Vinayselukar21/pwa-templates-next.js/assets/88923859/574dcdbb-5a13-4e04-9cd1-70d6c44a480b)

Mobile View

Reference Document: https://web.dev/learn/pwa/
