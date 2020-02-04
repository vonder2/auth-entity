export interface LoginResponse {
  token: string;
  user_name: string;
  config: Config;
}

interface Config {
  default_currency: string;
}
