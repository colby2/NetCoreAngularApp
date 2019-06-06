import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

    constructor() { }

    //a wrapper for the alertify confirm function
    confirm(message: string, okCallback: () => any){
        alertify.confirm(message, function (e){//e is the click event on the confirm button
            if(e){
                okCallback();
            }
        });
    }

    success(message: string){
        alertify.success(message);
    }

    error(message: string){
        alertify.error(message);
    }

    warning(message: string){
        alertify.warning(message);
    }

    message(message: string){
        alertify.message(message);
    }


}
