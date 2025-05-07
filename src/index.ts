import app from './app/app';
import { config } from './app/config/env';

app.listen(config.port, () => {
  console.info(`🚀 [running]: http://127.0.0.1:${config.port}`);
});
