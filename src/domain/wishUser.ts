import { wishList } from "./wishList";

export class wishUser{
    public id: number;
    public userCode: string;
    public name: string;
    public email: string;
    public ownedWishLists: wishList[];
    public linkedWishLists: wishList[];

    constructor(id: number, userCode: string, name: string, email: string, ownedWishLists: wishList[], linkedWishLists: wishList[]){
        this.id = id;
        this.userCode = userCode;
        this.name = name;
        this.email = email;
        this.ownedWishLists = ownedWishLists;
        this.linkedWishLists = linkedWishLists;
    }
    public addOwnedList(list: wishList){
        this.ownedWishLists.push(list);
    }
    public deleteOwner(list: wishList){
        var indexOfUser = this.ownedWishLists.indexOf(list);
        this.ownedWishLists.splice(indexOfUser,1);
    }
    
}