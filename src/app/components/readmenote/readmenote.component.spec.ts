import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadmenoteComponent } from './readmenote.component';

describe('ReadmenoteComponent', () => {
	let component: ReadmenoteComponent;
	let fixture: ComponentFixture<ReadmenoteComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ReadmenoteComponent],
		});
		fixture = TestBed.createComponent(ReadmenoteComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
