import { FirstNRowsPipe } from './first-nrows.pipe';

describe('FirstNRowsPipe', () => {
  it('create an instance', () => {
    const pipe = new FirstNRowsPipe();
    expect(pipe).toBeTruthy();
  });
});
