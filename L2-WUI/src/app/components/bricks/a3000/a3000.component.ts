import { Component, Input } from '@angular/core';

@Component({
    selector: 'brick-a3000',
    templateUrl: './a3000.component.html',
    styleUrls: ['./a3000.component.scss', '../bricks.scss']
})

export class Bricka3000Component {
    constructor() { }
    @Input() sysid!: string;
    @Input() brick!: any;
}
