/**
 * Wrap everything in a IIFE
 */
(function() {

    /**************************************************************
     * Package Data and contructor objects
    ***************************************************************/

    //Package data array (simulated data source, such as JSON or Database recordset)
    var data = [
        {
        name: "SettingsSync",
        description: "The Settings Sync extension, previously known as Visual Studio Code Settings Sync, synchronizes settings, snippets, themes, keybindings, workspaces, extensions, and more across multiple machines. I think this is probably one of the most important and useful extensions that ensures no matter what computer you're on, you can have all the tooling you're used to.",
        author: "Shan Khan",
        url: "https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync",
        downloads: 3832650,
        stars: 710,
        selector: "p1"
        },
        {
        name: "TrailingSpaces",
        description: "HTML Snippets adds in rich language support for HTML markup, including snippets, quick info, and descriptions that include whether a tag is deprecated.",
        author: "Shardul Mahadik",
        url:"https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces",
        downloads: 1681808,
        stars: 55,
        selector: "p2"
        },
        {
        name: "PathIntellisense",
        description: "The Path Intellisense extension helps to autocomplete filenames. Super useful when writing out paths in markup, or in any file that has path references.",
        author: "Christian Kohler",
        url:"https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense",
        downloads: 11280711,
        stars: 118,
        selector: "p3"
        }
    ];

    //Package constructor fuction
    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function() {
        return this.downloads.toLocaleString();
        };
        this.getFormattedStars = function() {
            return this.stars.toLocaleString();
        };
    }

    /**************************************************************
     * Utility Functions
     **************************************************************/

    //Returns today's date, formatted
    var getTodaysDate = function(){
        var today = new Date();
        return today.toDateString();
    };


    //Wrapper function. We're are wrapping document.getElementById to getEl
    var getEL = function(id){
        return document.getElementById(id);
    };

    var writePackageInfo = function(package){
        //Get reference to DOM elements
        var selector = package.selector,
            nameEl = getEL(selector+"-name"),
            descEl = getEL(selector+"-description"),
            authEl = getEL(selector+"-author"),
            downloadEl = getEL(selector+"-downloads"),
            starsEl = getEL(selector+"-stars");

        //Write package data to DOM elements
        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent=package.getFormattedStars();

    };

    //Write Date
    var dateEl = getEL('date');
    dateEl.textContent = getTodaysDate();


    //Write package data one-by-one or with a for loop.
    let i = 0;
    while (i < 3) {
        var packages = new Package(data[i]);
        writePackageInfo(packages);
        i++;
    }
}());