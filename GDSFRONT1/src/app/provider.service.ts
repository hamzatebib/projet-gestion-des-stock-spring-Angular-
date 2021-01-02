import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {
 // un commentairee
  //urlProviders = 'http://127.0.0.1:8088/amsapiv2/providers/';
  //urlProviders = 'http://127.0.0.1:8087/providers';
  urlProviders = 'http://127.0.0.1:8006/providers';
  provider: any;
  username = sessionStorage.getItem('username');
  password = sessionStorage.getItem('password');

  

  constructor(private Http: HttpClient) { }

  listProviders() {

   //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
//return this.Http.get(this.urlProviders + '/list', { headers });
return this.Http.get(this.urlProviders + '/list');
}

createProvider(myform) {
//const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
this.provider = {
'name': myform.value.providerName,
'email': myform.value.providerEmail,
'address': myform.value.providerAdress
}
//return this.Http.post(this.urlProviders + '/add', this.provider, { headers});
return this.Http.post(this.urlProviders + '/add', this.provider);
}
updateProvider(myObj) {
// const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
//return this.Http.put(this.urlProviders + '/' + myObj['id'], myObj, { headers });
return this.Http.put(this.urlProviders + '/' + myObj['id'], myObj);
}

deleteProvider(myObj) {
//const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
//return this.Http.delete(this.urlProviders + '/' + myObj['id'], { headers })
return this.Http.delete(this.urlProviders + '/' + myObj['id'])
}
getProvider(id) {
// const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
//return this.Http.get(this.urlProviders + '/' + id, { headers })
return this.Http.get(this.urlProviders + '/' + id)
}
}
