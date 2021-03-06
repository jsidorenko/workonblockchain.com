import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-c-forme-html-area',
  templateUrl: './html-area.component.html',
  styleUrls: ['./html-area.component.css']
})
export class HtmlAreaComponent implements OnInit {
  @Input() label: string;
  @Input() errorMsg: string;
  @Input() placeholder: string; //optional
  @Input() formattingBar: boolean = false; //optional
  @Input() height: number; //optional
  @Input() width: number; //optional
  @Input() value: string;
  @Output() htmlAreaValue: EventEmitter<string> = new EventEmitter<string>();
  ckeEditorConfig;
  formattingClass;
  constructor() { }

  ngOnInit() {
    if(this.formattingBar) this.formattingClass = 'ckeditor_tab';
    const ckeEditor =  {
      allowedContent: false,
      extraPlugins: 'divarea',
      removePlugins: 'resize,elementspath',
    };

    if(this.height) ckeEditor['height'] = this.height + 'rem';
    if(this.width) ckeEditor['width'] = this.width + 'rem';
    this.ckeEditorConfig = ckeEditor;
  }

}
