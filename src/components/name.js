class Name {
  constructor(name) {
    this.name = name;
  }

  render() {
    // Create an <h2> element for the profile's name
    const h2 = document.createElement("h2");
    h2.innerText = this.name;
    h2.className = "profile-name";
    return h2;
  }
}

module.exports = Name;
