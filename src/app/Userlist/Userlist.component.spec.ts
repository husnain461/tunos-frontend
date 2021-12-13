import { TestBed } from "@angular/core/testing";
import { AppComponent } from './app.component';

function describe(userListComponent: string, param2: () => void) {
    
}

describe('User listComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        let UserlistComponent;
        const fixture = TestBed.createComponent(UserlistComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'Tunos'`, () => {
        let UserlistComponent;
        const fixture = TestBed.createComponent(UserlistComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('Tunos');
    });

    it('should render title', () => {
        let UserlistComponent;
        const fixture = TestBed.createComponent(UserlistComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('.content span')?.textContent).toContain('Tunos app is running!');
    });
});
