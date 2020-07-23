import request from '@app/utils/request';

interface ILogin {
  tel: string;
  password: string;
}
export function login(data: ILogin) {
  return request({
    url: '/test/test/test',
    method: 'post',
    data,
  });
}
