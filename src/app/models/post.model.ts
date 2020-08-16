export class Post {
  id: number;
  title: string;
  text: string;
  address: string;
  image: string;
  date: string;
  location: string;

  constructor(
    pId = 0,
    pTitle = '',
    pText = '',
    pAddress = '',
    pImage = '',
    pDate = '',
    pLocation = ''
  ) {
    this.id = pId;
    this.title = pTitle;
    this.text = pText;
    this.address = pAddress;
    this.image = pImage;
    this.date = pDate;
    this.location = pLocation;
  }
}
