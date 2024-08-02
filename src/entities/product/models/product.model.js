export class Product {
  tags = null;

  constructor(id, name, description, tags) {
    this._id = id;
    this.name = name;
    this.description = description;
    this.tags = tags;
  }

  get id() {
    return this._id;
  }
}
