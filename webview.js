const path = require("path");

module.exports = Franz => {
  const getMessages = function getMessages() {
    let count = 0;
    const searchElement = document.querySelector(".dialogs-list");
    if (searchElement) {
      const elements = document.querySelectorAll(".dialog-badge");
      if (elements) {
        for (let i = 0; i < elements.length; i += 1) {
          if (elements[i].innerHTML !== 0) {
            count += 1;
          }
        }
      }
    }

    Franz.setBadge(count);
  };

  Franz.injectCSS(path.join(__dirname, "service.css"));
  Franz.loop(getMessages);
};
