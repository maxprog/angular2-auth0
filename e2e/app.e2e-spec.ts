import { CrisisRoomPage } from './app.po';

describe('crisis-room App', () => {
  let page: CrisisRoomPage;

  beforeEach(() => {
    page = new CrisisRoomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
