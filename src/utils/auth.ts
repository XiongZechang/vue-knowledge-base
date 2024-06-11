import Cookies from 'js-cookie';

const TokenKey: string = 'token';
const Name: string = 'name';

export function getToken(): string | undefined {
  return Cookies.get(TokenKey);
}

export function setToken(token: string): void {
  Cookies.set(TokenKey, token);
}

export function removeToken(): void {
  Cookies.remove(TokenKey);
}

export function getName(): string | undefined {
  return Cookies.get(Name);
}

export function setName(name: string): void {
  Cookies.set(Name, name);
}

export function removeName(): void {
  Cookies.remove(Name);
}