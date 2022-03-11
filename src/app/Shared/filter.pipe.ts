import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[],searchTitle:string, searchKey: string): any[] {
const res: any=[];
console.log(value);

if(!value ||searchTitle===""||searchKey===""){
  return value;
}

value.forEach(element => {
if(element[searchTitle].trim().toLowerCase().includes(searchKey.toLowerCase())){
res.push(element);


}
});

    return res;
  }

}
