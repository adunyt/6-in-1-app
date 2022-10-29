(function () {
  var content, createEditor, loadText, showSavedToast;

  content = $(".content");

  loadText = () => {
    var text;
    text = window.localStorage.getItem("my-notes");
    if (text) {
      return content.html(text);
    }
  };

  createEditor = () => {
    var changed, editor, saveTimer;
    editor = new MediumEditor('.content', {
      toolbar: {
        buttons: ['bold', 'italic', 'underline', 'strikethrough', 'anchor', 'h1', 'h2', 'h3', 'orderedlist', 'unorderedlist', 'image', 'pre', 'quote']
      }
    });
    changed = false;
    saveTimer = null;
    return editor.subscribe("editableInput", () => {
      changed = true;
      if (saveTimer != null) {
        clearTimeout(saveTimer);
      }
      return saveTimer = setTimeout(() => {
        console.log("Save note...");
        window.localStorage.setItem("my-notes", content.html());
        changed = false;
        saveTimer = null;
        return showSavedToast();
      }, 2000);
    });
  };

  showSavedToast = () => {
    var el;
    el = $(".saveMessage");
    el.removeClass("visible");
    el[0].offsetWidth = el[0].offsetWidth;
    return el.addClass("visible");
  };

  $(function () {
    loadText();
    return createEditor();
  });

}).call(this);