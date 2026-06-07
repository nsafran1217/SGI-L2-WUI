import { Component, Input } from '@angular/core';

@Component({
    selector: 'brick-nl4r',
    templateUrl: './nl4r.component.html',
    styleUrls: ['./nl4r.component.scss', '../bricks.scss']
})

export class Bricknl4rComponent {
    constructor() { }
    @Input() sysid!: string;
    @Input() brick!: any;
}
