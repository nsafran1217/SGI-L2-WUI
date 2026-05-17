import { Component, Input } from '@angular/core';

@Component({
    selector: 'brick-a3000ix',
    templateUrl: './a3000ix.component.html',
    styleUrls: ['./a3000ix.component.scss', '../bricks.scss']
})

export class Bricka3000ixComponent {
    constructor() { }
    @Input() sysid!: string;
    @Input() brick!: any;
}
