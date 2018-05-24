import { wishItem } from "./wishItem";
import { wishUser } from "./wishUser";

export class wishList{
    public id: number;
    public name: string;
    public isPublic: boolean;
    public items: wishItem[];
    public owners: wishUser[];
    public users: wishUser[];

    constructor(id: number, name: string, isPublic: boolean, items: wishItem[], owners: wishUser[], users: wishUser[]){
        this.id = id;
        this.name = name;
        this.isPublic = isPublic;
        this.items = items;
        this.owners = owners;
        this.users = users;
    }
}