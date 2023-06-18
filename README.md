# Search_Web_Page_Project

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
