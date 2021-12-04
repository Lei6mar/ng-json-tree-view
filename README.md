# ng-json-tree-view

A simple tree viewer component for Angular.


**Demo**

You can check the demo on [Github Pages](https://lei6mar.github.io/tree-view-example/)

**Code**

[Github repo](https://github.com/Lei6mar/ng-json-tree-view)


**Installation**

> npm i ng-json-tree-view


**Usage**

Import the module ```JsonTreeBapModule``` in your AppModule

Insert the ```ng-json-tree-view``` tag in your component html passing a JSON Object:

```
jsonObject = {
      menu: {
        id: 'file',
        value: 'File',
        popup: {
          menuitem: [
            { value: 'New', onclick: 'CreateNewDoc()' },
            { value: 'Open', onclick: 'OpenDoc()' },
            { value: 'Close', onclick: 'CloseDoc()' },
          ],
        },
      },
    };
```

```
<ng-json-tree-view [obj]="jsonObject"></ng-json-tree-view>
```

**The original object can be full edited by default.** You can activate the ```readonly``` property to prevent this:

```<ng-json-tree-view [obj]="jsonObject" [readonly]="true"></ng-json-tree-view>```

