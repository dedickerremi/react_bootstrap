class BundleModel {
  constructor(id, name, bundle) {
    this.id = id;
    this.name = name;
    this.bundle = bundle;
  }
  static checkProperty(obj){
    return 'id' in obj && 'name' in obj && 'bundle' in obj;
  }
}

export default BundleModel;