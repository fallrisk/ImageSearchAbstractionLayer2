# Image Search Abstraction Layer

http://www.freecodecamp.com/challenges/image-search-abstraction-layer

I used the [Imgur API](http://api.imgur.com/).

## User Stories (Requirements)
* User Story: I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
* User Story: I can paginate through the responses by adding a ?offset=2 parameter to the URL
* User Story: I can get a list of the most recently submitted search strings.

## Setup
This project was done in WebStorm 11.0.3 with no file watchers. I used the current version of
Javascript to make it easier to debug in WebStorm. It's easier because I don't have to deal with
source-maps.

## Example Usage
To get results for a search query use the API like this:
```
/api/imagesearch/cat
```
This would search for cat images. You will always get 59 results. You can change which 10 you want by
adding an offset like this:
```
/api/imagesearch/cat?offset=1
```
This would return images 60 to 119, inclusive.

To get the latest searches made you can query the API like this:
```
/api/latest/imagesearch
```
This will return all the searches done.

## Extras

:whale:[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
