import { Component, OnInit } from '@angular/core';
import { Certificat } from '../../model/certificat';
import { CertificatService } from '../../service/certificat.service';
import { DateService } from '../../service/date.service';
@Component({
  selector: 'app-certificat-list',
  templateUrl: './certificat-list.component.html',
  styleUrls: ['./certificat-list.component.css']
})
export class CertificatListComponent implements OnInit {

  certificats: Certificat[];
  selectedCertificat: Certificat;

  constructor(private certificatService: CertificatService, private dateService: DateService) { }

  ngOnInit() {
    /*this.certificatService.selectAll().subscribe(data => {
      console.log(data);
      this.certificats = data;
    });*/

    this.certificats = [
      {
        id: 1,
        notBefore: new Date("November 16, 1995 03:24:00"),
        notAfter: new Date("November 16, 1995 03:22:00"),
        cn: "",
        o: "",
        ou: "",
        l: "",
        st: "",
        c: "",
        t: "",
        dc: "",
        street: "",
        pc: "",
        mails:
          [
            {adresse: "test0@test.test", notifiable: true},
            {adresse: "test1@test.test", notifiable: false},
            {adresse: "test2@test.test", notifiable: true}
          ],
        additionnalMails: []
      },
      {
        id: 2,
        notBefore: new Date("November 17, 1995 03:24:00"),
        notAfter: new Date("December 15, 1995 03:22:00"),
        cn: "",
        o: "",
        ou: "",
        l: "",
        st: "",
        c: "",
        t: "",
        dc: "",
        street: "",
        pc: "",
        mails:
          [
            {adresse: "test3@test.test", notifiable: true}
          ],
        additionnalMails: []
      }
    ]
  }

  getFrenchDate(d: Date){
    return this.dateService.formatFrench(d);
  }

  getRemTime(d1: Date, d2: Date){
    return this.dateService.getRemainingTime(d1, d2);
  }

  onSelect(certificat: Certificat): void {
    this.selectedCertificat = certificat;
  }

  delete(id:number){
    let certs = [];
    let idx = 0;
    for(let i = 0; i < this.certificats.length; i++){
      if(this.certificats[i].id != id){
        certs[idx] = this.certificats[i];
        idx ++;
      }
    }
    this.certificats = certs;
    this.certificatService.delete(id).subscribe();
  }

  deleteAll(){
    this.certificatService.deleteAll().subscribe();
    this.certificats = [];
  }
}