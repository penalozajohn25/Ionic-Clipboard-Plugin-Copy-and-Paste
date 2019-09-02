import { Component } from '@angular/core';
import { Clipboard } from '@ionic-native/clipboard/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  CopyTextAreaText:string = "Sample text to copy!";
  PasteTextAreaText:string = "Paste here!";

  constructor(private clipboard: Clipboard) {}

  public copyText(){
    this.clipboard.copy(this.CopyTextAreaText);
  }

  public pasteText(){
    this.clipboard.paste().then(
      (resolve: string) => {
         this.PasteTextAreaText = resolve;
         console.log(resolve);
       },
       (reject: string) => {
         console.error('Error: ' + reject);
       }
     );
  }

  clearClipboard(){
    this.clipboard.clear();
  }
  
}
