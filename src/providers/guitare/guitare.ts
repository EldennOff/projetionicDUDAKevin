import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from "angularfire2/firestore";
import { Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";
import 'rxjs/add/operator/map'

@Injectable()
export class GuitareProvider {

  private guitares : any = [];
  guitareSubject = new Subject<any[]>();

  constructor(private db: AngularFirestore) {
    this.getAllGuitares();
  }

  emitGuitareSubject(){
    this.guitareSubject.next(this.guitares.slice());
  }

  /**
   * Obtention des détails d'une guitare de la base de donnée en fonction de l'id
   * @param id
   */
  getGuitareById(id: number){
    for (const guitare of this.guitares){
      if (guitare.id == id) return guitare;
    }
  }

  /**
   * Ajout d'une nouvelle guitare à la base de donnée
   * @param guitare
   */
  saveNewGuitare(guitare: any){
    return new Observable( obs => {
      this.db.collection('guitares').add(guitare).then(() => {
        console.log('success');
        obs.next();
      })
    })
  }

  /**
   * Obtenir les infos de toutes les guitares venant de la base de donnée FireBase
   */
  getAllGuitares(){
    return this.db.collection('guitares').snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map(doc => {
          return {
            id: doc.payload.doc.id,
            data: doc.payload.doc.data()
          }
        })
      })
    ).subscribe(res => {
      this.guitares = res;
      this.emitGuitareSubject();
    })
  }

  /**
   * Mise à jour de la base de donnée d'une guitare
   * @param guitare
   * @param id
   */
  update(guitare: any, id: any){
    return new Observable(obs => {
      this.db.doc(`guitares/${id}`).update(guitare);
      obs.next();
    })
  }

  /**
   * Suppression d'une guitare de la base de donnée
   * @param id
   */
  delete(id: any){
    this.db.doc(`guitares/${id}`).delete();
  }
}
