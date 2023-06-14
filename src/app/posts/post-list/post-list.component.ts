import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    { id: 1, title: 'Primera publicacion', content: 'Esta es la descripcion del primer post :p' },
    { id: 2, title: 'Segunda publicacion', content: 'Esta es la descripcion del segundo post :)' },
    { id: 3, title: 'Tercera publicacion', content: "Esta es la descripcion del tercer post :'v" }
  ];

  selectedPost: any;

  showPostDetails(post: any) {
    this.selectedPost = post;
  }
}
