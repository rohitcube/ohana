class Profile {
    // Private fields to match Mongoose schema
    #firstName;
    #lastName;
    #bio;
    #interests;
    #country;
    #picture;
    #events;    // Will store array of event IDs

    constructor({
        firstName,
        lastName,
        bio = '',
        interests = [],
        country,
        picture = 'default-profile.jpg',
        events = []
    }) {
        // Using an object parameter makes it easier to create from Mongoose documents
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#bio = bio;
        this.#interests = interests;
        this.#country = country;
        this.#picture = picture;
        this.#events = events;
    }

    // Getters to access private fields
    get firstName() { return this.#firstName; }
    get lastName() { return this.#lastName; }
    get bio() { return this.#bio; }
    get interests() { return [...this.#interests]; }  // Return copy to prevent direct modification
    get country() { return this.#country; }
    get picture() { return this.#picture; }
    get events() { return [...this.#events]; }

    // Business logic methods
    getFullName() {
        return `${this.#firstName} ${this.#lastName}`;
    }

    addInterest(interest) {
        if (!this.#interests.includes(interest)) {
            this.#interests.push(interest);
        }
    }

    addEvent(eventId) {
        if (!this.#events.includes(eventId)) {
            this.#events.push(eventId);
        }
    }

    // Method to convert to plain object for Mongoose
    toMongooseObject() {
        return {
            firstName: this.#firstName,
            lastName: this.#lastName,
            bio: this.#bio,
            interests: this.#interests,
            country: this.#country,
            picture: this.#picture,
            events: this.#events
        };
    }

    // Static method to create from Mongoose document
    static fromMongooseObject(mongooseDoc) {
        return new Profile({
            firstName: mongooseDoc.firstName,
            lastName: mongooseDoc.lastName,
            bio: mongooseDoc.bio,
            interests: mongooseDoc.interests,
            country: mongooseDoc.country,
            picture: mongooseDoc.picture,
            events: mongooseDoc.events
        });
    }
}

module.exports = Profile;