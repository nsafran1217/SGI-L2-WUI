import { Component, Input } from '@angular/core';

@Component({
    selector: 'brick-router-altix',
    templateUrl: './router-altix.component.html',
    styleUrls: ['./router-altix.component.scss', '../bricks.scss']
})

export class BrickRouterAltixComponent {
    constructor() { }
    @Input() sysid!: string;
    @Input() brick!: any;
}
