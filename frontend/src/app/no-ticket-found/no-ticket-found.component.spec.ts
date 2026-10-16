import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoTicketFoundComponent } from './no-ticket-found.component';

describe('NoTicketFoundComponent', () => {
  let component: NoTicketFoundComponent;
  let fixture: ComponentFixture<NoTicketFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoTicketFoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoTicketFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
