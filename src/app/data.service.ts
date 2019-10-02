import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
  public adduser(a,b,c)
  {
    let url="http://localhost:8000/user/register";
    return this.http.post<any>(url,{uname:a,email:b,pwd:c});
  }
  public logincheck(a,b)
  {
    return this.http.post(`http://localhost:8000/user/login`, { a,b });
  }
  public addmaterial(a,b,c,d,e)
  {
    return this.http.post('http://localhost:8000/user/add',{a,b,c,d,e})
  }
  public view()
  {
    return this.http.get('http://localhost:8000/user/view')
  }

  public viewdetails(id)
  {
    console.log(id,"service")
    return this.http.get('http://localhost:8000/user/viewdetails/'+id)
  }

  public deletedata(id)
  {
    console.log(id,"delete")
    return this.http.get('http://localhost:8000/user/deletedata/'+id)
  }
}
