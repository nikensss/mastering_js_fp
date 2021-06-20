import chai, { expect, spy } from 'chai';
import spies from 'chai-spies';
import { alternate } from './alternate';
import { callExactly } from './callExactly';
import { once } from './once';

chai.use(spies);

describe('once', () => {
  it('should call the function once', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const fn = () => {};
    const fnSpy = spy(fn);
    const callOnce = once(fnSpy);
    const callOnceSpy = spy(callOnce);

    callOnceSpy();
    callOnceSpy();
    callOnceSpy();
    expect(callOnceSpy).to.have.been.called.exactly(3);
    expect(fnSpy).to.have.been.called.once;
  });
});

describe('alternate', () => {
  it('should alternate between f and g', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const [f, g] = [() => {}, () => {}];
    const [fSpy, gSpy] = [spy(f), spy(g)];
    const fg = alternate(fSpy, gSpy);
    const fgSpy = spy(fg);

    fgSpy();
    expect(fSpy).to.have.been.called.once;
    expect(gSpy).to.have.not.been.called;

    fgSpy();
    expect(fSpy).to.have.been.called.once;
    expect(gSpy).to.have.been.called.once;

    fgSpy();
    expect(fSpy).to.have.been.called.twice;
    expect(gSpy).to.have.been.called.once;

    fgSpy();
    expect(fSpy).to.have.been.called.twice;
    expect(gSpy).to.have.been.called.twice;

    fgSpy();
    expect(fSpy).to.have.been.called.exactly(3);
    expect(gSpy).to.have.been.called.twice;
  });
});

describe('call exactly', () => {
  it('should call exactly 3 times', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const fn = () => {};
    const fnSpy = spy(fn);
    const callExactlyThreeTimes = callExactly(fnSpy, 3);
    const callExactlyThreeTimesSpy = spy(callExactlyThreeTimes);

    callExactlyThreeTimesSpy();
    expect(callExactlyThreeTimesSpy).to.have.been.called.exactly(1);
    expect(fnSpy).to.have.been.called.exactly(1);

    callExactlyThreeTimesSpy();
    expect(callExactlyThreeTimesSpy).to.have.been.called.exactly(2);
    expect(fnSpy).to.have.been.called.exactly(2);

    callExactlyThreeTimesSpy();
    expect(callExactlyThreeTimesSpy).to.have.been.called.exactly(3);
    expect(fnSpy).to.have.been.called.exactly(3);

    callExactlyThreeTimesSpy();
    expect(callExactlyThreeTimesSpy).to.have.been.called.exactly(4);
    expect(fnSpy).to.have.been.called.exactly(3);
  });
});
