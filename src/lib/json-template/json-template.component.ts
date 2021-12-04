import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-json-tree-view',
  templateUrl: './json-template.component.html',
  styleUrls: ['./json-template.component.css']
})
export class JsonTemplateComponent {

  @Input() obj: any = null;
  @Input() margin = 0;
  @Input() readonly = false;
  @Input() minimized = false;
  isNull = 'null';

  constructor() {}

  objectType(object: any): string {
    if (object == null) {
      return 'undefined';
    }
    if (Array.isArray(object)) {
      return 'Array';
    }

    switch (typeof object) {
      case 'undefined':
        return 'undefined';

      case 'boolean':
        return 'boolean';

      case 'number':
        return 'number';

      case 'string':
        return 'string';

      default:
        return 'Object';
    }
  }

  editContent(
    key: any,
    value: any,
    event: Event,
    tipe: string,
    obj: any = null
  ) {
    if (this.readonly) {
      return;
    }
    const inp = event.target as HTMLInputElement;
    if (Array.isArray(obj)) {
      return;
    }
    let val = inp.innerHTML;
    let input = document.createElement('input');
    input.addEventListener('input', () => {
      input.style.width = input.value.length + 'ch';
    });
    input.value = val;
    input.onblur = () => {
      if (input.parentElement) {
        let v = input.value;
        v = v.replace(/["]/g, '');
        if (v.trim() === '') {
          input.parentElement.innerHTML = val;
          return;
        }
        input.parentElement.innerHTML = v;

        if (tipe === 'value') {
          this.saveValueChild(key, v);
        } else {
          this.saveValueKey(key, v);
        }
      }
    };
    inp.innerHTML = '';
    inp.appendChild(input);
    input.focus();
  }

  saveValueKey(key: any, value: string) {
    if (!this.obj[value]) {
      let valuef = value.replace(/[^a-zA-Z0-9]/g, '_');
      this.obj[valuef] = this.obj[key];
      delete this.obj[key];
    }
  }

  saveValueChild(key: any, value: string) {

    if (value === 'null') {
      return (this.obj[key] = null);
    }

    if (value.match(/\{.*?\}/g)) {
      try {
        value = value.replace(/[']/g, '"');
        return (this.obj[key] = { ...JSON.parse(value) });
      } catch (error) {
        console.error('Error al convertir a objeto');
      }
      return (this.obj[key] = value);
    }

    if (value.match(/\[.*?\]/g)) {
      value = value.replace(/\[(.*?)\]/g, '$1');

      let newArr = value.split(',');
      return (this.obj[key] = newArr);
    }

    if (value === 'true') {
      return (this.obj[key] = true);
    }
    if (value === 'false') {
      return (this.obj[key] = false);
    }
    if (value.match(/^[0-9]/g) && !isNaN(Number(value))) {
      return (this.obj[key] = Number(value));
    }
    return (this.obj[key] = value.replace(/["]/g, ''));
  }

  textValue(value: any): string {
    if (this.objectType(value) === 'string') {
      return `"${value}"`;
    }
    else {
      return value;
    }
  }

  isPrimitive(obj: any) {
    if (!obj) {
      return true;
    }
    return typeof obj !== 'object';
  }

  hiddeElement(event: Event) {
    const inp = event.target as HTMLInputElement;
    if(this.minimized){
      this.minimized = false;
      return
    }

    inp.textContent = inp.textContent === '+' ? '-' : '+';

    let elem = inp.parentNode;
    if (elem) {
      elem.childNodes;
      const childs = elem.children;

      if ((childs[2] as HTMLElement).classList.contains('hidden')) {
        (childs[2] as HTMLElement).classList.remove('hidden');
      } else {
        (childs[2] as HTMLElement).classList.add('hidden');
      }
    }
  }

  changeVisibility(className: any) {
    let elem = document.querySelector<HTMLElement>(`[class*=${className}]`);
    if (elem) {
      elem.style.backgroundColor = 'red';
    }
  }

  iterateObject(object: any) {
    if (object) {
      Object.keys(object).forEach((key) => {
        if (!this.isPrimitive(object[key])) {
          // let elems = document.querySelectorAll<HTMLElement>(
          //   `[class*=_${key}]`
          // );
          // // let length = elems.length;
          // for (let index = 0; index < elems.length; index++) {
          //   // let className;
          //   // console.log(elems[index]);
          //   let idName;
          //   if (elems.length > 1) {
          //     idName = `${key}_${index}_${Date.now()}`;
          //   } else {
          //     idName = `${key}`;
          //   }
          //   // console.log(this.className);

          //   // elems[index].classList.replace(key, className);
          //   elems[index].id = idName;

          //   // elems[index].classList.add("") ;
          //   // elems[index].id = key + '_' + index;
          // }
          this.iterateObject(object[key]);
        }

        // }
      });
    }
  }

  addObject(object: any, event: Event) {
    if(Array.isArray(object)){
      object.push(null);
      return
    }
    const inp = event.target as HTMLInputElement;
    // let val = inp.innerHTML;
    let input = document.createElement('input');
    input.addEventListener('input', () => {
      input.style.width = input.value.length + 'ch';
    });
    input.value = '';
    input.onblur = () => {
      // if (input.parentElement) {
        let v = input.value;
        v = v.replace(/["]/g, '')
        if(v.trim() === ""){
          // console.log(v);
          input.remove()
        // input.parentElement.innerHTML = val;
          return
        }else{
          if(object[v]){
            object[v+'_1'] = null
          }else{

            object[v] = null
          }
          input.remove()
        }
    };
    if(inp.parentElement?.parentElement){

      inp.parentElement.parentElement.appendChild(input);
      input.focus();
    }
  }

  deleteObject(object: any, key: any, value: any){
    if(Array.isArray(object)){
      const index = object.indexOf(value)
      
      object.splice(index, 1);
      return;
    }
    delete object[key];
  }
}
