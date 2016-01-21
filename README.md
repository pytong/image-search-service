# Image Search

## Overview

This API allows you to search for images and browse recent search queries.

1) I can get the image URLs, alt text and page urls for a set of images relating to a given search string.

2) I can paginate through the responses by adding a ?offset=2 parameter to the URL.

3) I can get a list of the most recently submitted search strings.

## Example image search usage

```
https://image-search-service.herokuapp.com/api/imagesearch/lolcats%20funny
```

## Example pagination usage

```
https://image-search-service.herokuapp.com/api/imagesearch/lolcats%20funny?offset=10
```

## Example recent search strings usage

```
https://image-search-service.herokuapp.com/api/latest/imagesearch
```