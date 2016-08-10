---
title: angular-bootstrap
date: 2016-08-10 18:09:29
categories: js
tags:
  - angular
---
<blockquote class="blockquote-center">angular bootstrap</blockquote>
<!-- more -->

```javascript
(function() {
    var myApplication = angular.module("myApplication", []);

    fetchData().then(bootstrapApplication);

    function fetchData() {
        var initInjector = angular.injector(["ng"]);
        var $http = initInjector.get("$http");

        return $http.get("/path/to/data.json").then(function(response) {
            myApplication.constant("config", response.data);
        }, function(errorResponse) {
            // Handle error case
        });
    }

    function bootstrapApplication() {
        angular.element(document).ready(function() {
            angular.bootstrap(document, ["myApplication"]);
        });
    }
}());
```
