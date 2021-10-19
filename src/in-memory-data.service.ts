import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent,HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpClient: HttpClient,

    ) { }

    getHttpHeaders(contentType: string = 'json',Accept: boolean = false) {
           
      
      // if(!Accept){
      //   return new HttpHeaders({
      //     'Content-Type': 'application/json',
      //     'Access-Control-Allow-Origin': '*',
      //     'Authorization': 'Bearer ' + this.token,
      //     'Ocp-Apim-Subscription-Key': this.config.authTokenKey 
      //   });
      // }else{
      //   return new HttpHeaders({
      //     'Content-Type': 'application/'+contentType,
      //     'Access-Control-Allow-Origin': '*',
      //     'Authorization': 'Bearer ' + this.token,
      //     'Ocp-Apim-Subscription-Key': this.config.authTokenKey 
      //   });
      // }
    
    }

    public JsonPlaceHolder(){
      return this.httpClient.get(`https://jsonplaceholder.typicode.com/users`);
    }

    service(method: string, body: any, httpAttribute: string = "post", contentType: string = "json",Accept: boolean = false) {
		 

      const httpOptions = { headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      
      }) };

      
    
              return this.httpClient.post(method, body ,httpOptions );
        
      }



}
