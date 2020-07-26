import request from '@app/utils/request';

interface ILogin {
  account: string;
  password: string;
}
export function login(data: ILogin) {
  return request({
    url: '/api/admin/userLogin',
    method: 'post',
    data,
  });
}
