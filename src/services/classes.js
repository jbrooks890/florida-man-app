export class Name {
  constructor(name, nickname, firstName = true, lastName) {
    this.name = name;
    this.nickname = nickname;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

export class Animal {
  constructor(name, plural = name + "s", action) {
    this.name = name;
    this.plural = plural;
    this.action = action;
  }
}
