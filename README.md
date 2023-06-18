# Search_Web_Page_Project

## Function  


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


## Outlook  
1. Build a beautiful UI  
2. Do the fault torrent, when we input an invalid URL, we have not checked it  
3. If the search item is empty, we should tell the user about this
4. If we know our next page we will be directed to when we click the search button  
    We should pass the input value include search input, checked box item, and the URLs to the next page  
    Here, we can append the data in the web address or we can save it to the cookie  
