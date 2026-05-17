import { Component, Input } from '@angular/core';

@Component({
    selector: 'brick-a350',
    templateUrl: './a350.component.html',
    styleUrls: ['./a350.component.scss', '../bricks.scss']
})

export class Bricka350Component {
    constructor() { }
    @Input() sysid!: string;
    @Input() brick!: any;
    @Input() skin!: string;
}
