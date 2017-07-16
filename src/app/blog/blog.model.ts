export class Blog {

    constructor(
        public id : number,
        public name : string,
        public excerpt : string,
        public description : string,
        public imgPath : string,
        public imgFeatured : string,
        public date : string,
        public author : string,
        public category : string,
        public tags : string,
        public url : string
    ) {
        this.id = id;
        this.name = name;
        this.excerpt = excerpt;
        this.author = author;
        this.category = category;
        this.description = description;
        this.imgFeatured = imgFeatured;
        this.imgPath = imgPath;
        this.date = date;
        this.tags = tags;
        this.url = url;
    }
}