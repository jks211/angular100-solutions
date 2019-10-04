import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { AlbumService } from '../shared/album.service';

@Component({
  selector: 'app-album-edit',
  templateUrl: './album-edit.component.html',
  styleUrls: ['./album-edit.component.css']
})
export class AlbumEditComponent implements OnInit {

  albumQueryString: Observable<string>; 
  album;
  constructor(private route: ActivatedRoute,
              private service: AlbumService,
              private router: Router) { }

  ngOnInit() {
    this.albumQueryString = this.route
    .queryParamMap
    .pipe( map(params => params.get('albumToEdit')));

    this.albumQueryString.subscribe((album)=> this.album = JSON.parse(album))

  }

  editAlbum(form: NgForm){
      console.log('in edit album calling service');      
      this.service.updateAlbum(this.album)
      this.router.navigate(['./albums'])
      
  }

  

}
