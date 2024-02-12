import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PippoComponent } from './pipppo.component';

describe('PippoComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [PippoComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PippoComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'App'`, () => {
    const fixture = TestBed.createComponent(PippoComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('App');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PippoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('App app is running!');
  });
});
