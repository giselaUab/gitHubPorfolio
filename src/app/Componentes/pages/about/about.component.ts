import { Component, OnInit} from "@angular/core";
import { InfoService } from "src/app/Services/info.service";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

    equipo: any = [];

    constructor(private InfoService: InfoService) { }
      ngOnInit(): void {
        this.InfoService.getinfoequipo()
    .subscribe((resp: any) => {
        this.equipo = resp;
    });
}
}