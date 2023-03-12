---
title: 数组分组
date: 2022-04-14T12:00:22.555Z
size: 560
---
##### for循环

```javascript
const chunk = (data, chunkSize) => {
  var temporal = [];
        
  for (var i = 0; i < data.length; i+= chunkSize){
    temporal.push(data.slice(i,i + chunkSize));
  }

  return temporal;
}

// Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]
chunk([1,2,3,4,5,6,7,8], 3)
```

##### while方式

性能更优

```javascript
function chunkArray(data, chunk_size){
    var results = [];
    
    while (data.length) {
        results.push(data.splice(0, chunk_size));
    }
    
    return results;
}

chunkArray([1,2,3,4,5,6,7,8], 3)
```

