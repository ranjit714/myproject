import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkgender'
})
export class CheckgenderPipe implements PipeTransform {

  transform(value: string, gender: string){
    if(gender.toLocaleLowerCase() == "male"){

      return "Mr." + value
    } else{
      return "Miss." + value
    }
  }

}
