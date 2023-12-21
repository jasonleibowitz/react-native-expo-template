import Realm, { BSON } from "realm";

export class Profile extends Realm.Object<Profile> {
  _id!: BSON.ObjectId;
  name!: string;

  static schema: Realm.ObjectSchema = {
    name: "Profile",
    properties: {
      _id: {
        type: "objectId",
        default: () => new BSON.ObjectId(),
      },
      name: "string",
    },
    primaryKey: "_id",
  };
}
