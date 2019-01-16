# Click Count

* When a user clicked a link on the webpage, it will display the number of click on the link.

* HTML - Basic Structure

* CSS - User Interface

* JavaScript - Click Function and Get Data for specific period

* JSON - Store Data

## Simple Click Count on Link
* Count value will be reset when the page is refreshed
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Click Count</title>
</head>
<body>
    <div class="main">
        <h1>Click Counter</h1>
        <a href="./click-count.txt" target="_blank" id="fileClick">Click me: 0</a>
    </div>
    <script>
        var hyperlink = document.getElementById("fileClick"), count = 0;
        hyperlink.onclick = function() {
            count += 1;
            hyperlink.innerHTML = "Click me: " + count;
        }
    </script>
</body>
</html>
```

## Click Count on Link 
* Count value will be stored
* Serverside Script like PHP, NodeJS should be required

```html

```
