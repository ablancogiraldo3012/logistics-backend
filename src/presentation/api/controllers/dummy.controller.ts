import { Route, Controller, Get } from 'tsoa';

@Route('dummy')
export class DummyController extends Controller {
  @Get()
  public async getDummy(): Promise<string> {
    return 'OK';
  }
}