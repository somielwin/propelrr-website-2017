export class Career {

    constructor(
        public id : string,
        public name : string,
        public excerpt : string,
        public description : string,
        public imgPath : string,
        public imgFeatured : string,
        public date : string,
        public dateExpired : string,
        public author : string,
        public department : string,
        public url : string
    ) {
        this.id = id;
        this.name = name;
        this.excerpt = excerpt;
        this.author = author;
        this.department = department;
        this.description = description;
        this.imgFeatured = imgFeatured;
        this.imgPath = imgPath;
        this.date = date;
        this.url = url;
        this.dateExpired = dateExpired;
    }
}
