import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Location } from '../models/location.model';

@Injectable({
  providedIn: 'root',
})
export class BlogServiceService {
  arrPosts: Post[];
  currentPostId: number;
  arrLocations: Location[];
  currentLocId: number;

  constructor() {
    // tslint:disable-next-line: max-line-length
    this.currentPostId = 9;
    this.currentLocId = 7;
    this.arrPosts = [
      new Post(
        1,
        'Casa Dani',
        'Located in El Mercado de la Paz, Casa Dani is in the "top of mind" of the best tortillas in Madrid. The absolute reference of this delicacy for those who prefer them plump and juicy, with or without onion.',
        'Calle Ayala, 28 (Mercado de la Paz)',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mejores-tortillas-de-patata-1553774466.jpg?crop=1xw:1xh;center,top&resize=768:*',
        '2020-08-06',
        'madrid'
      ),
      new Post(
        2,
        'José Luis',
        'José Luis´s tortilla skewer is to Madrid what Cibeles herself is. We do not know their secret but any tortilla, really any, that you order is always perfect, juicy on the inside, firm on the outside, neither uncooked nor too much done, with the potatoes at the optimum point ... Extra point: Now they take delivery orders!',
        'Rafael Salgado, 11',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jose-luis-1511372682.jpg?crop=1xw:1xh;center,top&resize=980:*',
        '2020-07-23',
        'madrid'
      ),
      new Post(
        3,
        'Flash Flash',
        'In this successful tortilla shop that celebrates almost half a century, they do not limit themselves to the onions dichotomy, they add chips, parsley, Iberian ham and up to a dozen variants. And that´s just talking about the potato ones. Without them, the options multiply. We stick to the basics, which never goes out of style, and opted for the onions one. AMAZING!',
        'Carrer de la Granada del Penedés, 25',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/flash-flash-1511372686.jpeg?crop=1xw:1xh;center,top&resize=980:*',
        '2020-07-13',
        'barcelona'
      ),
      new Post(
        4,
        'Bar Juan José',
        'In this popular bar in Huelva, you can taste the juiciness of the north and the forcefulness of the south. Well loaded with potatoes, practically liquid in the center ... A delight that is the star of the mornings in the neighborhood. Absolutely delicious!',
        'Calle Villamundaka, 1',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/juan-jose-huelva-1511372670.jpg?crop=1xw:1xh;center,top&resize=980:*',
        '2020-06-15',
        'huelva'
      ),
      new Post(
        5,
        'La Encina',
        'This tortilla is one of the most awarded for the finest peaks in this country and after tasting it, there´s no doubt about it. They use potatoes and onions from the local garden, always the same oil, same old pan and the same everlasting plate to turn it over. It seems there are no utensils like the old ones, right?',
        'Calle Casañé, 2',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/la-encina-1511372662.jpg?crop=1xw:1xh;center,top&resize=980:*',
        '2020-05-01',
        'palencia'
      ),
      new Post(
        6,
        'Taberna da Penela',
        'The Betanzos style is something like the Hermès tortillero: If you haven´t tasted it, you can´t say a word. Here at La Penela they proudly flag it up with their tortillas (without onion) and practically liquid. Amen.',
        'Plaza de Maria Pita, 9',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/la-penela-coruna-1511372677.jpg?crop=1xw:1xh;center,top&resize=768:*',
        '2020-04-04',
        'a coruña'
      ),
      new Post(
        7,
        'La Primera',
        'A tortilla with a view! With views of the Gran Vía, specifically, from its first and imposing corner, the fourth restaurant in Madrid of Paco Quirós after Cañadío, La Maruca and La Bien Aparecida absolutely deserves a visit just for this exquisite tortilla.',
        'Gran Vía, 1',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/la-primera-1511372690.jpg?crop=1xw:1xh;center,top&resize=980:*',
        '2020-03-18',
        'madrid'
      ),
      new Post(
        8,
        'Sagartoki',
        'A championship tortilla. In 2010, Senén González was praised as champion of Spain in the art of potato tortillas. Freshly made, at one of the best bars and venues in the city, you can have the classic tortilla or a wide option of different fillings... There´s no wrong option, they are all excellent!',
        'C/ Prado, 18',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sagartoki-vitoria-1511372686.jpg?crop=1xw:1xh;center,top&resize=980:*',
        '2020-02-13',
        'vitoria'
      ),
    ];
    this.arrLocations = [
      new Location(1, 'Barcelona'),
      new Location(2, 'Madrid'),
      new Location(3, 'Huelva'),
      new Location(4, 'Palencia'),
      new Location(5, 'A Coruña'),
      new Location(6, 'Vitoria'),
    ];
  }

  addPost(pPost): string {
    pPost.id = this.currentPostId;
    this.arrPosts.push(pPost);
    this.currentPostId++;
    console.log(this.arrPosts);
    return 'Post successfully added';
  }

  getPostsByLocation(pLocation): Post[] {
    let arrLocationFiltered: Post[];
    arrLocationFiltered = this.arrPosts.filter((post) => {
      return post.location === pLocation;
    });
    return arrLocationFiltered;
  }
  getPostById(pId): Post {
    return this.arrPosts.find((post) => post.id === pId);
  }
  updatePost(pPost): string {
    const posIndex = this.arrPosts.findIndex((post) => post.id === pPost.id);
    this.arrPosts[posIndex] = pPost;
    return 'Post updated';
  }

  getAllLocations(): Location[] {
    return this.arrLocations;
  }

  getAllPosts(): Post[] {
    return this.arrPosts;
  }

  addLocation(pLocation): string {
    pLocation.id = this.currentLocId;
    this.arrLocations.push(pLocation);
    this.currentLocId++;
    console.log(this.arrLocations);
    return 'Location successfully added';
  }
  getPostsByName(pSearch): Post[] {
    let filteredPosts: Post[];

    filteredPosts = this.arrPosts.filter((post) => {
      return post.title.toLowerCase().includes(pSearch.toLowerCase());
    });
    return filteredPosts;
  }
}
