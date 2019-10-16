import { TestBed, async } from '@angular/core/testing';
import { PostListComponent } from './PostList.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PostListComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PostListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'MonBlog'`, () => {
    const fixture = TestBed.createComponent(PostListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('MonBlog');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PostListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('MonBlog app is running!');
  });
});
