# Search_Web_Page_Project

## Function  
Download the code and make sure the three files index.html,  script.js and style.css are in the same root. And clicked the index.html to open the program  
  
Type the search item in the search text  
Click the check box(Support Multiple Choose) to indicate which filters we are going to use
Past the URL to direct to the API  
Add filter can let us include multiple URLs  
The remove button can let us remove the URLs  
Last, we can click the search button to begin 
![image](https://github.com/ericleee0119/Search_Web_Page_Project/blob/main/img/0.png)  

### Example
1. We want to search car  
2. We include Enum and Images filters
3. We add three URLs  
![image](https://github.com/ericleee0119/Search_Web_Page_Project/blob/main/img/1.png)

For the above example, we then click button  
![image](https://github.com/ericleee0119/Search_Web_Page_Project/blob/main/img/2.png)

Followed the above example, we remove https//test/2  
The input will be  
![image](https://github.com/ericleee0119/Search_Web_Page_Project/blob/main/img/3.png)
And the output will be  
![image](https://github.com/ericleee0119/Search_Web_Page_Project/blob/main/img/4.png)


## Architecture
index.html: include the HTML format  
script.js: the javascript code, with trigger event that will listen with the button on html  
style.css: Template  

### index.html  
head: style.css  
body:  
&emsp;search-bar:      
&emsp;&emsp;fixfilterContainer (Include the search input bar and the fixed filters):  
&emsp;&emsp;&emsp;&emsp;search input  
&emsp;&emsp;&emsp;&emsp;check box of each attribute: Filters: text, html text, enum, date, number, foreign key  
&emsp;&emsp;filterContainer (The features that we can keep adding the URL):  
&emsp;&emsp;&emsp;&emsp;add-url function  
&emsp;&emsp;&emsp;&emsp;remove added url    
&emsp;&emsp;addFilterButton    
&emsp;&emsp;searchButton  

### script.js  
Here, we defined the action when we trigger the html  

## Tradeoff  
TBD  

## Outlook  
1. Build a beautiful UI
2. Finished the tradeoff part
3. Added the comments
4. Do the fault torrent, when we input an invalid URL, we have not checked it  
5. If the search item is empty, we should tell the user about this
6. If we know our next page we will be directed to when we click the search button  
    We should pass the input value include search input, checked box item, and the URLs to the next page  
    Here, we can append the data in the web address or we can save it to the cookie  
