# space-search

[![Build Status](https://travis-ci.org/jacobg1/SpaceSearch.svg?branch=master)](https://travis-ci.org/jacobg1/SpaceSearch.svg?branch=master)
[![dependencies Status](https://david-dm.org/jacobg1/SpaceSearch/status.svg)](https://david-dm.org/jacobg1/SpaceSearch)
[![devDependencies Status](https://david-dm.org/jacobg1/SpaceSearch/dev-status.svg)](https://david-dm.org/jacobg1/SpaceSearch?type=dev)

A search UI that pulls photos from NASA's image API. Users input search terms into the search bar and results are displayed below. Includes two different views, grid and list.


When the user inputs a serch term and hits "Go" the front end makes a call to the back end which then makes a call to NASA's image API. Results are returned the backend, procesed and sent to the front end where they are then displayed.


The front end is built in VueJS with HTML, CSS and JavaScript. The back end is built in ExpressJS, a Node based JavaScript framework. 
