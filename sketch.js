var data = [
    {
      Text: "<span>Are you sure you want to delete this post?<br/><br/><br/><br/>And write a new one?<br/><br/><br/><br/><a href='index.html'>Yes<a/><span/>"
    }
  ];
  
  var allElements = document.getElementsByClassName("typeing");
  for (var j = 0; j < allElements.length; j++) {
    var currentElementId = allElements[j].id;
    var currentElementIdContent = data[0][currentElementId];
    var element = document.getElementById(currentElementId);
    var devTypeText = currentElementIdContent;
  
    // type code
    var i = 0, isTag, text;
    (function type() {
      text = devTypeText.slice(0, ++i);
      if (text === devTypeText) return;
      element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
      var char = text.slice(-1);
      if (char === "<") isTag = true;
      if (char === ">") isTag = false;
      if (isTag) return type();
      setTimeout(type, 60);
    })();
  }
  
  function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
  }

