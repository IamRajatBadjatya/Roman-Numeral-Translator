import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ConversionLogicService} from '../conversion-logic.service';
import { IntegerToRomanComponent } from './integer-to-roman.component';

describe('IntegerToRomanComponent', () => {
  let component: IntegerToRomanComponent;
  let fixture: ComponentFixture<IntegerToRomanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntegerToRomanComponent],
      providers: [ConversionLogicService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegerToRomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return LXX for input value 70', () => {
    component.callConvert("70");
    expect(component.convertedRomanValue).toBe('LXX');
  });
  it('should return XCV for input value 95', () => {
    component.callConvert("95");
    expect(component.convertedRomanValue).toBe('XCV');
  });
  it('should return LXX for input value 99', () => {
    component.callConvert("99");
    expect(component.convertedRomanValue).toBe('XCIX');
  });
  it('should return MCC for input value 1200', () => {
    component.callConvert("1200");
    expect(component.convertedRomanValue).toBe('MCC');
  });
  it('should return false if input is greater than 3888', () => {
    component.callConvert("4000");
    expect(component.convertedRomanValue).toBeFalsy();
  });
  it('should return false if input is not an integer', () => {
    component.callConvert("test");
    expect(component.convertedRomanValue).toBeFalsy();
  });
});
