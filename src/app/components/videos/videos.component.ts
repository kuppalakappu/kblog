import { Component } from '@angular/core';

@Component({
	selector: 'app-videos',
	templateUrl: './videos.component.html',
	styleUrls: ['./videos.component.scss'],
})
export class VideosComponent {
	docList = [
		{
			title: 'songone',
			path: 'video1729900735.mp4',
		},
		{
			title: 'songTwo',
			path: 'video1729900735.mp4',
		},
		{
			title: 'songthree',
			path: 'video1729900735.mp4',
		},
	];
}
