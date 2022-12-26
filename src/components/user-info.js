const Name = require("./name");
const Email = require("./email");

class UserInfo {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  render() {
    // Create and combine the name and email elements together in a <div>
    const name = new Name(this.name);
    const email = new Email(this.email);

    const div = document.createElement("div");
    div.className = "user-info";
    div.appendChild(name.render());
    div.appendChild(email.render());

    return div;
  }
}

module.exports = UserInfo;
