class Email {
  constructor(email) {
    this.email = email;
  }

  render() {
    // Create an <h3><a>...</a></h3> element for the profile's email
    const link = document.createElement("a");
    link.href = `mailto:${this.email}`;
    link.innerHTML = this.email;

    const h3 = document.createElement("h3");
    h3.className = "profile-email";
    h3.appendChild(link);
    return h3;
  }
}

module.exports = Email;
