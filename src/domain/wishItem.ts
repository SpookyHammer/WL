export class wishItem {
    public id: number;
    public name: string;
    public description: string;
    public wishlistId: number;
    public link: string;
    public photoURL: string;

    constructor(id: number, name: string, description: string, wishlistId: number, link: string, photoURL: string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.wishlistId = wishlistId;
        this.link = link;
        this.photoURL = photoURL;
    }
}