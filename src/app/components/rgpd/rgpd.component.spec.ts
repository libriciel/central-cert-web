import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RGPDComponent} from './rgpd.component';

describe('RGPDComponent', () => {
    let component: RGPDComponent;
    let fixture: ComponentFixture<RGPDComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RGPDComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RGPDComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
