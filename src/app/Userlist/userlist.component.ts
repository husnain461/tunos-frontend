// @ts-ignore
import {component} from '@angular/core';
import {onInit} from "./onInit";

// @ts-ignore
@component({
    selector: 'app-user list',
    templateUrl: './user list.component.html',
    styleUrl: ['./user list.component.css']
})
export class userlistComponent implements onInit {
    
    constructor() { }
    
    ngOnInit(): void {
    }
    
}
