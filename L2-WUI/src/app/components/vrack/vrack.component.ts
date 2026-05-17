import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BackendService } from 'src/app/services/backend.service';
import { BrickDialog } from '../brick-dialog/brick.dialog';

/*  Note:
    - R, iX, and C bricks are supported 
    - Only one rack supported at the moment. All bricks will be rendered in the same rack.
*/

@Component({
    templateUrl: './vrack.component.html',
    styleUrls: ['./vrack.component.scss']
})

export class VRackComponent implements OnInit {
    constructor() { }
    backendSVC = inject(BackendService);
    dialog = inject(MatDialog);
    loading = false;
    lstBrick: any = [];

    bricksTest: any = [
       
        { "id": "001c01", "rack": "001", "slot": "01", "partition": "none", "productLabel": "silicon graphics tezro", "type": "Opus [2MB flash]", "serial": "NCC120", "source": "EEPROM", "brickType": "C", "skin": "grey", "display": { "id": "001c01", "revision": "2.0", "line1": "001c03     |", "line2": "Powered Down", "leds": { "pwr": false, "service": false, "fault": false } } },
        { "id": "001c02", "rack": "001", "slot": "02", "partition": "none", "productLabel": "silicon graphics tezro", "type": "Opus [2MB flash]", "serial": "NCC120", "source": "EEPROM", "brickType": "C", "skin": "yellow", "display": { "id": "001c02", "revision": "2.0", "line1": "001c03     |", "line2": "Powered Down", "leds": { "pwr": false, "service": false, "fault": false } } },
        
        
        { "id": "002c01", "rack": "001", "slot": "01", "partition": "none", "productLabel": "", "type": "C (IP41) [2MB flash]", "serial": "NCC120", "source": "EEPROM", "brickType": "C", "skin": "a3000", "display": { "id": "001c01", "revision": "2.0", "line1": "002c01     /", "line2": "Powered Up", "leds": { "pwr": true, "service": true, "fault": true } } },
        { "id": "002i02", "rack": "001", "slot": "02", "partition": "none", "productLabel": "", "type": "IX [2MB flash]", "serial": "NCC120", "source": "EEPROM", "brickType": "C", "skin": "a3000ix", "display": { "id": "001c01", "revision": "2.0", "line1": "002i03     /", "line2": "Powered Up", "leds": { "pwr": true, "service": true, "fault": true } } },
        { "id": "002r03", "rack": "001", "slot": "03", "partition": "N/A", "type": "R [1MB flash]", "serial": "NEA799", "source": "EEPROM", "brickType": "R", "skin": "router-altix", "display": { "id": "001r03", "revision": "2.0", "line1": "002r03     |", "line2": "Powered Down", "leds": { "pwr": true, "service": false, "fault": true } } }
    ];

    ngOnInit(): void {
        this.btnGetConfig(false);
        //this.lstBrick = this.bricksTest; // for local testing
    }
    btnShowTestRack(): void {
        //this.lstBrick = this.bricksTest; // for local testing
    }
    btnGetConfig(forceReload: boolean): void {
        this.loading = true;
        this.backendSVC.getRackSummary(forceReload).then(
            (data: any) => {
                if (data.success) {
                    this.lstBrick = data.racksummary || [];
                }
                this.loading = false;
            },
            (err: any) => {
                this.backendSVC.stdErrorHandler(err);
                this.loading = false;
            }
        );
    }
    btnPower(up: boolean): void {
        let strConfirm = up ? 'Power up all bricks?' : 'Power down all bricks?';
        if (!confirm(strConfirm)) return;
        this.backendSVC.cmd_power(up).then(
            (data: any) => {
                let strAct = up ? 'Starting up' : 'Shutting down';
                let msg = data.success ? strAct : 'Failed to execute comman';
                this.backendSVC.printNotification(msg);
            },
            (err: any) => { this.backendSVC.stdErrorHandler(err) }
        );
    }
    btnBrickDialog(brick: any): void {
        this.dialog.open(BrickDialog, { data: { sysid: brick.id, brick } });
    }
}
