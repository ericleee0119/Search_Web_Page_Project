document.addEventListener("DOMContentLoaded", () => {
    const filterContainer = document.getElementById("filterContainer");
    const addFilterButton = document.getElementById("addFilterButton");
    const searchButton = document.getElementById("searchButton");

    addFilterButton.addEventListener("click", addFilterRow);
    searchButton.addEventListener("click", search);

    function addFilterRow() {
        const filterRow = document.createElement("div");
        filterRow.classList.add("filter-row");
        const searchInput = document.createElement("input");
        searchInput.classList.add("add-url");
        searchInput.type = "text";
        searchInput.placeholder = "Add URL...";

        const removeButton = document.createElement("button");
        removeButton.classList.add("remove-filter");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            filterContainer.removeChild(filterRow);
        });

        filterRow.appendChild(searchInput);
        filterRow.appendChild(removeButton);

        filterContainer.appendChild(filterRow);
    }

    function createCheckbox(labelText, value) {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("filter-checkbox");
        checkbox.value = value;
        checkbox.id = value + "Checkbox";

        const label = document.createElement("label");
        label.htmlFor = value + "Checkbox";
        label.textContent = labelText;

        return [checkbox, label];
    }

    function search() {
        const filters = Array.from(document.getElementsByClassName("fix-filter-row")).map(filter1Row => ({
		  attributes: Array.from(filter1Row.getElementsByClassName("filter-checkbox"))
			.filter(checkbox => checkbox.checked)
		})).filter(filter => filter.searchText !== "");
		
		var addUrlElements = document.querySelectorAll('.add-url');

		var addUrlInputs = [];
		addUrlElements.forEach(function(element) {
		  var addUrlValue = element.value;
		  if(addUrlValue !== "")
			addUrlInputs.push(addUrlValue);
		});
		
		var searchInputElement = document.querySelector('.search-input');
		var searchInput = searchInputElement.value;

		filters.push({
		  addUrls: addUrlInputs,
		  searchText: searchInput
		});

        if (filters.length > 0) {
            fetchResults(filters);
        }
		
    }
	
    function fetchResults(filters) {

        console.log(filters);
    }
});
