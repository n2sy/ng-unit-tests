import { ReversedPipe } from './reversed.pipe';

describe('ReversedPipe', () => {
  it('create an instance', () => {
    const pipe = new ReversedPipe();
    expect(pipe.transform('nidhal')).toEqual('lahdin');
  });
});
