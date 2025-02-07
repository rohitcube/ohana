class User {
    // Private fields (if using modern JavaScript)
    #password;
    #email;

    constructor(
      id,
      email,
      password,
      username,
      // Profile should be passed as its own object
      profile = null
    ) {
      // Essential/identity properties go in constructor
      this.id = id;
      this.#email = email;  // Private for security
      this.#password = password;  // Private for security
      this.username = username;

      // Instance of Profile class
      this.profile = profile || new Profile();

      // Metadata/system properties
      this.createdAt = new Date();
      this.updatedAt = new Date();
      this.isActive = true;
    }

  }

  module.exports = User;

